import { forwardRef } from 'react'
import { TextField } from '@mui/material'

interface InputType {
    name: string,
    placeholder: string
}


const Inputs = forwardRef((props: InputType, ref) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            type='text'
            {...props}

        >

        </TextField>
    )

});

export default Inputs
