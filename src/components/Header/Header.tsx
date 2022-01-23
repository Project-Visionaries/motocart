import { Divider, Theme, makeStyles } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import { MOBILE_LARGE, MOBILE_MEDIUM, MOBILE_SMALL, TABLET } from '../../constants/screenSizes'
import { SquarePolygon } from './SquarePolygon'

export interface StyleProps {
    leftColor?: string,
    rightColor?: string,
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    root: {
        backgroundColor: '#fff',
        display: 'flex',
        height: '10vh',
    },
    leftContainer: {
        height: '100%',
        flex: 1.5,
        backgroundColor: ({ rightColor }) => rightColor ? rightColor : "#fff",
        [theme.breakpoints.down(TABLET)]: {
            flex: 2,
        },
        [theme.breakpoints.down(MOBILE_LARGE)]: {
            flex: 3,
        },
        [theme.breakpoints.down(MOBILE_MEDIUM)]: {
            flex: 4,
        },
        [theme.breakpoints.down(MOBILE_SMALL)]: {
            flex: 5,
        },

    },
    rightContainer: {
        backgroundColor: ({ rightColor }) => rightColor ? rightColor : "#fff",
        position: 'relative',
        flex: 4,
        display: 'flex',
        justifyContent: 'center',
        '& .item': {
            //   backgroundColor: 'blue',
        },
        '& .controls': {
            position: 'absolute',
            right: 0,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            '& span': {
                backgroundColor: '#eee',
                marginRight: '8px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
            }
        },
    },
}))

interface Props {
    leftColor?: string,
    rightColor?: string,
    title: string,
    component?: React.ReactNode,
}

export const Header:React.FC<Props> = ({ leftColor, rightColor, title, component }) => {
    const classes = useStyles({ leftColor, rightColor })
    return (
        <>
            <div className={classes.root}>
                <div className={classes.leftContainer}>
                    <SquarePolygon
                        title={title}
                        bgColor={leftColor}
                    />
                </div>
                <div className={classes.rightContainer}>
                    <div className="item">
                        {component}
                    </div>
                    <div className="controls">
                        <span><ChevronLeft /></span>
                        <span><ChevronRight /></span>
                    </div>

                </div>

            </div>
            <Divider />
        </>
    )
}

