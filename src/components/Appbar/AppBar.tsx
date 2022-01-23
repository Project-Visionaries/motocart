import {
    Toolbar,
    AppBar as NavBar,
    Tabs,
    Tab,
    Badge,
    useMediaQuery,
    useTheme,
    IconButton,
    Button
} from '@material-ui/core'
import { Menu, Search, ShoppingCart } from '@material-ui/icons'
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBarContext } from '../../AppBarContext/AppBarContext'
import { NavDrawer } from '../NavDrawer/NavDrawer'
import { Accessories } from './Accessories'
import { useStyles } from './appBarStyles'
import { Blog } from './Blog'
import { Custom } from './Custom'
import { Drop } from './Drop'
import { DropCart } from './DropCart'
import { Listing } from './Listing'
import { Pages } from './Pages'


interface Props {

}

export const AppBar = (props: Props) => {

    const classes = useStyles()
    const [tab, setTab] = useState(0)
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down(770))

    const { state, dispatch } = useContext(AppBarContext)

    return (
        <div className={classes.root}>
            <NavBar elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <NavLink to='/' className={classes.logo}>
                        MOTO<span className='text'>CART</span>
                    </NavLink>

                    <div className={classes.navRight}>
                        <div className="tabs">
                            {mobile ?
                                <Button variant="text" size="small" onClick={() => dispatch({ type: "TOGGLE_DRAWER" })}>
                                    <Menu />
                                    Menu
                                </Button> :
                                <Tabs value={tab} onChange={(e, value) => setTab(value)}>
                                    <Tab disableRipple={true} label="HOME" className={classes.tab} />
                                    <Tab
                                        onClick={() => dispatch({ type: "TOGGLE_ACCESSORIES" })}
                                        disableRipple={true}
                                        label="ACCESSORIES"
                                        className={classes.tab} />

                                    <Tab
                                        onClick={() => dispatch({ type: "TOGGLE_LISTING" })}
                                        disableRipple={true} label="LISTING" className={classes.tab} />

                                    <Tab
                                        onClick={() => dispatch({ type: "TOGGLE_BLOG" })}
                                        disableRipple={true} label="BLOG" className={classes.tab} />

                                    <Tab
                                        onClick={() => dispatch({ type: "TOGGLE_COMPARE" })}
                                        disableRipple={true} label="COMPARE CARS" className={classes.tab} />
                                    <Tab
                                        onClick={() => dispatch({ type: "TOGGLE_PAGE" })}
                                        disableRipple={true} label="PAGES" className={classes.tab} />
                                    <Tab
                                        onClick={() => dispatch({ type: "TOGGLE_CUSTOM" })}
                                        // onMouseOver={() => dispatch({ type: "TOGGLE_CUSTOM" })}
                                        disableRipple={true}
                                        label="CUSTOM"
                                        className={classes.tab}
                                    />
                                </Tabs>
                            }
                        </div>
                        {/* =============== navigation icons =========================== */}
                        <div className={classes.icons}>
                            <IconButton>
                                <Search />
                            </IconButton>
                            <IconButton
                                onClick={() => dispatch({ type: "TOGGLE_CART" })}
                            // onMouseLeave={() => dispatch({ type: "TOGGLE_CART" })}
                            >
                                <NavLink to="/shopping-cart">
                                    <Badge
                                        color="secondary"
                                        badgeContent={2}>
                                        <ShoppingCart />
                                    </Badge>
                                </NavLink>
                            </IconButton>
                            <IconButton
                                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
                            // onMouseLeave={() => dispatch({ type: "TOGGLE_MENU" })}
                            >
                                <Menu />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </NavBar>
            {/* =============== Navigation drawer ========== */}
            <NavDrawer />

            {/* ======== nav drop ================ */}
            {state.toggleMenu && <Drop />}

            {/* ======== nav dropcart ================ */}

            {state.toggleCart && <DropCart />}

            {/* ======== nav custom ================ */}
            {state.toggleCustom && <Custom />}

            {/* ========== Accessories =============== */}
            {state.toggleAccessories && < Accessories />}

            {/* =============== Pages ================= */}
            {state.togglePages && <Pages />}

            {/* =============== Blog ================= */}
            {state.toggleBlog && <Blog />}

            {/* =============== Listing ================= */}
            {state.toggleListing && <Listing />}
        </div>
    )
}
