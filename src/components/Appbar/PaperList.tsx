import { List, ListItem, makeStyles, Paper, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom";
import { PRIMARY_HOVER_COLOR } from "../../constants/colors";
import { PageProps } from "./Pages";


const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        // top: theme.spacing(8),
        // right: theme.spacing(35),
        zIndex: 2,
        width: '10rem',
        '& .MuiTypography-body2': {
            width: '100%',
            [theme.breakpoints.down(321)]: {
                fontSize: '12px',
            },
            '& a':{
                color: '#333',
                textDecoration: 'none',
                transition: '.5s ease',
                display: 'block',
                '&:hover':{
                    color: PRIMARY_HOVER_COLOR,
                },
            },
        },
        '& .MuiPaper-rounded': {
            borderRadius: 'none',
        },
    },

}))


interface Props {
    data: PageProps[],
    style?: React.CSSProperties | undefined,
}

export const PaperList = (props: Props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} style={props.style}>
            <List>
                {props.data.map(item => (
                    <ListItem button  key={item.text}>
                        <Typography variant="body2">
                            <NavLink to={item.link}>
                                {item.text}
                            </NavLink>

                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}
