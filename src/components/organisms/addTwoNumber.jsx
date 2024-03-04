// Next.jsとMUIで作成した、数字を受け取る2つのフォーム
// それぞれのフォームに入力された数字を足し合わせる
// その結果を表示する
// その結果が10以上なら「合計が10を超えています」と表示する
// その結果が10以下なら「合計は10以下です」と表示する
// その結果が0なら「合計は0です」と表示する

import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const AddTwoNumber = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(Number(number1) + Number(number2));
  };

  return (
    <Box>
      <TextField label="Number 1" variant="outlined" type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <TextField label="Number 2" variant="outlined" type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
      <Typography variant="h5">Result: {result}</Typography>
      {result > 10 && <Typography>合計が10を超えています</Typography>}
      {result <= 10 && result !== 0 && <Typography>合計は10以下です</Typography>}
      {result === 0 && <Typography>合計は0です</Typography>}
    </Box>
  );
};

export default AddTwoNumber;
