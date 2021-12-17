import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialog(props: any) {

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCancel}>{props.titleButtonLeft}</Button>
          <Button disabled={props.disabled} onClick={props.handleUpdate}>{props.titleButtonRight}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog