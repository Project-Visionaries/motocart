import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        // top: theme.spacing(8),
        zIndex: 2, 
        backgroundColor: '#fff',
        padding: '0 5px',
        [theme.breakpoints.down(321)]: {
            // top: theme.spacing(5),
        },
        '& .MuiTypography-h6': {
            [theme.breakpoints.down(426)]: {
                fontSize: '18px',
            },
            [theme.breakpoints.down(321)]: {
                fontSize: '16px',
            },

        },
        '& .MuiTypography-body2': {
            color: '#777',
            [theme.breakpoints.down(321)]: {
                fontSize: '12px',
            },
        },
    },
    image: {
        height: "150px",
        '& img':{
            objectFit: 'cover',
            transform: 'scale(.8)',
        },
        [theme.breakpoints.down(426)]: {
            height: "100px"
        },
        [theme.breakpoints.down(321)]: {
            height: "80px"
        },
    },
    card: {
        boxShadow: 'none'
    }
}))

interface Props {

}
const customData = [
    {
        image: 'images/new/image4.jpeg',
        title: 'Sales Up to 30% Off',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,',
    },
    {
        image: 'images/new/image5.jpeg',
        title: 'Sales Up to 30% Off',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,',
    },
    {
        image: 'images/new/image10.jpeg',
        title: 'Sales Up to 30% Off',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,',
    },
    {
        image: 'images/new/image12.jpeg',
        title: 'Sales Up to 30% Off',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,',
    }
]

export const Custom = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {customData && customData.map(item => (
                    <Grid item xs={6} sm={4} md={3} key={item.image}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <div className={classes.image}>
                                    <img src={item.image} alt="imagest" />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" align="center">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}
