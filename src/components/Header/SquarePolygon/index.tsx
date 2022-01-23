import { makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { MOBILE_LARGE } from '../../../constants/screenSizes'
interface StyleProps {
    bgColor?: string,
    color?: string,
    size?: string,
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    aside: {
        backgroundColor: ({ bgColor }) => bgColor ? bgColor : "#fff",
        paddingLeft: '15px',
        // width: '100%',
        fontSize: ({ size }) => size ? size : '20px',
        fontWeight: 500,
        color: ({ color }) => color ? color : "#fff",
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
        [theme.breakpoints.down(MOBILE_LARGE)]: {
            fontWeight: 500,
            fontSize: '16px',
        },
    },
}))
interface Props {
    title: string,
    bgColor?: string,
    color?: string,
    size?: string,
}

export const SquarePolygon: React.FC<Props> = ({ title, bgColor, color, size }) => {
    const classes = useStyles({ bgColor, color, size })
    return (
        <aside className={classes.aside}>
            {title}
        </aside>
    )
}

