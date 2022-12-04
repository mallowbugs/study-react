import { useEffect } from "react";

export const useBGLightGreen = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightgreen";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
