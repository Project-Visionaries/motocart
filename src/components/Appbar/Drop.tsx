import {
    Divider,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Theme,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '15rem',
        position: 'fixed',
        zIndex: 2, 
        // top: theme.spacing(8),
        backgroundColor: "#fff",
        right: 0,
        padding: theme.spacing(2),
        boxShadow: theme.shadows[5],
        '& .MuiListItemText-primary': {
            fontWeight: 600,
        },
        [theme.breakpoints.down(321)]: {
            // top: theme.spacing(12),
        },
    }
}))

interface Props {

}

export const Drop = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List>
                <ListItem >
                    <ListItemText
                        primary="LANGUAGE"
                    // secondary={item.timestamp.toLocaleString()}
                    />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    dense
                    onClick={() => { }}
                >
                    <ListItemText
                        secondary="English"
                    // secondary={item.timestamp.toLocaleString()}
                    // primaryTypographyProps={{
                    //     color: item.selected ? 'primary' : undefined
                    // }}
                    />
                </ListItem>
                <ListItem
                    button
                    dense
                    onClick={() => { }}
                >
                    <ListItemText
                        secondary="French"
                    />
                </ListItem>

                <ListItem >
                    <ListItemText
                        primary="CURRENCY"
                    // secondary={item.timestamp.toLocaleString()}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    dense
                    onClick={() => { }}
                >
                    <ListItemText
                        secondary="France"
                    />
                </ListItem>
                <ListItem
                    button
                    dense
                    onClick={() => { }}
                >

                    <ListItemText
                        secondary="Dollar"
                    />
                </ListItem>
                <ListItem
                    button
                    dense
                    onClick={() => { }}
                >
                    <ListItemText
                        secondary="Pound"
                    />
                </ListItem>

                <ListItem >
                    <ListItemText
                        primary="MY ACCOUNT"
                    // secondary={item.timestamp.toLocaleString()}
                    />
                </ListItem>
                <Divider />

                <ListItem
                    button
                    dense
                    onClick={() => { }}
                >
                    <ListItemText
                        secondary="Login"
                    />
                </ListItem>
                <ListItem
                    button
                    dense
                    onClick={() => { }}
                >
                    <ListItemText
                        secondary="Logout"
                    />
                </ListItem>
            </List>
        </div>
    )
}
