import { makeStyles } from '@material-ui/core'
import React from 'react'
import { CartTable } from '../../components/CartTable'
import { Jumbotron } from '../../components/Jumbotron'
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#eee',
    },
}))

interface Props {

}

export const ShoppingCart: React.FC<Props> = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>

            
            {/* <Jumbotron
                title="PRODUCT CART"
                bgImage="images/new/image13.jpeg"
            /> */}
            <CartTable />
        </div>
    )
}
