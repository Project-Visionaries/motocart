import { makeStyles } from '@material-ui/core';
import { CustomCardProps, CustomSection } from '../../../components/CustomSection';
import { TETIARY_COLOR } from '../../../constants/colors';

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
        image: "images/new/image1.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4900.00',
        speed: '4879km',
        mode: 'Manual',
        year: '2019',
        badge1: "HOT"
        
    },
    {
        reviews: 2,
        image: "images/new/image2.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '9900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2020',
    },
    {
        reviews: 4,
        image: "images/new/image3.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '3900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2005',
    },
    {
        reviews: 3,
        image: "images/new/image6.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4100.00',
        speed: '4879km',
        mode: 'Aut0',
        year: '2000',
    },
]
export const BestSeller = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSection
                header={{
                    leftColor: TETIARY_COLOR,
                    rightColor: '#eee',
                    title: "BEST SELLER CARS"
                }}
                card={itemData}
            />
        </div>
    )
}
