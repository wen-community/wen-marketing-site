import { useCallback, useEffect, useState } from "react";
import { RPC_URL, WEN_MINT } from "../../constants";

export default function JupiterSwap() {
  const [isLoaded, setIsLoaded] = useState(false);

  const launchTerminal = useCallback(async () => {
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: RPC_URL,
      formProps: { initialOutputMint: WEN_MINT, fixedOutputMint: true },
      strictTokenList: true,
      widgetStyle: {
        size: "sm",
      },
    });
  }, []);

  useEffect(() => {
    let intervalId = undefined;
    if (!isLoaded || !window.Jupiter.init) {
      intervalId = setInterval(() => {
        setIsLoaded(Boolean(window.Jupiter.init));
      }, 500);
    }

    if (intervalId) {
      return () => clearInterval(intervalId);
    }
  }, [isLoaded]);

  useEffect(() => {
    setTimeout(() => {
      if (isLoaded && Boolean(window.Jupiter.init)) {
        launchTerminal();
      }
    }, 200);
  }, [isLoaded, launchTerminal]);

  return <div id="integrated-terminal" />;
}
