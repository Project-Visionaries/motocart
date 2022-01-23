import { Grid, makeStyles } from '@material-ui/core'
import { PartsCard } from './PartsCard'
import { PartsCarousel } from './PartsCarousel'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 'calc(100vh - 64px)',
    },
    card: {
        paddingTop: "3rem",
    }
}))

interface Props {

}

export const PopularParts = (props: Props) => {
    /*
    - Display the header to control the carousel
    - Display two cards
    */
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <PartsCarousel />
            <Grid container spacing={0} className={classes.card}>
                <Grid item xs={12} sm={6}>
                    <PartsCard
                        color="red"
                        image='images/car4.jpeg'
                        title="BODY PARTS"
                        subtitle='LIMITED OFFER'
                        carTypes='COUPE, SEDAN, SUV, PICKUP'
                        onClick={() => { }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PartsCard
                        image='images/car10.jpeg'
                        title="BODY PARTS"
                        subtitle='LIMITED OFFER'
                        carTypes='COUPE, SEDAN, SUV, PICKUP'
                        onClick={() => { }}
                        justifyContent='flex-end'
                    />
                </Grid>

            </Grid>

        </div>
    )
}
