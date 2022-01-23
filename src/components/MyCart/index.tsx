import { Divider, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { Markunread } from '@material-ui/icons'
import { ProductCard } from '../Appbar/ProductCard'
import { PrimaryButton } from '../Buttons/PrimaryButton'

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

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        backgroundColor: '#fff',
        '& .MuiList-padding': {
            padding: '0px'
        },
        '& .MuiDivider-root': {
            backgroundColor: "#eee",
        },
        '& .MuiButton-root': {
            margin: '1.5rem 0',
        },
        '& .header':{
            padding: '1.2rem 1.2rem 0 1rem',
            '& .text':{
                fontWeight: 700,
            }
        },
    },
    title: {
        backgroundColor: '#111',
        padding: "5px",
        color: '#fff',
        fontWeight: 700,
    },
}))


interface Props {

}




export const MyCart: React.FC<Props> = () => {
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <ListItem>
                    <ListItemText>
                        CATEGORY
                    </ListItemText>
                </ListItem>
            </div>
            <div className="header">
                <Typography variant="body2"> There is 1 item in your cart</Typography>
                <Typography gutterBottom variant="body2" color="textSecondary"> Cart Subtotal:<span style={{ color: "red" }}>$333.99</span></Typography>
                <PrimaryButton
                    text="CHECKOUT"
                    startIcon={<Markunread />}
                />
                <Typography variant="body2" className="text"> RECENTLY ADDED ITEM(S)</Typography>
            </div>
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


        </div>
    )
}

