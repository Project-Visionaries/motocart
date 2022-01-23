import { makeStyles } from '@material-ui/core'
import React from 'react'
import { ReviewCard } from './ReviewCard'
const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 'calc(100vh - 64px)',
        background: 'url(images/car56.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '& .bgColor': {
            minHeight: 'inherit',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        },
        '& .carousel': {
            width: '60%',
            padding: '3rem 0',
        },
    }
}))

interface Props {

}

export const Review = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className='bgColor'>
                <div className="carousel">
                    <ReviewCard
                        image="images/profile/profile2.jpg"
                        name="Melah Ghislain"
                        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime
                           praesentium voluptatem, modi cum nulla. Rerum porro sint praesentium voluptatem, modi cum nulla. Rerum porro sint"
                    />
                </div>
            </div>
        </div>
    )
}
