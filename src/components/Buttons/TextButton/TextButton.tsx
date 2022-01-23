import { Button, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
interface StyleProps {
    color?: string,
    padding?: string,
}
const useStyles = makeStyles<Theme, StyleProps>(theme => ({
    button: {
        // borderBottom: ({ color }) => color ? `1px solid ${color}` : '1px solid #fff',
        borderBottom: '1px solid red',
        borderRadius: '0',
        color: ({ color }) => color ? color : '#fff',
        '& .MuiButton-text': {
            padding: ({ padding }) => padding ? padding : '0',
        }
    }
}))

interface Props extends StyleProps{
    text: string,
    onClick?: () => void,
}

export const TextButton = ({ text, onClick, color, padding }: Props) => {
    const classes = useStyles({ color, padding })
    return (
        <Button
            variant="text"
            onClick={onClick}
            className={classes.button}
        >
            {text}
        </Button>
    )
}
