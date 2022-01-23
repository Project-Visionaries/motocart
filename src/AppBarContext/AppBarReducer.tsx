
export interface State {
    toggleCustom: boolean,
    toggleMenu: boolean,
    toggleCart: boolean,
    toggleDrawer: boolean,
    toggleAccessories: boolean,
    togglePages: boolean,
    toggleBlog: boolean,
    toggleListing: boolean,
    toggleCompare: boolean,
}
export type Actions =
    | {
        type: 'TOGGLE_COMPARE',
    }
    | {
        type: 'TOGGLE_LISTING',
    }
    | {
        type: 'TOGGLE_BLOG',
    }
    | {
        type: 'TOGGLE_PAGE',
    }
    | {
        type: 'TOGGLE_CUSTOM',
    }
    | {
        type: 'TOGGLE_MENU',
    }
    | {
        type: 'TOGGLE_CART',
    }
    | {
        type: 'TOGGLE_DRAWER',
    }
    | {
        type: 'TOGGLE_ACCESSORIES',
    }

export const appBarReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'TOGGLE_CUSTOM':
            return {
                ...state,
                ...getState(state, 'TOGGLE_CUSTOM')
            }
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                ...getState(state, 'TOGGLE_DRAWER')
            }
        case 'TOGGLE_MENU':
            return {
                ...state,
                ...getState(state, 'TOGGLE_MENU')
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                ...getState(state, 'TOGGLE_CART')
            }
        case 'TOGGLE_ACCESSORIES':
            return {
                ...state,
                ...getState(state, 'TOGGLE_ACCESSORIES')
            }
        case 'TOGGLE_PAGE':
            return {
                ...state,
                ...getState(state, 'TOGGLE_PAGE')
            }
        case 'TOGGLE_BLOG':
            return {
                ...state,
                ...getState(state, 'TOGGLE_BLOG')
            }
        case 'TOGGLE_LISTING':
            return {
                ...state,
                ...getState(state, 'TOGGLE_LISTING')
            }
        case 'TOGGLE_COMPARE':
            return {
                ...state,
                ...getState(state, 'TOGGLE_COMPARE')
            }
        default:
            return state
    }
}

const getState = (state: State, toggledState: string) => {
    return {
        toggleCustom: toggledState === 'TOGGLE_CUSTOM' ? !state.toggleCustom : false,
        toggleMenu: toggledState === 'TOGGLE_MENU' ? !state.toggleMenu : false,
        toggleCart: toggledState === 'TOGGLE_CART' ? !state.toggleCart : false,
        toggleDrawer: toggledState === 'TOGGLE_DRAWER' ? !state.toggleDrawer : false,
        toggleAccessories: toggledState === 'TOGGLE_ACCESSORIES' ? !state.toggleAccessories : false,
        togglePages: toggledState === 'TOGGLE_PAGE' ? !state.togglePages : false,
        toggleBlog: toggledState === 'TOGGLE_BLOG' ? !state.toggleBlog : false,
        toggleListing: toggledState === 'TOGGLE_LISTING' ? !state.toggleListing : false,
        toggleCompare: toggledState === 'TOGGLE_COMPARE' ? !state.toggleCompare : false,
    }
}