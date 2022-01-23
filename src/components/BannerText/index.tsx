import { makeStyles, Typography } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons';
import { PrimaryButton } from '../Buttons/PrimaryButton';

const useStyles = makeStyles(theme => ({

    wrapper: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        '& .btn':{
            posiotin: 'absolute',
            top: 0,
        },
        '& > div': {
            paddingLeft: theme.spacing(10),
        },
        '& .MuiTypography-root': {
            fontWeight: 700,
        },
        '& .MuiTypography-h6': {
            fontWeight: 500,
        },
        [theme.breakpoints.down(426)]: {
            '& .MuiTypography-h6': {
                fontSize: '16px',
            },
            '& .MuiTypography-h2': {
                fontSize: '30px',
            },
            '& .MuiTypography-h4': {
                fontSize: '18px',
            }
        },
        [theme.breakpoints.down(321)]: {
            '& .MuiButtonBase-root': {
                fontSize: "10px"
            },
            '& > div': {
                paddingLeft: theme.spacing(8),
            },
        }
    }
}))
interface Props {
    text: string
}

// Displays the text on the left of the hero section
export const BannerText = ({ text }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            {/* <div className="btn">
                <TextButton 
                text="GET FORM"
                />
            </div> */}
            <div>
                <Typography gutterBottom variant="h6" style={{ color: 'orange' }}>
                    TOP BRANDS {new Date().getFullYear()}
                </Typography>
                <Typography gutterBottom variant="h4">
                    MODERN - CLASSIC
                </Typography>
                <Typography gutterBottom variant="h2">
                    {text}
                </Typography>
                <Typography gutterBottom variant="h6">
                    GET 40% OFF THE SELECTED ITEM
                </Typography>
                <PrimaryButton
                    text="BOOK APPOINTMENT"
                    endIcon={<ChevronRight />}
                />
            </div>
        </div>
    )
}
