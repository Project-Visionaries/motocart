import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    makeStyles,
    Paper
} from '@material-ui/core'
import { Header } from '../../../../components/Header/Header'
import { TABLET } from '../../../../constants/screenSizes'
import { cardData } from './cardData'

const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        height: '30vh',
        '& .MuiPaper-root ': {
            display: 'flex',
        },
        '& .MuiPaper-rounded ': {
            borderRadius: 'none',
        },
    },
    cardRoot: {
        width: '150px',
        height: '100%',
        '& .MuiCard-rounded': {
            borderRadius: 'none',
        },
        '& .MuiCardActionArea-root': {
            padding: '10px 15px',
        },
        '& .MuiCardContent-root': {
            fontWeight: 600,
            textAlign: 'center',
        },
    },
    image: {
        height: 70,
        objectFit: 'cover',
        [theme.breakpoints.down(TABLET)]: {
            height: 40,
            width: 80,
        },
        '& img':{
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(.8)',
        }
    },
}))
interface CardProps {
    id?: string,
    image: string,
    title: string,
}


export const PartsCarousel = () => {
    const classes = useStyles()
    return (<>
        <div className={classes.root}>
            <Header
                leftColor="#000"
                title="POPULAR PARTS"
            />
            <Paper>
                {cardData.map(item => (
                    <CarouselCard
                        image={item.image}
                        title={item.title}
                        key={item.id}
                    />
                ))}
                {/* <Divider orientation='horizontal' flexItem={true} /> */}
            </Paper>
        </div>
        <Divider />
    </>
    )
}


const CarouselCard = ({ image, title }: CardProps) => {
    const classes = useStyles()
    return (
        <div className={classes.cardRoot}>
            <Card elevation={0}>
                <CardActionArea>
                    <div className={classes.image}>
                        <img src={image} alt="image2" />
                    </div>

                    <CardContent>
                        {title}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
