import { makeStyles } from '@material-ui/core';
import { CustomCardProps, CustomSection } from '../../components/CustomSection';
import { Jumbotron } from '../../components/Jumbotron'
import { TETIARY_COLOR } from '../../constants/colors';
import { GridSection } from './GridSection';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#eee',
        '& .others':{
            backgroundColor: '#fff',
        }
    }
}))

const itemData: CustomCardProps[] = [
    {
        reviews: 5,
        image: "/images/new/image1.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4900.00',
        speed: '4879km',
        mode: 'Manual',
        year: '2019',
        badge1: "HOT"

    },
    {
        reviews: 2,
        image: "/images/new/image2.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '9900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2020',
    },
    {
        reviews: 4,
        image: "/images/new/image3.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '3900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2005',
    },
    {
        reviews: 3,
        image: "/images/new/image6.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4100.00',
        speed: '4879km',
        mode: 'Aut0',
        year: '2000',
    },
]


export const ProductDetail = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Jumbotron
                title="PRODUCT DETAIL"
                bgImage="/images/new/image13.jpeg"
            />
            {/* =================== section one =============== */}
            <GridSection />
            {/* =================== section two =============== */}


            {/* =================== section three =============== */}

            <div className="others">
                <CustomSection
                    header={{
                        leftColor: TETIARY_COLOR,
                        rightColor: '#fff',
                        title: "BEST SELLER CARS"
                    }}
                    card={itemData}
                />
            </div>
        </div >
    )
}


