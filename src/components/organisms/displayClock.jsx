// 現在時刻を表示するコンポーネント
// 表示する時間は日本時間で、年月日時分秒を表示する
// 表示する時間は1秒ごとに更新する
// 表示する時間のフォーマットはYYYY/MM/DD hh:mm:ss
// MUIを使って、デザインを整える

import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Clock = styled("div")(() => ({
  color: "black",
  fontSize: "2em",
  textAlign: "center",
  margin: "auto",
  marginTop: "10%",
}));

export default function DisplayClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Clock>{time.toLocaleString("ja-JP")}</Clock>
    </Box>
  );
}
