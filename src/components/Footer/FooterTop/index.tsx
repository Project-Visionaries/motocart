import { Grid, makeStyles, Typography } from '@material-ui/core'
import { BorderLeftOutlined, CakeRounded, VpnKeyOutlined } from '@material-ui/icons'
import React from 'react'
const useStyles = makeStyles(theme => ({
    root: {
        padding: '2rem 5px'
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiSvgIcon-root': {
            fontSize: '3rem',
            fontWeight: 100,
            marginRight: '1rem',
        },
        '& .MuiTypography-h5': {
            fontWeight: 700,
        },
    },
}))

interface Props {

}

export const FooterTop = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomLayout
                        icon={<BorderLeftOutlined />}
                        title="World's #1"
                        subtitle="Largest Auto portal"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomLayout
                        icon={<CakeRounded />}
                        title="Car Sold"
                        subtitle="Every 4 minute"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomLayout
                        icon={<VpnKeyOutlined />}
                        title="Offers"
                        subtitle="Stay updated pay less"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomLayout
                        icon={<BorderLeftOutlined />}
                        title="Compare"
                        subtitle="Decode the right car"
                    />
                </Grid>
            </Grid>

        </div>
    )
}
interface CustomLayoutProps {
    icon: React.ReactNode,
    title: string,
    subtitle: string,
}
const CustomLayout: React.FC<CustomLayoutProps> = ({ icon, title, subtitle }) => {
    const classes = useStyles()
    return (
        <div className={classes.card}>
            <div className="iconWrapper">
                {icon}
            </div>
            <div>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {subtitle}
                </Typography>
            </div>
        </div>
    )
}
