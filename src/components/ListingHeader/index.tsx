import { makeStyles } from '@material-ui/core'
import { ChevronLeft, ChevronRight, GridOn, List } from '@material-ui/icons'
import React, { useState } from 'react'
import { MOBILE_LARGE } from '../../constants/screenSizes'
const useStyles = makeStyles(theme => ({
    root: {
        padding: '1.5rem .8rem',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down(MOBILE_LARGE)]: {
            padding: '1rem .8rem',
        },
        '& .btn': {
            display: 'flex',
            alignItems: 'center',
        },
        '& .pagination': {
            '& p, & div': {
                marginRight: '.2rem',
                color: '#777',
            }
        },
    },
    button: {
        cursor: 'pointer',
        height: '2rem',
        width: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '.5rem',
        border: '1px solid #ccc',
    }
}))

interface Props {
    toggleList: () => void,
    toggleGrid: () => void,
}

export const ListingHeader: React.FC<Props> = ({ toggleList, toggleGrid }) => {
    const classes = useStyles()
    const [color, setColor] = useState({
        gridColor: false,
        listColor: true,
    })
    const handleToggle = (name: string) => {
        setColor({
            ...color,
            // [name]: !toggleLayout[name]
            gridColor: name === 'grid'? true : false,
            listColor: name === 'list'? true : false,
        })
    }

    const handleClick = (name: string, func: () => void) => () => {
        handleToggle(name)
        func()
    }

    return (
        <div className={classes.root}>
            <div className="btn">
                <Button
                    icon={<GridOn />}
                    onClick={handleClick("gird", toggleGrid)}
                    style={{ backgroundColor: color.gridColor ? 'yellow' : 'none' }}
                />
                <Button
                    icon={<List />}
                    onClick={handleClick("list", toggleList)}
                    style={{ backgroundColor: color.listColor ? 'yellow' : 'none' }}
                />
            </div>
            <div className="btn pagination">
                <p>pages: </p>
                <Button
                    icon={<ChevronLeft />}
                />
                <Button
                    text="1"
                />
                <Button
                    text="2"
                />
                <Button
                    icon={<ChevronRight />}
                />
            </div>

        </div>
    )
}


interface ButtonProps {
    icon?: React.ReactNode,
    text?: string,
    onClick?: () => void,
    style?: React.CSSProperties | undefined
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick, style }) => {
    const classes = useStyles()
    return (
        <div className={classes.button} onClick={onClick} style={style}>
            {icon} {text}
        </div>
    )
}
