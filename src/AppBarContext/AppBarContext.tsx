import { createContext, useReducer } from "react";
import { Actions, appBarReducer, State } from "./AppBarReducer";
interface Props{
    children: React.PropsWithChildren<{}>,
}

const initialState = {
    toggleCustom: false,
    toggleMenu: false,
    toggleCart: false,
    toggleDrawer: false,
    toggleAccessories: false,
    togglePages: false,
    toggleBlog: false,
    toggleListing: false,
    toggleCompare: false,
}

interface ContextProps{
    state: State,
    dispatch: React.Dispatch<Actions>,
}

export const AppBarContext = createContext<ContextProps>({} as ContextProps)

export const AppBarContextProvider = (props: Props)=>{
    const [state, dispatch] = useReducer(appBarReducer, initialState)
    return (
        <AppBarContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppBarContext.Provider>
        )
}