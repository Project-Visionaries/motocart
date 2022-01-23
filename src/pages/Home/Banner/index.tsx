import { Grid, makeStyles, Theme } from '@material-ui/core'
import { useState } from 'react';
import { BannerText } from '../../../components/BannerText'
import { ChoiceForm } from '../../../components/ChoiceForm/ChoiceForm'
import { MOBILE_LARGE } from '../../../constants/screenSizes';
interface StyleProps {
    openForm: boolean,
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
    root: {
        padding: theme.spacing(2),
        background: `url(/images/car6.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 'calc(100vh - 96px)',
        '& .MuiGrid-container': {
            minHeight: '100%',
        },
        '& .choice_form': {
            [theme.breakpoints.down(MOBILE_LARGE)]: {
                display: ({ openForm }) => openForm ? 'none' : 'inline',
            }
        },
        '& .text': {
            [theme.breakpoints.down(MOBILE_LARGE)]: {
                display: ({ openForm }) => !openForm ? 'none' : 'inline',
            }
        },
    },

}))

interface Props {

}

export const Banner = (props: Props) => {
    /* 
    - create the home view banner
    - on mobile view it should display the BannerText and and hide the ChoiceForm
    - create a button to toggle between the BannerText and the ChoiceForm
    */
    const [openForm, setOpenForm] = useState(false)

    const classes = useStyles({ openForm });
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={4} className="choice_form">
                    <ChoiceForm
                    closeForm={()=>{setOpenForm(true)}}
                     />
                </Grid>

                <Grid item xs={12} sm={8} className="text">
                    <BannerText
                        text="DECORATIVE"
                    />
                </Grid>
            </Grid>
        </div>
    )
}
