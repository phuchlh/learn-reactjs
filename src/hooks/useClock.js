import { useEffect } from "react";
import { useState } from "react";

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockClearInterval = setInterval(() => {
      // setInterval nghĩa là sau n giây sẽ làm gì đấy
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString); // phải clear interval khi đã ẩn cái clock
      // unmount rồi mà cố đi set state
    }, 1000);
    return () => {
      console.log("cleared");
      clearInterval(clockClearInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
