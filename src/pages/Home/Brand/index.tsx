import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Header } from '../../../components/Header/Header';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#eee',
        minHeight: '50vh',
    },
    partner: {
        backgroundColor: '#fff',
        padding: '2rem 0',
        display: 'flex',
        alignItems: 'center',
        boxShadow: theme.shadows[1],
        marginBottom: '2rem',
        overflow: 'hidden',
        '& .media': {
            height: '8rem',
            width: '8rem',
            backgroundColor: 'red',
            margin: '0 5px',
            '& img': {
                objectFit: 'cover',
                height: '100%',
            },
        },
    },
}))

interface Props {
    // data: { image: string }[]
}
const itemData = [
    { image: "images/partner/" },
    { image: "images/partner/" },
    { image: "images/partner/" },
    { image: "images/partner/" },
    { image: "images/partner/" },
    { image: "images/partner/" },
    { image: "images/partner/" },
    { image: "images/partner/" },
]

export const Brand = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header
                title="POPULAR BRANDS"
                leftColor="#000"
            />
            <div className={classes.partner}>
                {itemData.map((item, index )=> <Media image={item.image} key={index} />)}
            </div>

        </div>
    )
}


const Media: React.FC<{ image: string }> = ({ image }) => {
    return (
        <div className="media">
            <img src={image} alt="partners" />
        </div>
    )
}
