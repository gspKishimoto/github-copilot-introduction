import { Button } from "@mui/material";
import QuestionnaireModal from "./QuestionnaireModal";
import { useState } from "react";
import PropTypes from "prop-types";

OpenModalButton.propTypes = {
  statement: PropTypes.string,
};

function OpenModalButton({ statement = "Open Questionnaire" }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {statement}
      </Button>
      <QuestionnaireModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default OpenModalButton;
