import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { SECONDARY_COLOR } from '../../../constants/colors'
import { Spacer } from '../../spacer/Spacer'
const useStyles = makeStyles(theme => ({
    root: {
        // minHeight: '60vh',
        backgroundColor: "#222",
        padding: '2rem 0',
        '& .MuiTypography-root': {
            fontWeight: 700,
            color: '#fff',
            fontSize: '17px',
            marginBottom: '1rem',
        },
        '& .MuiTypography-body2': {
            marginBottom: '1rem',

            color: '#ddd',
            fontSize: '15px',
            fontWeight: 300,
        },
        '& .MuiGrid-item': {
            padding: '0 1rem',
        },
        '& ul': {
            padding: 0,
        },
    },
    link: {
        listStyle: 'none',
        width: '100%',
        '& a': {
            textDecoration: 'none',
            color: '#ddd',
            padding: '.4rem 0',
            fontSize: '15px',
            fontWeight: 300,
            display: 'block',
            transtion: '1s ease',
            '&:hover': {
                color: SECONDARY_COLOR,
            }
        }

    }
}))

const quickLinks = [
    { text: 'Blog', link: '/' },
    { text: 'FAQs', link: '/' },
    { text: 'Payment', link: '/' },
    { text: 'Shipment', link: '/' },
    { text: 'Where is my order?', link: '/' },
    { text: 'Return policy', link: '/' },
]
const styleAdvisor = [
    { text: 'Your Account', link: '/' },
    { text: 'Information', link: '/' },
    { text: 'Addresses', link: '/' },
    { text: 'Discount', link: '/' },
    { text: 'Orders History', link: '/' },
    { text: 'Additional Information', link: '/' },
]
const information = [
    { text: 'Site Map', link: '/' },
    { text: 'Search Terms', link: '/' },
    { text: 'Advanced Search', link: '/' },
    { text: 'About Us', link: '/' },
    { text: 'Contact Us', link: '/' },
    { text: 'Suppliers', link: '/' },
]


interface Props {

}

export const FooterNav: React.FC<Props> = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">
                            SHOWROOM
                        </Typography>
                        <Typography variant="body2">
                            ThemesGround, 789 Main rd, Anytown,
                            CA 12345 USA
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            +1 800 789
                        </Typography>
                        <CustomLink
                            text='motocart@example.com'
                        />
                        <Spacer />
                        <Typography variant="body2" color="textSecondary">
                            Mon - Fri : 09am to 06pm
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">
                            QUICK LINKS
                        </Typography>
                        <ul>
                            {quickLinks.map((item, index) => (
                                <CustomLink
                                    text={item.text}
                                    key={index}
                                />
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">
                            STYLE ADVISOR
                        </Typography>
                        <ul>
                            {styleAdvisor.map((item, index) => (
                                <CustomLink
                                    text={item.text}
                                    key={index}
                                />
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6">
                            INFORMATION
                        </Typography>
                        <ul>
                            {information.map((item, index) => (
                                <CustomLink
                                    text={item.text}
                                    key={index}
                                />
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}

const CustomLink: React.FC<{ text: string, link?: string }> = ({ text, link }) => {
    const classes = useStyles()
    return (
        <li className={classes.link}>
            <a href={link ? link : '/'}>{text}</a>
        </li>
    )
}