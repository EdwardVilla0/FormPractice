import React from 'react'
import TextField from '@material-ui/core/TextField';

function InputField(props) {
    return (
        <div className="inputField">
            <form noValidate autoComplete="off">
                <TextField
                    error
                    id="outlined-error"
                    label={props.label}
                    variant="outlined"
                />
            </form>
        </div>
    )
}

export default InputField
