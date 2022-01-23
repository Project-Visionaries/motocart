import { Grid, makeStyles, Typography } from '@material-ui/core'
import { PRIMARY_COLOR } from '../../constants/colors'
const useStyles = makeStyles(theme => ({
    root: {
        padding: '1rem 0',
    },
    image: {
        height: '4rem',
        width: '7rem',
        '& img': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(.8)',
        },
        [theme.breakpoints.down(376)]: {
            height: '3rem',
            width: '5rem',
        },
        
    },
    space: {
        marginRight: theme.spacing(1),
    }
}))

interface Props {
    image: string,
    price: string,
    quantity: number,
    title: string,
}

export const ProductCard = ({ image, price, quantity, title }: Props) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.space}>
                <div className={classes.image}>
                    <img src={image} alt={image} />
                </div>

            </Grid>
            <Grid item>
                <Typography gutterBottom>
                    {quantity} x <span style={{ color: PRIMARY_COLOR }}>${price}</span>
                </Typography>
                <Typography>
                    {title}
                </Typography>

            </Grid>
        </Grid>
    )
}
