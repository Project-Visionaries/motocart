import { makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles(theme => ({
    badge: {
        borderRadius: theme.shape.borderRadius,
        color: '#fff',
        padding: '5px',
        position: 'absolute',
        fontSize: '12px',
        fontWeight: 700,
    }
}))

interface BardgeProps {
    color?: string,
    text?: string,
    style?: React.CSSProperties | undefined

}

export const SquareBadge = ({ color, text, style }: BardgeProps) => {
    const classes = useStyles()
    return (
        <div className={classes.badge} style={{
            backgroundColor: color ? color : '#fff',
            ...style
        }}>
            {text}
        </div>
    )
}
