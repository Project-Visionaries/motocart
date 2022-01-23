import { Divider, makeStyles, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {

        '& .right': {
            '& span': {
                margin: '0 .5rem'
            }
        },
    },
    tableHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '1.5rem 1rem',
        fontSize: '.9rem',
        fontWeight: 600,
        '& .left': {
            paddingLeft: '5rem',
        },

    },
    tableRows: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '.2rem 1rem',
        '& .left': {
            display: 'flex',
            alignItems: 'center',
            '& .MuiTypography-body2': {
                marginLeft: '1rem',
            },
            '& .image-container': {
                height: '3rem',
                width: '4rem',
                '& img': {
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(.8)',
                }
            },

        },
        '& .right': {
            display: 'flex',
            alignItems: 'center',
            '& .MuiTypography-body2': {
                marginRight: '1rem',
            },
            '& .box': {
                border: '1px solid #eee',
                height: '2rem',
                width: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#999',
                '& .MuiSvgIcon-root': {
                    fontSize: '1rem',
                },
            },
            '& .delete': {
                cursor: 'pointer',
            },
            '& .spacer':{
                width: '30rem'
            },
        },
    }
}))

interface Props {

}

export const CartTable = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <header className={classes.tableHeader}>
                <div className="left">PRODUCT</div>
                <div className="right">
                    <span>UNIT PRICE</span>
                    <span>QTY</span>
                    <span>SUBTOTAL</span>
                    <span className="spacer"></span>
                </div>
            </header>
            <Divider variant="middle" />
            <div className={classes.tableRows}>
                <div className="left">
                    <div className="image-container">
                        <img src="images/new/image8.jpeg" alt="cartImage" />
                    </div>
                    <Typography variant="body2" color="textSecondary">
                        Women Gergette animal print
                    </Typography>
                </div>
                <div className="right">
                    <Typography variant="body2" color="textSecondary">$129.99</Typography>
                    <span className="box text"> 1 </span>
                    <Typography variant="body2" color="textSecondary">$129.99</Typography>
                    <span className="box delete">
                        <Delete />
                    </span>
                </div>
            </div>

        </div>
    )
}
