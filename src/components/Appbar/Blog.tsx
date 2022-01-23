
import { PaperList } from "./PaperList";

interface Props {

}
export interface PageProps {
    text: string,
    link: string,
}
const blogData: PageProps[] = [
    {
        text: 'Blog List',
        link: '/',
    },
    {
        text: 'Blog Details',
        link: '/',
    },
    
]

export const Blog = (props: Props) => {
    // const classes = useStyles();
    return (
        <PaperList
        data={blogData}
        style={{ right: '47%',}}
        />
    )
}
