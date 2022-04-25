import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import Layout from "components/Layout";
import Form from "components/Form";
import getWeb3 from "services/getWeb3";
import Box from "public/Box.json";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

const Home: NextPage = () => {
  const [provider, setProvider] = useState<Web3 | undefined>();
  const [account, setAccount] = useState<string>();
  const [contract, setContract] = useState<any>();
  const [values, setValues] = useState<Obj>({});
  const [storedValue, setStoredValue] = useState(0);

  useEffect(() => {
    getWeb3().then((web3) => {
      setProvider(web3);
    });
  }, []);

  useEffect(() => {
    createContract();
  }, [provider]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (contract) {
      await contract.methods.store(values.eth).send({ from: account });
      const response = await contract.methods.retrieve().call();
      setStoredValue(response);
    }
  };

  const createContract = async () => {
    if (provider && !contract) {
      const account = await provider?.eth.getAccounts();
      const networkId = await provider.eth.net.getId();
      if (networkId == 42) {
        const deployedNetwork = Box.networks[42];
        const instance = new provider.eth.Contract(
          Box.abi as AbiItem[],
          deployedNetwork && deployedNetwork.address
        );
        setAccount(account[0]);
        setContract(instance);
        const response = await instance.methods.retrieve().call();
        setStoredValue(response);
      } else {
        console.log("connected to Kovan network");
      }
    }
  };

  return (
    <Layout>
      <div className="w-56">
        <Form onSubmit={onSubmit} setValues={setValues} />
        <div>Stored Value : {storedValue}</div>
      </div>
    </Layout>
  );
};

export default Home;
