import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '2rem',
        position: 'relative',
        color: '#fff',
        height: '17rem',
        // width: '100%',
        '& img':{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
        },
        '& .banner':{
            position: 'absolute',
            top: 0,
            height: '100%',
            // width: '100%',
            backgroundColor: 'rgba(0,0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 2rem',
            '& .MuiTypography-h5':{
                fontWeight: 700,
            },
            '& .MuiTypography-root':{
                textAlign: 'center',
            }

        }
    }
}))

interface Props {

}

export const AsideCarousel = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src="images/new/image7.jpeg" alt="carouselImage" />
            <div className="banner">
                <Typography gutterBottom variant="h5">
                    HOT COLLECTION
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
            </div>

        </div>
    )
}
