import { Divider, makeStyles, Theme, Typography } from '@material-ui/core';
import { BarChart, Favorite, ShoppingCart, Star } from '@material-ui/icons';
import React from 'react'
import { PRIMARY_HOVER_COLOR } from '../../constants/colors';
import { MOBILE_LARGE } from '../../constants/screenSizes';
import { TextButton } from '../Buttons/TextButton/TextButton';
interface StyleProps {
    bgColor?: string,
}
const useStyles = makeStyles<Theme, StyleProps>(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff',
        padding: '1.5rem .5rem',
        [theme.breakpoints.down(MOBILE_LARGE)]:{
            flexDirection: 'column',
        },
        '& .MuiTypography-h6': {
            fontWeight: 700,
        },
        '& .rating': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.8rem',
            color: '#999',
            '& .MuiSvgIcon-root': {
                fontSize: '1rem',
            },
            '& span': {
                margin: '0 .5rem',
            },
            '& a': {
                color: '#999',
                fontSize: '.9rem',
                textDecoration: 'none',
                transition: '.8s ease',
                '&:hover': {
                    color: PRIMARY_HOVER_COLOR,
                },
            },
        },
        '& .media': {
            marginRight: '1.5rem',
            height: '8rem',
            // backgroundColor: 'red',
            [theme.breakpoints.down(MOBILE_LARGE)]:{
                height: '12.5rem',
            },
            '& img': {
                objectFit: 'cover',
                height: '100%',
            }
        },
        '& .price': {
            fontWeight: 700,
            margin: '2rem 0',
            '& .actual-price': {
                color: '#999',
                marginRight: '1rem',
                textDecoration: 'line-through',
            },
        },
        '& .barge-container': {
            display: 'flex'
        },

    },
    barge: {
        cursor: 'pointer',
        height: '2.3rem',
        width: '3.5rem',
        backgroundColor: ({ bgColor }) => bgColor ? bgColor : '#eee',
        boxShadow: theme.shadows[1],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '.3rem',
        transition: '.8s ease',
        '& .MuiSvgIcon-root': {
            fontSize: '1rem',
        },
        '&:hover': {
            backgroundColor: '#000',
            color: ({ bgColor }) => bgColor ? 'yellow' : '#fff',
        },
    },
}))
interface ProductProps{
    id: string;
    image: string;
    title: string;
    rating: number;
    reviews: {
        review: number;
        link: string;
    };
    description: string;
    prices: {
        actualPrice: string;
        price: string;
    };
}

interface Props {
    product: ProductProps,
}

export const ProductCard:React.FC<Props> = ({product}) => {
    const classes = useStyles({});
    return (
        <>
            <div className={classes.root}>
                <div className="media">
                    <img src={product.image} alt="product" />
                </div>
                <div>
                    <Typography variant="h6" gutterBottom >
                        {product.title}
                    </Typography>
                    <div className="rating">
                        {[...Array(product.rating)].map((item, index)=>(<Star style={{color: 'yellow'}} key={index} />))}
                        {[...Array(5 - product.rating)].map((item, index)=>(<Star key={index} />))}
                    
                        <span>{product.reviews.review} review{product.reviews.review > 1? 's': ""} </span>
                        <a href={product.reviews.link}>Add Your Review</a>
                    </div>
                    <Typography variant="body2" color="textSecondary">
                        {product.description}
                        <span> <TextButton text="Learn More" color="#999" /> </span>
                    </Typography>
                    <div className="price">
                        <span className="actual-price">${product.prices.actualPrice}</span> <span>${product.prices.price}</span>
                    </div>
                    <div className="barge-container">
                        <Barge
                            icon={<ShoppingCart />}
                            bgColor="yellow"
                        />
                        <Barge
                            icon={<Favorite />}
                        />
                        <Barge
                            icon={<BarChart />}
                        />
                    </div>
                </div>
            </div>
            <Divider />
        </>
    )
}
interface BargeProps extends StyleProps {
    icon: React.ReactNode,
}
const Barge: React.FC<BargeProps> = ({ icon, bgColor }) => {
    const classes = useStyles({ bgColor })
    return (
        <div className={classes.barge}>
            {icon}
        </div>
    )
}
