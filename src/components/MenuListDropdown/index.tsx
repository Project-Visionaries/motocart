import { Divider, List, ListItem, ListItemIcon, ListItemText,  makeStyles } from '@material-ui/core'
import {  ListAlt } from '@material-ui/icons'
import React, { useState } from 'react'
import { CollapseListItems } from './CollapseListItems'
import { itemData } from './data'
import { CollapseProps } from './interfaces'
import { ListSubHeader } from './ListHeader'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        backgroundColor: '#fff',
        '& .MuiList-padding': {
            padding: '0px'
        },
        '& .MuiDivider-root': {
            backgroundColor: "#eee",
        },
    },
    title: {
        backgroundColor: 'yellow',
        padding: "5px",
        fontWeight: 700,
    },
}))


interface Props {

}




export const MenuListDropdown: React.FC<Props> = () => {
    const classes = useStyles()
    const [collapse, setCollapse] = useState<CollapseProps>({
        audio: false,
        parts: false,
        exterior: false,
        interior: false,
        lighting: false,
        performance: false,
    })

    const toggleCollapse = (name: string) => () => {
        // setCollapse({ ...collapse, [name]: !collapse[name] });
    };
    
    return (
        <div className={classes.root}>
            <List >
                <div className={classes.title}>
                    <ListItem>
                        <ListItemIcon>
                            <ListAlt />
                        </ListItemIcon>
                        <ListItemText>
                            CATEGORY
                        </ListItemText>
                    </ListItem>
                </div>
                <ListSubHeader
                collapsed={collapse.audio}
                onCollapsed={toggleCollapse('audio')}
                >
                    AUDIO
                </ListSubHeader>

                <CollapseListItems
                    items={itemData.audio}
                    visible={collapse.audio}
                    onClick={() => { }}
                />

                <Divider />
                <ListSubHeader
                collapsed={collapse.parts}
                onCollapsed={toggleCollapse('parts')}
                >
                    BODY PARTS
                </ListSubHeader>
                
                <CollapseListItems
                    items={itemData.parts}
                    visible={collapse.parts}
                    onClick={() => { }}
                />
                <Divider />
                <ListSubHeader
                collapsed={collapse.exterior}
                onCollapsed={toggleCollapse('exterior')}
                >
                    EXTERIOR
                </ListSubHeader>

                <CollapseListItems
                    items={itemData.exterior}
                    visible={collapse.exterior}
                    onClick={() => { }}
                />
                <Divider />
                <ListSubHeader
                collapsed={collapse.interior}
                onCollapsed={toggleCollapse('interior')}
                >
                    INTERIOR
                </ListSubHeader>

                <CollapseListItems
                    items={itemData.interior}
                    visible={collapse.interior}
                    onClick={() => { }}
                />
                <Divider />
                <ListSubHeader
                collapsed={collapse.lighting}
                onCollapsed={toggleCollapse('lighting')}
                >
                    LIGHTING
                </ListSubHeader>

                <CollapseListItems
                    items={itemData.lighting}
                    visible={collapse.lighting}
                    onClick={() => { }}
                />
                <Divider />
                <ListSubHeader
                collapsed={collapse.performance}
                onCollapsed={toggleCollapse('performance')}
                >
                    PERFORMANCE
                </ListSubHeader>
                <CollapseListItems
                    items={itemData.performance}
                    visible={collapse.performance}
                    onClick={() => { }}
                />

            </List>
        </div>
    )
}

