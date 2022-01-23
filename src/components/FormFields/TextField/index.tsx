import { makeStyles, OutlinedTextFieldProps, TextField, Theme } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'
const useStyles = makeStyles<Theme, { bgColor?: string }>(theme => ({
    root: {
        '& .MuiInputBase-root': {
            backgroundColor: ({ bgColor }) => bgColor ? bgColor : 'transparent',
        },

    }
}))
interface Props extends OutlinedTextFieldProps {
    name: string
    bgColor?: string,
}

export const CustomTextField: React.FC<Props> = ({ bgColor, name, size, variant, placeholder, ...props }) => {
    const classes = useStyles({ bgColor })
    const [field, meta] = useField(name)
    const config = {
        ...field,
        autoComplete: 'off',
        size: size ? size : 'small',
        variant,
        placeholder,
        ...props,
    }
    if (meta && meta.touched && meta.error) {
        config.error = true
        config.helperText = meta.error
    }
    return (
        <TextField
            {...config}
            className={classes.root}
        />
    )
}
