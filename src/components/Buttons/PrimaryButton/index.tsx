import { Button, makeStyles, Theme } from '@material-ui/core'
interface StyleProps {
    bgColor?: string,
    color?: string
}
const useStyles = makeStyles<Theme, StyleProps>(theme => ({
    btnPrimary: {
        backgroundColor: ({ bgColor }) => bgColor ? bgColor : 'yellow',
        borderRadius: '0',
        color: ({color})=> color? color : '#000',
        "&:hover": {
            backgroundColor: 'red',
        },
        '& span': {
            // marginRight: '5px',
        },
        
    }
}))

interface Props extends StyleProps {
    text: string,
    onClick?: () => void,
    type?: "button" | "reset" | "submit" | undefined,
    fullWidth?: boolean,
    endIcon?: React.ReactNode,
    startIcon?: React.ReactNode,

}

export const PrimaryButton = ({ text, onClick, type, fullWidth, endIcon, startIcon, bgColor, color }: Props) => {
    const classes = useStyles({ bgColor, color });
    return (
        <div className="btn">
            <Button
                variant="contained"
                type={type ? type : undefined}
                size="large"
                fullWidth={fullWidth ? fullWidth : false}
                className={classes.btnPrimary}
            >
                {startIcon && startIcon} <span> {text} </span>{endIcon && endIcon}
            </Button>
        </div>
    )
}
