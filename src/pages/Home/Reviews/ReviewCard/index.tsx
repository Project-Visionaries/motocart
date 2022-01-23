import {  makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { SECONDARY_COLOR } from '../../../../constants/colors'
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: '#fff',
        '& .MuiTypography-root': {
            marginTop: theme.spacing(3),
        },
        '& .MuiTypography-h5': {
            fontWeight: 700,
            '& span': {
                color: SECONDARY_COLOR,

            },
        },
    },
    avatar: {
        height: '8rem',
        width: '8rem',
        borderRadius: '50%',
        border: '5px solid #111',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: '.5s ease',
        '& img': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: '.8s ease',
        },
        '&:hover': {
            borderColor: '#eee',
            '& img': {
                transform: 'scale(1.15)',
            },
        },
    }
}))

interface Props {
    name: string,
    image: string,
    text: string,

}

export const ReviewCard: React.FC<Props> = ({name, image, text}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.avatar}>
                <img src={image} alt="avatar" />
            </div>
            <Typography gutterBottom variant="body1">
                {text}
            </Typography>
            <Typography gutterBottom variant="h5">
                <span className="name">{name}</span> Happy Customer
            </Typography>

        </div>
    )
}
