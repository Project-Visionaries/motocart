import { Divider, Grid, makeStyles, useTheme } from '@material-ui/core'
import { useState } from 'react';
import { AsideCarousel } from '../../components/AsideCarousel';
import { ChoiceForm } from '../../components/ChoiceForm/ChoiceForm';
import { CompareAside } from '../../components/CompareAside';
import { CustomCard } from '../../components/CustomSection/CustomCard';
import { Jumbotron } from '../../components/Jumbotron';
import { ListingHeader } from '../../components/ListingHeader';
import { MenuListDropdown } from '../../components/MenuListDropdown';
import { MyCart } from '../../components/MyCart';
import { ProductCard } from '../../components/ProductCard';
import { TABLET } from '../../constants/screenSizes';
import { productData, productItemData } from './productData';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#eee',
        '& .product-list': {
            marginBottom: '1rem',
            boxShadow: theme.shadows[10],
        },
        '& aside': {
            margin: '1.5rem',
        }
    }
}))
interface Props {

}

export const ProductList: React.FC<Props> = () => {
    const classes = useStyles();
    const theme = useTheme().breakpoints.down(TABLET)

    const [toggleLayout, setToggleLayout] = useState({
        grid: false,
        list: true
    })
    const handleToggle = (name: string) => {
        setToggleLayout({
            ...toggleLayout,
            // [name]: toggleLayout[name]
            grid: name === 'grid' ? true : false,
            list: name === 'list' ? true : false,
        })
    }
    return (
        <div className={classes.root}>
            <Jumbotron
                bgImage="images/new/download.jpeg"
                title="PRODUCT LIST"
            />
            <div >
                <Grid container >
                    <Grid item sm={12} md={3}>
                        <aside>
                            <ChoiceForm
                                closeForm={() => { }}
                            />
                            <MenuListDropdown />
                            <AsideCarousel />
                            <MyCart />
                            <CompareAside />
                        </aside>
                    </Grid>
                    <Grid item sm={12} md={9} >
                        <ListingHeader
                            toggleGrid={() => { handleToggle('grid') }}
                            toggleList={() => { handleToggle('list') }}
                        />
                        <Divider />
                        <div className="product-list">
                            {toggleLayout.grid && <Grid container>
                                {productItemData.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <CustomCard
                                            data={item}
                                        />
                                    </Grid>
                                ))}
                            </Grid>}
                            {toggleLayout.list && productData.map(product => (<ProductCard product={product} key={product.id} />))}
                            <ListingHeader
                                toggleGrid={() => { handleToggle('grid') }}
                                toggleList={() => { handleToggle('list') }}
                            />
                            <Divider />
                        </div>
                    </Grid>
                    
                </Grid>

            </div>

        </div>
    )
}
