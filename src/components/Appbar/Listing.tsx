
import { PaperList } from "./PaperList";

interface Props {

}
export interface PageProps {
    text: string,
    link: string,
}
const blogData: PageProps[] = [
    {
        text: 'Car Grid',
        link: '/product-list',
    },
    {
        text: 'Car List',
        link: '/product-list',
    },
    {
        text: 'Accessoriy Grid',
        link: '/',
    },
    {
        text: 'Car Details',
        link: '/',
    },
    
]

export const Listing = (props: Props) => {
    // const classes = useStyles();
    return (
        <PaperList
        data={blogData}
        style={{ left: '35%',}}
        />
    )
}
