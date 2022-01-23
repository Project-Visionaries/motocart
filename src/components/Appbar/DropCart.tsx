import {
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from '@material-ui/core'
import { Check } from '@material-ui/icons';
import { ProductCard } from './ProductCard';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20rem',
        position: 'fixed',
        zIndex: 2,
        // top: theme.spacing(8),
        backgroundColor: '#fff',
        right: 25,
        padding: theme.spacing(2),
        boxShadow: theme.shadows[5],
        '& .MuiListItemText-primary': {
            fontWeight: 600,
        },
        [theme.breakpoints.down(426)]: {
            width: '18rem',
            right: 0,
        },
        [theme.breakpoints.down(321)]: {
            // top: theme.spacing(12),
            width: '15rem',
        },
    },
    btn: {
        backgroundColor: "yellow"
    }
}))

interface Props {
    // onMouseEnter: ()=>void,
    // onMouseLeave: ()=>void,
}
interface CartProps {
    id: string,
    price: string,
    quantity: number,
    image: string,
    title: string,
}
const cartData: CartProps[] = [
    {
        id: '1',
        price: "120.5",
        quantity: 2,
        image: "images/new/image3.jpeg",
        title: "Unknown",
    },
    {
        id: '2',
        price: "120.5",
        quantity: 1,
        image: "images/new/image1.jpeg",
        title: "Unknown",
    }
]
export const DropCart = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List>
                <ListItem>
                    <ListItemText
                        primary="2 Items"
                    // secondary={item.timestamp.toLocaleString()}
                    />
                    <ListItemText
                        primary="$ 2504.67"
                        style={{ textAlign: 'right' }}
                    // secondary={item.timestamp.toLocaleString()}
                    />
                </ListItem>
                <Divider />
                {cartData && cartData.map(((item, index) => (
                    <>
                        <ProductCard
                            key={item.id}
                            price={item.price}
                            quantity={item.quantity}
                            image={item.image}
                            title={item.title}
                        />
                        {index !== cartData.length ? <Divider light={true} /> : <div></div>}
                    </>
                )))}



                <Button
                    variant="contained"
                    fullWidth
                    className={classes.btn}
                    size="large"
                    startIcon={<Check />}
                >

                    CHECKOUT
                </Button>
            </List>
        </div>
    )
}
