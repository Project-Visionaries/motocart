
import { PaperList } from "./PaperList";

// const useStyles = makeStyles(theme => ({
//     root: {
//         position: 'absolute',
//         top: theme.spacing(8),
//         right: theme.spacing(35),
//         width: '10rem',
//         '& .MuiTypography-body2': {
//             color: '#777',
//             [theme.breakpoints.down(321)]: {
//                 fontSize: '12px',
//             },
//         },
//     },
    
// }))

interface Props {

}
export interface PageProps {
    text: string,
    link: string,
}
const pageData: PageProps[] = [
    {
        text: 'About Us',
        link: '/',
    },
    {
        text: 'Cart Page',
        link: '/',
    },
    {
        text: 'Checkout',
        link: '/',
    },
    {
        text: 'Whist List',
        link: '/',
    },
    {
        text: 'Dashboard',
        link: '/',
    },
]

export const Pages = (props: Props) => {
    // const classes = useStyles();
    return (
        <PaperList
        data={pageData}
        style={{ right: '30%',}}
        />
    )
}
