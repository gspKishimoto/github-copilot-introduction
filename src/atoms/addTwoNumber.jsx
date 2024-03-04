// Next.jsとMUIで作成した、数字を受け取る2つのフォーム
// それぞれのフォームに入力された数字を足し合わせる
// その結果を表示する
// その結果が10以上なら「合計が10を超えています」と表示する
// その結果が10以下なら「合計は10以下です」と表示する
// その結果が0なら「合計は0です」と表示する

import { useState } from "react";
import { Button, TextField } from "@mui/material";

function AddTwoNumber() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(number1 + number2);
  };

  return (
    <>
      <TextField type="number" label="Number 1" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
      <TextField type="number" label="Number 2" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        {"数字を足し合わせる"}
      </Button>
      <p>{result > 10 ? "合計が10を超えています" : result <= 10 && result > 0 ? "合計は10以下です" : "合計は0です"}</p>
    </>
  );
}

export default AddTwoNumber;
