import { Collapse, Divider, ListItem, ListItemText } from '@material-ui/core';
import React from 'react'
import { ListItemsProps } from '../interfaces';


export const CollapseListItems: React.FC<ListItemsProps> = ({ items, visible, onClick }) => {
    return (
        <>
            <Divider />
            <Collapse in={visible}>
                {items
                    .map(({ label, link }, index) => (
                        <ListItem
                            button
                            key={index}
                            disabled={true}
                            onClick={() => {}}
                        >
                            {/* <ListItemIcon>
                        <Icon />
                    </ListItemIcon> */}
                            <ListItemText>
                                {label}
                            </ListItemText>
                        </ListItem>
                    ))}
            </Collapse>
        </>
    )
};