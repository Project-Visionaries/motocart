import { Divider, Grid, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { BarChartSharp, ChevronLeft, ChevronRight, Email, Favorite, MoneyRounded, Phone, QuestionAnswerOutlined, Star } from '@material-ui/icons';
import { PrimaryButton } from '../../../components/Buttons/PrimaryButton';
import { Header } from '../../../components/Header/Header';
import { Spacer } from '../../../components/spacer/Spacer';
import { PRIMARY_COLOR, PRIMARY_HOVER_COLOR, SECONDARY_COLOR, TETIARY_COLOR } from '../../../constants/colors';
const useStyles = makeStyles(theme => ({
    container: {

        '& .rating': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.8rem',
            color: '#999',
            '& .MuiSvgIcon-root': {
                fontSize: '1rem',
            },
            '& span': {
                margin: '0 .5rem',
            },
            '& a': {
                color: '#999',
                fontSize: '.9rem',
                textDecoration: 'none',
                transition: '.8s ease',
                '&:hover': {
                    color: PRIMARY_HOVER_COLOR,
                },
            },
        },
        '& .price': {
            padding: '2rem 0',
            color: PRIMARY_COLOR,
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        '& .table': {
            '& .Mui-selected': {
                backgroundColor: '#eee',
            },
            '& .MuiTableCell-root': {
                border: 'none',
                color: '#555',
                textAlign: 'start',
            }
        },
        // '& .row': {
        //     display: 'flex',
        //     '& .btn': {
        //         marginRight: '1rem',
        //     },
        // },

        margin: '1rem 0',
        backgroundColor: '#fff',
        '& .wrapper': {
            padding: '2rem 1rem',
        },
        '& .MuiTypography-root': {
            fontWeight: 700,
        },
        '& .image': {
            height: '20rem',
            '& img': {
                height: '100%',
                width: '100%',
                objectFit: 'cover',
            }
        },
    },
    carousel: {
        height: '6rem',
        position: 'relative',
        margin: '1.5rem 0',
        '& .items': {
            height: 'inherit',
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
            '& .item': {
                height: '100%',
                width: '20rem',
                margin: '0 .2rem',
                '& img': {
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    transform: 'scale(.8)',
                }
            },
        },
        '& .controls': {
            '& .icon': {
                position: 'absolute',
                backgroundColor: '#ddd',
                height: '1.5rem',
                width: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: theme.shape.borderRadius,
                top: 35,
                cursor: 'pointer',
            },
            '& .left': {
                left: 0,
            },
            '& .right': {
                right: 0,
            },
        }
    },
    buttons: {
        marginTop: '5rem',
    }
}))

const tableItems = [
    {
        id: 1,
        name1: 'Millage',
        desc1: ':17kmpl',
        name2: 'Engine Displ.',
        desc2: ':259kw',
    },
    {
        id: 2,
        name1: 'Transmission',
        desc1: ':Automatic',
        name2: 'Fuel Type',
        desc2: ':Diesel',
    },
    {
        id: 3,
        name1: 'Mode',
        desc1: ':2019',
        name2: 'Power Windows',
        desc2: ':yes',
    },
    {
        id: 4,
        name1: 'Air Bags',
        desc1: ':Available',
        name2: 'ABS',
        desc2: ':yes',
    },
    {
        id: 5,
        name1: 'Centarl Locking',
        desc1: ':yes',
        name2: 'Fog Lamps',
        desc2: ':front',
    },
]

export const GridSection = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12} sm={5}>
                    <div className="wrapper">
                        <div className="image">
                            <img src="/images/car6.jpg" alt="product-detail" />
                        </div>
                        <div className={classes.carousel}>
                            <div className="items">
                                <div className="item">
                                    <img src="/images/new/image1.jpeg" alt="carouselImage" />
                                </div>
                                <div className="item">
                                    <img src="/images/new/image6.jpeg" alt="carouselImage" />
                                </div>
                                <div className="item">
                                    <img src="/images/new/image9.jpeg" alt="carouselImage" />
                                </div>
                            </div>
                            <div className="controls">
                                <div className="icon left">
                                    <ChevronLeft />
                                </div>
                                <div className="icon right">
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className={classes.buttons}>
                            <PrimaryButton
                                startIcon={<Phone />}
                                text="675-909-367"
                                fullWidth={true}
                                bgColor="green"
                                color="#fff"
                            />
                            <Spacer />
                            <PrimaryButton
                                startIcon={<QuestionAnswerOutlined />}
                                text="ASK A QUESTION"
                                fullWidth={true}
                                bgColor={PRIMARY_COLOR}
                                color="#fff"
                            />
                            <Spacer />
                            <PrimaryButton
                                startIcon={<MoneyRounded />}
                                text="FINANCE CALCULATOR"
                                fullWidth={true}
                                bgColor={TETIARY_COLOR}
                                color="#fff"
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className="wrapper">
                        <Typography variant="body2" gutterBottom >
                            XPERIA
                        </Typography>
                        <Typography variant="h4" gutterBottom >
                            Gorgeous Mercedes-Benz E-Class All-Terrain Luxury
                        </Typography>
                        <div className="rating">
                            {[...Array(3)].map((item, index) => (<Star style={{ color: 'yellow' }} key={index} />))}
                            {[...Array(5 - 3)].map((item, index) => (<Star key={index} />))}

                            <span>{3} review{3 > 1 ? 's' : ""} </span>
                            <a href={"/"}>Add Your Review</a>
                        </div>
                        <Divider />
                        <div className="price">
                            $70,0000 - $90, 0000
                        </div>
                        <Divider />
                        <div className="table">
                            <Header
                                title="SPECIFICATIONS"
                                leftColor={SECONDARY_COLOR}
                            />
                            <Table>
                                <TableBody>
                                    {tableItems.map((item, index) => {
                                        return (
                                            <TableRow key={item.id} selected={index % 2 === 0 ? true : false}>
                                                <TableCell component="th" scope="row">
                                                    {item.name1}
                                                </TableCell>
                                                <TableCell>{item.desc1}</TableCell>
                                                <TableCell align="right">{item.name2}</TableCell>
                                                <TableCell align="right">{item.desc2}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                        <Spacer height="2.5rem" />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={4}>
                                <PrimaryButton
                                    fullWidth={true}
                                    startIcon={<Favorite />}
                                    text="ADD TO WISHLIST"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <PrimaryButton
                                    fullWidth={true}
                                    startIcon={<BarChartSharp />}
                                    text="ADD TO COMPARE"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <PrimaryButton
                                    fullWidth={true}
                                    startIcon={<Email />}
                                    text="EMAIL TO FRIEND"
                                />
                            </Grid>
                        </Grid>
                        <div className="row">

                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>

    )
}
