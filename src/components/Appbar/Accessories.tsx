import {
    Grid,
    List,
    makeStyles,
    Typography
} from '@material-ui/core'
import { accessoriesData } from '../../models/AccessoryModel'
// import { NavButton } from '../NavButton/NavButton'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        // top: theme.spacing(8),
        backgroundColor: '#fff',
        padding: '0 5px',
        width: '99.2%',   
        zIndex: 2, 
        [theme.breakpoints.down(321)]: {
            // top: theme.spacing(13),
        },
        '& .MuiTypography-h6': {
            fontWeight: 700, borderRadius: 'none',
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
}))

interface Props {

}



export const Accessories = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={1} >
                {accessoriesData && accessoriesData.map(item => (
                    <Grid item xs={6} sm={2} md={2} key={item.id} >
                        <List >
                            <Typography variant="h6" gutterBottom >
                                {item.title}
                            </Typography>
                            {item.data && item.data.map(link => (
                                <Typography gutterBottom variant="body2" key={link.id}>
                                    {link.title}
                                </Typography>
                                // <Typography variant="body2" gutterBottom key={link.id}>
                                //     {link.title}
                                // </Typography>
                            ))}
                        </List>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}
