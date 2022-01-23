import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
    bgColor?: string,
    color?: string,
    position?: 'absolute',
    vertical?: {top?: string | number, bottom?: number | string},
    horizontal?: {left?: string | number, right?: number | string},
}
 const useStyles = makeStyles<Theme, StyleProps>(theme =>({
     root:{
         cursor: 'pointer',
        //  transition: '.5s ease',    
        backgroundColor: ({bgColor}) => bgColor? bgColor:'#fff',
        height: '3rem',
        width: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotateZ(40deg)',
        position: ({position}) => position? position:'relative',
        top: ({vertical}) => vertical? vertical.top: 0,
        bottom: ({vertical}) => vertical? vertical.bottom: 'none',
        left: ({horizontal}) => horizontal? horizontal.left: 0,
        right: ({horizontal}) => horizontal? horizontal.right: 'none',
        '& svg':{
            transform: 'rotateZ(-40deg)',
            fontSize: '1rem',
            color: ({color}) => color? color:  '#000',
            transition: '.2s ease',
        },
        '&:hover':{
            backgroundColor: ({bgColor}) => bgColor? '#000':'#000',
            '& svg':{
                color: ({color}) => color? 'yellow':  '#fff',
            },
        },
     }
 }))

interface Props extends StyleProps {
    icon: React.ReactNode,
}

export const HoverBadge = ({icon, color, bgColor, position, vertical, horizontal}: Props) => {
    const classes = useStyles({color, bgColor, position, vertical, horizontal});
    return (
        <div id="hoverBadge" className={classes.root}>
            {icon}
        </div>
    )
}
