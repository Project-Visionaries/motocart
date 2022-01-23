import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import { Facebook, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import { TABLET } from '../../../constants/screenSizes';
interface StyleProps {
    bgColor?: string,
    color?: string,
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
    root: {
        backgroundColor: "#222",
        padding: '2rem 0',
        '& .MuiTypography-root': {
            color: '#aaa',
            fontSize: '14px',
        },
        '& .MuiGrid-item': {
            // padding: '1.5rem 0',
            [theme.breakpoints.down(TABLET)]:{
                marginBottom: '1rem',
            }
        },
    },
    social: {
        backgroundColor: ({ bgColor }) => bgColor ? bgColor : 'transparent',
        height: '2.5rem',
        width: '2.5rem',
        cursor: 'pointer',
        marginRight: '.4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiSvgIcon-root': {
            fontSize: '1.5rem',
            color: ({ color }) => color ? color : '#fff',
        }
    },
}))

interface Props {
}

export const FooterLinks = (props: Props) => {
    const classes = useStyles({});
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <Grid container>
                        <SocialLink
                            icon={<Facebook />}
                            bgColor="skyblue"
                        />
                        <SocialLink
                            icon={<Twitter />}
                            bgColor="darkblue"
                        />
                        <SocialLink
                            bgColor="red"
                            icon={<YouTube />}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="body2" >
                        © 2019 ThemesGround. All Rights Reserved.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>

                </Grid>
            </Grid>
        </div>
    )
}
interface SocialLinkProps extends StyleProps {
    icon: React.ReactNode,
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, bgColor, color }) => {
    const classes = useStyles({ bgColor, color });
    return (
        <a href="/" className={classes.social}>
            {icon}
        </a>
    )
}
