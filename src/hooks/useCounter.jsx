import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [num, setNum] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const doubleNum = useMemo(() => {
    return num * 2;
  }, [num]);

  const handleClick = useCallback(() => {
    if (num < 10) {
      setNum((prevNum) => prevNum + 1);
    }
  }, [num]);
  const handleDisplay = useCallback(
    () => setIsShow((prevIsShow) => !prevIsShow),
    []
  );

  return { num, doubleNum, isShow, handleClick, handleDisplay };
};
