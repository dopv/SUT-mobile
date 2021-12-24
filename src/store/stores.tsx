import unreduxed from "unreduxed";
import { useCallback, useState } from "react";
import React from "react";

const useUnredux = () => {
  const [token, setToken] = useState<any>();

  const setTokenFunc = (newToken: any) => {
    if (newToken && token !== newToken) {
      setToken(newToken.toString());
      // setLogout(false);
    }
  };

  const setTokenAction = React.useCallback((token: any) => setTokenFunc(token), []);

  return { token, setTokenAction };
};

export const [ContainerProvider, useContainer] = unreduxed(useUnredux);