import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { AppStoreContext } from "../store";

interface Props {
  msg: string;
}

const HelloWorld: React.FC<Props> = observer(({ msg }) => {
  const { counter, increment, decrement } = useContext(AppStoreContext);

  return (
    <div>
      <h1>{msg}</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={() => increment()}>
        Increment
      </button>
      <button type="button" onClick={() => decrement()}>
        Decrement
      </button>
    </div>
  );
});

export default HelloWorld;
