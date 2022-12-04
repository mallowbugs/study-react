import { useCallback, useState } from "react";

export const useCounter = () => {
  const [num, setNum] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(() => {
    if (num < 10) {
      setNum((prevNum) => prevNum + 1);
    }
  }, [num]);
  const handleDisplay = useCallback(
    () => setIsShow((prevIsShow) => !prevIsShow),
    []
  );

  return { num, isShow, handleClick, handleDisplay };
};
