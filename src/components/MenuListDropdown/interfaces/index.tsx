export interface ListItemProps { label: string, link?: string, }

export interface ListItemsProps {
    items: ListItemProps[],
    visible: boolean,
    onClick: () => void,
}
export interface ListheaderProps {
    children: React.PropsWithChildren<{}>,
}

export interface CollapseProps {
    audio: boolean;
    parts: boolean;
    exterior: boolean;
    interior: boolean;
    lighting: boolean;
    performance: boolean;
}

export interface ItemsProps {
    audio: ListItemProps[],
    parts: ListItemProps[],
    exterior: ListItemProps[],
    interior: ListItemProps[],
    lighting: ListItemProps[],
    performance: ListItemProps[],
}