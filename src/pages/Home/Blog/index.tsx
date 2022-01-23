import { Grid, makeStyles } from '@material-ui/core'
import { BlogCard } from '../../../components/BlogCard'
import { Header } from '../../../components/Header/Header'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 'clac(100vh - 64px)',
        padding: '1rem 0',
        backgroundColor: '#eee',
    },
    card: {
        padding: '2rem',
        boxShadow: theme.shadows[10],
    }
}))

interface Props {

}
const itemData = [
    {
        image: "images/car.jpg",
        author: "admin",
        comments: 8,
        title:"Awesome template with lot's of features on the board!",
        text:`Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est.
              Ut mi metus, semper eu dictum nec...`
    },
    {
        image: "images/car2.png",
        author: "Ghislain",
        comments: 10,
        title:"Awesome template with lot's of features on the board!",
        text:`Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est.
              Ut mi metus, semper eu dictum nec...`
    },
    {
        image: "images/car3.jpg",
        author: "admin",
        comments: 1,
        title:"Awesome template with lot's of features on the board!",
        text:`Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est.
              Ut mi metus, semper eu dictum nec...`
    },
]

export const BlogPage = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header
                title="LATEST BLOG POST"
                leftColor="red"
            />
            <div className={classes.card}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} >
                        <BlogCard
                            image={itemData[0].image}
                            author={itemData[0].author}
                            comments={itemData[0].comments}
                            title={itemData[0].title}
                            text={itemData[0].text}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <BlogCard
                            image={itemData[1].image}
                            author={itemData[1].author}
                            comments={itemData[1].comments}
                            title={itemData[1].title}
                            text={itemData[1].text}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <BlogCard
                            image={itemData[2].image}
                            author={itemData[2].author}
                            comments={itemData[2].comments}
                            title={itemData[2].title}
                            text={itemData[2].text}
                        />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
