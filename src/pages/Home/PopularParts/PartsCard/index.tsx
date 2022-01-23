import { Theme, Typography, makeStyles  } from '@material-ui/core'
import { TextButton } from '../../../../components/Buttons/TextButton/TextButton'
import { Spacer } from '../../../../components/spacer/Spacer'
import { MOBILE_SMALL } from '../../../../constants/screenSizes'
const useStyles = makeStyles((theme : Theme)=> ({
    root: {
        padding: '40px 30px',
        color: '#fff',
        display: 'flex',
    },
    item: {
        '& .MuiTypography-h3':{
            fontWeight: 700,
            [theme.breakpoints.down(MOBILE_SMALL)]:{
                fontSize: '40px',
            }
        },
        '& .MuiTypography-h6':{
            fontWeight: 600,
        },
        '& .MuiTypography-body1':{
            fontWeight: 700,
        },
    }
}))

interface Props {
    color?: string,
    image?: string,
    justifyContent?: string,
    title: string,
    subtitle: string,
    carTypes: string,
    onClick?: ()=>void,
}

export const PartsCard = ({
    color,
    image,
    justifyContent,
    title,
    subtitle,
    carTypes,
    onClick,
}: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root} style={{
            background: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            justifyContent: justifyContent? justifyContent : "flex-start",
        }}>
            <div className={classes.item} >
                <Typography variant="h6" style={{color: color? color: '#fff'}}>
                    {subtitle}
                </Typography>
                <Typography gutterBottom variant="h3">
                    {title}
                </Typography>
                <Typography variant="body1">
                    {carTypes}, And
                </Typography>
                <Typography gutterBottom variant="body1">
                    Many More ...
                </Typography>
                <Spacer />
                 <TextButton 
                 text="Learn more"
                 onClick={onClick}
                 />
            </div>
        </div>
    )
}
