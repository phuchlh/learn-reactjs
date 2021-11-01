import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  // dùng useDispatch để lấy dispatch -> lúc muốn gọi gì thì cứ dispatch(...)
  const dispatch = useDispatch();

  // dùng useSelector để lấy cái state từ redux ra
  const count = useSelector((state) => state.count); // ở bên store, rootReducer đặt tên là gì thì state.tên đấy

  const handleIncreateClick = () => {
    const action = increase(); // có action rồi thì phải có dispatch
    console.log(action); // do không truyền payload vào increase ở trên nên mới bị payload: undefined
    dispatch(action);
  };
  const handleDecreaseCliick = () => {
    const action = decrease(); // có action rồi thì phải có dispatch
    console.log(action); // do không truyền payload vào increase ở trên nên mới bị payload: undefined
    dispatch(action);
  };
  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleIncreateClick}>Increase</button>
        <button onClick={handleDecreaseCliick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
