// connect to metamask account
const connectAccount = async (provider?: Obj) => {
  if (provider) {
    const accounts = await provider.request({
      method: "eth_requestAccounts",
    });
    if (!accounts.length) {
      return;
    }
    let currentAccount = accounts[0] as string;
    return currentAccount;
  }
};

export default connectAccount;
