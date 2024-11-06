import { useEffect, useState } from "react";
import getUserData from "../logic/getUserData";

const useUserData = () => {

    const [state, setState] = useState(
        JSON.parse(sessionStorage.getItem("user") ?? "{}")
    );

    const setStorage = (data) =>
        sessionStorage.setItem("user", JSON.stringify(data));

    const set = () => {};

    useEffect(() => {
        if (!(typeof state.id === "undefined")) return;
    
        (async () => {
          try {
            const token = sessionStorage.getItem("token");
            const id = token.split(".")[2];
            const data = await getUserData(token, id);
            setStorage(data);
            setState(data);
          } catch (err) {
            throw err;
          }
        })();
      }, []);

      return [state, set];
}

export default useUserData;