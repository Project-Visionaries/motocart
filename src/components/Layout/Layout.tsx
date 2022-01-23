import { makeStyles } from '@material-ui/core';
import React from 'react'
import { AppBar } from '../Appbar/AppBar'
import { Footer } from '../Footer';

const useStyles = makeStyles(theme => ({
    root: {
          marginTop: theme.spacing(8),
          minHeight: 'calc(100vh - 64px)',
          [theme.breakpoints.down(321)]: {
            marginTop: theme.spacing(13),
        },
    },
}))

interface Props {
    children?: React.ReactNode
}

export const Layout = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <AppBar />
            <div className={classes.root}>
                {props.children}
            </div>
            <Footer />
        </>
    )
}


