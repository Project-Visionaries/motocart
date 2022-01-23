import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
        // color: '#fefefe',
        '&:hover':{
            textDecoration: 'none',
        }
    }
})

// interface Props {
//     to: string,
//     children?: React.ReactNode,
// }

// export const NavButton = (props: Props) => {
//     const classes = useStyles();
//     return (
//         <Button variant="text" component={} to={props.to} className={classes.btn}>
//             {props.children}
//         </Button> 
//         )
// }
