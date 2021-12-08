import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogBox = ({ open, onAgree, handleClose, dialogTextContent, identifier }) => {
    const handleAgree = (id) => {
        onAgree(id);
        handleClose()
    }
    return ( 
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialogTextContent.campHeader}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogTextContent.deleteCampMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Not sure</Button>
          <Button onClick={() => handleAgree(identifier)} color="secondary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
     );
}
 
export default DialogBox;