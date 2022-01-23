import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    TextField
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useContext } from 'react';
import { AppBarContext } from '../../AppBarContext/AppBarContext';
import { SECONDARY_COLOR } from '../../constants/colors';
const useStyles = makeStyles((theme) => ({
    drawer: {
        backgroundColor: 'rgba(255, 255, 255, 0.288)',
        '& .MuiList-padding': {
            paddingTop: '0px'
        },
        '& .MuiPaper-root': {
            color: '#fff',
            fontSize: "18px",
            fontWeight: 600,
            backgroundColor: '#222',
        },
        '& .MuiDivider-root': {
            backgroundColor: "#999",
        },
        '& .MuiInputBase-root':{
            backgroundColor: '#fff',
            border: 'none'
        }
    },
    search: {
        backgroundColor: SECONDARY_COLOR,
        padding: "5px"
    },
    nav: {
        marginRight: theme.spacing(8),
    },
    icon: {
        color: "yellow"
    }
}))

interface Props {
    // open: boolean,
    // onClose: () => void,
}

export const NavDrawer = (props: Props) => {
    const classes = useStyles();
    const {state, dispatch} = useContext(AppBarContext)


    return (
        <Drawer open={state.toggleDrawer} onClose={() =>  dispatch({type: "TOGGLE_DRAWER"})} className={classes.drawer}>
            <List >
                <div className={classes.search}>
                    <TextField 
                    size="small" 
                    autoComplete="off"
                    autoFocus={false}
                    fullWidth variant="outlined" 
                    placeholder="search ..." 
                    name="search"
                    />
                </div>
                <ListItem button>
                    <ListItemText>
                        HOME
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText className={classes.nav}>
                        ACCESSORIES
                    </ListItemText>
                    <ListItemIcon>
                        <Add className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText className={classes.nav}>
                        LISTING
                    </ListItemText>
                    <ListItemIcon>
                        <Add className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText className={classes.nav}>
                        BLOG
                    </ListItemText>
                    <ListItemIcon>
                        <Add className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        COMPARE CARS
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText className={classes.nav}>
                        PAGES
                    </ListItemText>
                    <ListItemIcon>
                        <Add className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem button onClick={() =>  dispatch({type: "TOGGLE_CUSTOM"})}>
                    <ListItemText>
                        CUSTOM
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>

        </Drawer>
    )
}
