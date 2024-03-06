import { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function QuestionnaireModal() {
  const [open, setOpen] = useState(false);
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [salary, setSalary] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderTextField = (id, label, type, value, onChange) => (
    <TextField autoFocus margin="dense" id={id} label={label} type={type} fullWidth value={value} onChange={onChange} />
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        アンケートを開く
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>エンジニアとしての経験</DialogTitle>
        <DialogContent>
          {renderTextField("experience", "エンジニアとしての経験年数", "number", experience, (e) => setExperience(e.target.value))}
          {renderTextField("language", "使用できる言語", "text", language, (e) => setLanguage(e.target.value))}
          {renderTextField("salary", "希望する給与", "number", salary, (e) => setSalary(e.target.value))}
          {renderTextField("portfolio", "ポートフォリオ", "text", portfolio, (e) => setPortfolio(e.target.value))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose}>送信</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
