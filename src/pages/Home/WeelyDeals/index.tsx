import { makeStyles } from '@material-ui/core';
import { CustomCardProps, CustomSection } from '../../../components/CustomSection';
import { SECONDARY_COLOR } from '../../../constants/colors';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 'calc(100vh - 64px)',
    },

}))

interface Props {

}

const itemData: CustomCardProps[] = [
    {
        reviews: 5,
        image: "images/new/image16.png",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4500.00',
        speed: '4879km',
        mode: 'Manual',
        year: '2019',
    },
    {
        reviews: 2,
        image: "images/new/image15.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '1200.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2020',
    },
    {
        reviews: 4,
        image: "images/new/image14.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '1760.00',
        speed: '4879km',
        mode: 'Manual',
        year: '2005',
    },
    {
        reviews: 3,
        image: "images/new/image8.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '3900.00',
        speed: '4879km',
        mode: 'Manual',
        year: '2000',
    },
]
export const WeeklyDeals = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSection
                header={{
                    leftColor: SECONDARY_COLOR,
                    rightColor: '#000',
                    title: "DEALS OF THE WEEK"
                }}
                card={itemData}
            />
        </div>
    )
}
