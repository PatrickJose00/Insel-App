import TextField from '@mui/material/TextField';

function TextFormField (props: any) {

    return (
        <TextField
        autoFocus
        margin="dense"
        id={props.id}
        label={props.label}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        fullWidth
        variant="standard"
      />

    )
}

export default TextFormField