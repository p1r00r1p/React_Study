import { useState } from "react";
import { ColoredMessage } from "./components/ColeredMessage";
import { Spacer } from "./components/ColeredMessage";
import "./styles.css";

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);

  //ボタンを押した時にStateをカウントアップ
  const onClickButton = () => {
    alert();
    setNum(num + 1);
  };
  const onClickCancelButton = () => {
    setNum(0);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>　こんにちは </h1>
      <ColoredMessage color="blue">元気ですか？ </ColoredMessage>
      <ColoredMessage color="pink">元気です！ </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <Spacer axis="horizontal" size={0} />
      <button onClick={onClickCancelButton}>キャンセル</button>
      <p>{num}</p>
    </>
  );
};
