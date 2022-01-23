import { makeStyles, Theme, Typography } from "@material-ui/core"
import { MOBILE_LARGE, MOBILE_MEDIUM } from "../../constants/screenSizes"
interface StyleProps {
    bgImage?: string,
}
const useStyles = makeStyles<Theme, StyleProps>(theme => ({
    root: {
        height: '30vh',
        background: ({ bgImage }) => bgImage ? `url(${bgImage})` : 'url(images/car2.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        '& .bg': {
            height: 'inherit',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiTypography-root': {
                color: '#fff',
                [theme.breakpoints.down(MOBILE_LARGE)]: {
                    fontSize: '2.5rem',
                },
                [theme.breakpoints.down(MOBILE_MEDIUM)]: {
                    fontSize: '2rem',
                }
            }
        }
    },
}))

interface Props extends StyleProps {
    title: string,
}

export const Jumbotron: React.FC<Props> = ({ bgImage, title }) => {
    const classes = useStyles({ bgImage})
    return (
        <div className={classes.root}>
            <div className="bg">
                <div>
                    <Typography variant="h3" >
                        {title}
                    </Typography>
                </div>

            </div>

        </div>
    )
}
