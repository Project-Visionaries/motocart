import { makeStyles, Typography } from '@material-ui/core'
import { Email } from '@material-ui/icons'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { SECONDARY_COLOR } from '../../../constants/colors'
import { MOBILE_LARGE } from '../../../constants/screenSizes'
import { PrimaryButton } from '../../Buttons/PrimaryButton'
import { CustomTextField } from '../../FormFields/TextField'
const useStyles = makeStyles(theme => ({
    root: {
        height: '60vh',
        background: 'url(/images/car9.jpeg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '& .bg': {
            height: 'inherit',
            background: 'linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, .6), rgba(0, 0, 0, .4))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& .bold': {
                fontWeight: 700,
                color: '#fff',
            },
        },
        '& .MuiTypography-root': {
            marginBottom: '1.5rem',
            color: SECONDARY_COLOR,
            textAlign: 'center',
        }
    },
    formContainer: {
        width: '60%',
        [theme.breakpoints.down(MOBILE_LARGE)]: {
            width: '90%',
        },
        '& form': {
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down(MOBILE_LARGE)]: {
                flexDirection: 'column',
            }
        },
        '& .btn': {
            height: '3.5rem',
            [theme.breakpoints.down(MOBILE_LARGE)]: {
                marginTop: '1rem',
                width: '100%',
            },
            '& .MuiButton-root': {
                borderRadius: '0',
                height: 'inherit',
                marginLeft: '3px',
                [theme.breakpoints.down(MOBILE_LARGE)]: {
                    width: '100%',
                    marginLeft: '0',
                },
            }
        }
    }
}))

const initialValues = {
    email: '',
}
const validationSchema = yup.object().shape({
    email: yup.string().email("Inavalid email address").required("Required")
})

interface Props {

}

export const FooterSubscribe = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="bg">
                <Typography variant="h5">
                    NEWSLETTER
                </Typography>
                <Typography variant="h5" className="bold">
                    GET NOTIFIED OF ANY UPDATES!
                </Typography>
                <div className={classes.formContainer}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => { console.log(values) }}
                    >
                        <Form>
                            <CustomTextField
                                name="email"
                                variant="outlined"
                                size="medium"
                                placeholder="Enter your email adress"
                                bgColor="#fff"
                                fullWidth
                            />
                            <PrimaryButton
                                type="submit"
                                text="SUBSCRIBE"
                                startIcon={<Email />}
                            />
                        </Form>
                    </Formik>
                </div>
            </div>

        </div>
    )
}
