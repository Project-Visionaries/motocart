import { Divider, List, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import { Clear, CropSharp } from '@material-ui/icons'
import React from 'react'
import { PrimaryButton } from '../Buttons/PrimaryButton'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        backgroundColor: '#fff',
        '& .MuiList-root .MuiTypography-root':{
            color: '#666',
        },
        '& .MuiButton-root': {
            margin: '1rem 2px',
            fontSize: '.8rem',
            '& .MuiSvgIcon-root':{
                fontSize: '.8rem',
            },
        },
        '& .btns':{
            display: 'flex',
            justifyContent: 'center',
        }
    },
    title: {
        backgroundColor: '#111',
        padding: "5px",
        color: '#fff',
        fontWeight: 700,
    },
}))


interface Props {

}




export const CompareAside: React.FC<Props> = () => {
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <ListItem>
                    <ListItemText>
                        COMPARE PRODUCTS
                    </ListItemText>
                </ListItem>
            </div>
            <List>
                <CustomListItem>
                    Lorem ipsum dolor sit amet consectetur
                </CustomListItem>
                <Divider />
                <CustomListItem>
                    Lorem ipsum dolor sit amet consectetur
                </CustomListItem>
                <Divider />
                <CustomListItem>
                    Lorem ipsum dolor sit amet consectetur
                </CustomListItem>
                <Divider />
                <CustomListItem>
                    Lorem ipsum dolor sit amet consectetur
                </CustomListItem>
                <Divider />
            </List>
            <div className="btns">
                <PrimaryButton
                startIcon={<CropSharp />}
                text="COMPARE"
                />
                <PrimaryButton
                startIcon={<Clear />}
                text="CLEAR"
                />
            </div>
        </div>
    )
}


const CustomListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ListItem>
            <ListItemText>
                {children}
            </ListItemText>
        </ListItem>
    )
}

