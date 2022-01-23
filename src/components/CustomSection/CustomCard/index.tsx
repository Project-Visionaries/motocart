import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Divider,
    IconButton,
    makeStyles,
    Typography
} from '@material-ui/core'
import { DateRange, FavoriteSharp, MeetingRoomRounded, SearchOutlined, Settings, ShoppingCartRounded, Star } from '@material-ui/icons'
import { PRIMARY_COLOR, PRIMARY_HOVER_COLOR, SECONDARY_COLOR, TETIARY_COLOR } from '../../../constants/colors'

import { HoverBadge } from './HoverBadge'
import { SquareBadge } from './SquareBadge'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        '& .MuiPaper-rounded': {
            borderRadius: '0',
        },
        '& .MuiTypography-root': {
            fontSize: '15px',
            fontWeight: 600,
            marginBottom: theme.spacing(3),
            transition: '.3s ease',
        },
        '& #hoverBadge': {
            opacity: 0,
            transition: '.7s ease'
        },
        '& .MuiCardActionArea-root:hover': {
            '& .h5': {
                color: PRIMARY_HOVER_COLOR,
            },
            '& #hoverBadge': {
                opacity: 1,
            },
        },
    },
    imageContainer: {
        position: 'relative',
        height: 160,
        overflow: 'hidden',
        '& img': {
            height: '100%',
            objectFit: 'cover',
            transition: '.4s ease',
            transform: 'scale(.8)'
        },
        '&:hover': {
            '& img': {
                transform: 'scale(.95)',
            }
        },
    },
    star: {
        textAlign: 'center',
        marginBottom: theme.spacing(3),
    },
    badge: {
        borderRadius: theme.shape.borderRadius,
        color: '#fff',
        padding: '5px',
        position: 'absolute',
        fontSize: '12px',
        fontWeight: 700,
    },
    icons: {
        display: 'flex'
        // postion: 
    },
    button: {
        '& p': {
            fontSize: '15px',
            fontWeight: 500,
        },
        '& .MuiSvgIcon-root': {
        },
    },
}))

interface DataProps {
    image: string,
    badge1?: string,
    badge2?: string,
    reviews: number,
    title: string,
    amount: string,
    speed: string,
    mode: string,
    year: string,
}
interface Props {
    data: DataProps

}

export const CustomCard: React.FC<Props> = ({ data }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Card>
                <CardActionArea>
                    <div className={classes.imageContainer}>
                        <img src={data.image} alt="image1" />
                        <div className={classes.icons}>
                            <HoverBadge
                                icon={<ShoppingCartRounded />}
                                color="#000"
                                bgColor="yellow"
                                position="absolute"
                                vertical={{ top: '50%' }}
                                horizontal={{ left: '15%' }}
                            />
                            <HoverBadge
                                icon={<SearchOutlined />}
                                position="absolute"
                                vertical={{ top: '50%' }}
                                horizontal={{ left: '35%' }}
                            />
                            <HoverBadge
                                icon={<FavoriteSharp />}
                                // bgColor="red"
                                position="absolute"
                                vertical={{ top: '50%' }}
                                horizontal={{ left: '55%' }}
                            />

                        </div>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant='h5' className="h5">
                            {data.title}
                        </Typography>
                        <div className={classes.star}>
                            {/* Create and array which returns and iterator, 
                            Then use the destructor method to distructure it */}
                            {/* Display the number stars with respect to the number of reviews*/}
                            {[...Array(data.reviews)].map((item, index) => {
                                return <Star style={{ color: SECONDARY_COLOR }} key={index} />
                            })}

                            {[...Array(5 - data.reviews)].map((item, index) => {
                                return <Star style={{ color: '#999' }} key={index} />
                            })}


                        </div>
                        <Typography variant="body1" style={{ textAlign: 'center', fontSize: '20px', }}>
                            ${data.amount}
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <Divider variant='middle' />
                <CardActions style={{ justifyContent: 'center' }}>
                    <IconButton>
                        <CardButton
                            icon={<MeetingRoomRounded />}
                            text={data.speed}
                        />
                    </IconButton>
                    <IconButton>
                        <CardButton
                            icon={<Settings />}
                            text={data.mode}
                        />
                    </IconButton>
                    <IconButton>
                        <CardButton
                            icon={<DateRange />}
                            text={data.year}
                        />
                    </IconButton>
                </CardActions>
            </Card>
            {data.badge1 &&
                <SquareBadge
                    color={PRIMARY_COLOR} // {card[0].badge1?.color ? card[0].badge1?.color : 'red'}
                    text={data.badge1} //{card[0].badge1?.text ? card[0].badge1?.text : 'USED'}
                    style={{ top: 0, left: 1 }}
                />
            }
            {data.badge2 &&
                <SquareBadge
                    color={TETIARY_COLOR} //{card[0].badge2?.color ? card[0].badge2?.color : TETIARY_COLOR}
                    text={data.badge2} //{card[0].badge2?.text ? card[0].badge2?.text : '-15%'}
                    style={{ top: 0, right: 0 }}
                />
            }
            <Divider />
        </div>
    )
}

interface CardButtonProps {
    icon: React.ReactNode
    text: string,
}

const CardButton: React.FC<CardButtonProps> = ({ icon, text }) => {
    const classes = useStyles();
    return (
        <div className={classes.button}>
            {icon}
            <p> {text} </p>
        </div>
    )
}