import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    toolbar: {
        display: 'flex',
        backgroundColor: '#fff',
        color: "#000",
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down(321)]: {
            flexDirection: 'column',
            padding: '10px 0'
        },
    },
    logo: {
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 500,
        '& .text': {
            color: 'red',
        }
    },
    navRight: {
        display: 'flex',
        marginLeft: "20px",
        justifyContent: 'space-between',
        alignItems: "center",
        width: '80%',
        [theme.breakpoints.down(1025)]: {
            width: '85%',
        },
        [theme.breakpoints.down(426)]: {
            width: '100%',
        },
        [theme.breakpoints.down(321)]: {
            paddingTop: '20px',
        },
    },
    tab: {
        minWidth: "50px",
    },
    icons: {
        display: "flex",
        width: '15%',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down(770)]: {
            width: '20%',
        },
        [theme.breakpoints.down(426)]: {
            width: '50%',
        },
        [theme.breakpoints.down(376)]: {
            width: '80%',
        },
        [theme.breakpoints.down(321)]: {
            width: '50%',
        },
    }
}))