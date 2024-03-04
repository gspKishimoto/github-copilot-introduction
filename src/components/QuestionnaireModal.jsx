import { Dialog, DialogTitle, DialogContent, DialogActions, FormControlLabel, Checkbox, Button } from "@mui/material";

import PropTypes from "prop-types";

function QuestionnaireModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Questionnaire</DialogTitle>
      <DialogContent>
        <FormControlLabel control={<Checkbox />} label="Are you an engineer?" />
        <FormControlLabel control={<Checkbox />} label="Do you have frontend experience?" />
        <FormControlLabel control={<Checkbox />} label="Do you have infrastructure experience?" />
        <FormControlLabel control={<Checkbox />} label="Do you have management experience?" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

QuestionnaireModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

QuestionnaireModal.defaultProps = {
  open: false,
  handleClose: () => {},
};

export default QuestionnaireModal;
