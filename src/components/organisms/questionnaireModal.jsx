import { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function QuestionnaireModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={{ width: 400, padding: 2, backgroundColor: "white", margin: "auto", marginTop: "10%" }}>
          <h2 id="modal-modal-title">Engineering Experience</h2>
          <p id="modal-modal-description">Please enter your engineering experience.</p>
          <TextField fullWidth id="experience" label="Experience" placeholder="Enter your experience in years" />
          <Button variant="contained" color="primary" style={{ marginTop: "1em" }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default QuestionnaireModal;
