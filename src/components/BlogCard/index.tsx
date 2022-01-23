import { makeStyles, Typography } from '@material-ui/core'
import { Comment, Person } from '@material-ui/icons'
import { SECONDARY_COLOR } from '../../constants/colors'
import {  MOBILE_LARGE, TABLET } from '../../constants/screenSizes'
import { SquarePolygon } from '../Header/SquarePolygon'
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTypography-h5':{
            fontWeight: 600,
            marginBottom: theme.spacing(3)
        },
    },
    media: {
        height: '15rem',
        width: "100%",
        overflow: 'hidden',
        backgroundColor: 'red',
        position: 'relative',
        '& img': {
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            cursor: 'pointer',
            transition: '.8s ease',
            // transform: 'scale()',
            '&:hover': {
                transform: 'scale(1.15)',
            },
        },
        '& .date': {
            position: 'absolute',
            bottom: '10%',
            height: '2.5rem',
            width: '10rem',
        }
    },
    author: {
        display: 'flex',
        '& p': {
            display: 'flex',
            alignItems: 'center',
            color: '#999',
            marginRight: '1rem',
            [theme.breakpoints.down(TABLET)]:{
                marginRight: '.3rem',
            },
            fontSize: '.85rem',

            '& a': {
                textDecoration: 'none',
                color: 'skyblue',
                marginLeft: '.5rem',
                [theme.breakpoints.down(TABLET)]:{
                    marginLeft: '.1rem',
                },
                transition: '.5s ease',
                '&:hover': {
                    color: 'blue',
                }
            },
            '& .MuiSvgIcon-root': {
                fontSize: '1rem',
                color: '#888',
                marginRight: '.5rem',
                [theme.breakpoints.down(TABLET)]:{
                    display: 'none',
                },
                [theme.breakpoints.down(MOBILE_LARGE)]:{
                    display: 'inline',
                },
            },
        }
    },
}))

interface Props {
    image: string,
    author: string,
    comments: number,
    title: string,
    text: string,
}

export const BlogCard: React.FC<Props> = ({ image, author, comments, title, text }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.media}>
                <img src={image} alt="blog post" />
                <div className='date'>
                    <SquarePolygon
                        title="14 JAN, 2019"
                        bgColor={SECONDARY_COLOR}
                        color="#000"
                        size="16px"
                    />
                </div>
            </div>
            <div className={classes.author}>
                <p>
                    <span><Person /></span>
                    Posted by <a href="/"> {author}</a>
                </p>
                <p> <Comment /> <a href="/">{comments} comment{comments > 1 ? "s" : ""}</a> </p>
            </div>
            <Typography gutterBottom variant="h5" color="textPrimary">
                {title}
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
                {text}
            </Typography>

        </div>
    )
}
