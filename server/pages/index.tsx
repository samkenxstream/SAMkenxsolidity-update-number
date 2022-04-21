import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Layout from "components/Layout";
import Form from "components/Form";
import getWeb3 from "services/metamaskService/getWeb3";
import SimpleStorage from "public/SimpleStorage.json";

declare global {
  interface Window {
    ethereum?: provider;
    web3?: any;
  }
}

const Home: NextPage = () => {
  const [provider, setProvider] = useState<any | undefined>();
  const [values, setValues] = useState<Obj>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    getWeb3().then((web3) => setProvider(web3));
  }, []);

  return (
    <Layout>
      <div className="w-56">
        <Form onSubmit={onSubmit} setValues={setValues} />
      </div>
    </Layout>
  );
};

export default Home;
