import { Button, ListSubheader as ListHeader, makeStyles } from '@material-ui/core';
import { Add, LinearScale } from '@material-ui/icons';
import { ListheaderProps } from '../interfaces';


const useStyles = makeStyles((theme) => ({

    button: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: {
        fontSize: '1rem',
        fontWeight: 600,
    }
}))

interface Props extends ListheaderProps {
    collapsed: boolean,
    onCollapsed: () => void,
}

export const ListSubHeader: React.FC<Props> = ({ children, collapsed, onCollapsed }) => {
    const classes = useStyles();
    return (
        <ListHeader>
            <Button
                fullWidth
                disableRipple
                className={classes.button}
                onClick={() => { onCollapsed() }}
            >
                <span>{children}</span>
                {collapsed ?
                    <LinearScale className={classes.icon} />
                    : <Add className={classes.icon} />
                }
            </Button>
        </ListHeader>
    )
}
