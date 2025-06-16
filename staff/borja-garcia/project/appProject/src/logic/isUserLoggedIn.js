export default () => {
    const token = sessionStorage.getItem("token");
    return token ? true : false;
  };