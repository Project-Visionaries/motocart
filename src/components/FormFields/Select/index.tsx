import { MenuItem, TextField } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'
import React from 'react'

interface Props {
    name: string,
    options: { [key: string]: string, },
    label?: string,
}

export const SelectField = ({ name, options, label }: Props) => {
    const [field, meta] = useField(name)
    const { setFieldValue } = useFormikContext()

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        setFieldValue(name, value)
    }

    const config = {
        select: true,
        fullWidth: true,
        label,
        ...field,
        onChange: handelChange,
        error: false,
        helperText: "",
    }
    if(meta && meta.touched && meta.error){
        config.error = true
        config.helperText = meta.error
    }

    return (
        <TextField
            size='small'
            variant="outlined"
            {...config}
        >

            {Object.keys(options).map((item: string, index) => {
                return (
                    <MenuItem key={index} value={item}>
                        {options[item]}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}
