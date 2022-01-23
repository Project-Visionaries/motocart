import { makeStyles, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { SelectField } from '../FormFields/Select'
import * as yup from 'yup'
import { PrimaryButton } from '../Buttons/PrimaryButton'
import { MOBILE_LARGE } from '../../constants/screenSizes'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: "#fff",
        position: 'relative',
        '& .MuiFormControl-root': {
            margin: '5px 0',
        },
        '& .close': {
            cursor: 'pointer',
            height: '1.5rem',
            width: '1.5rem',
            borderRadius: '50%',
            position: 'relative',
            backgroundColor: 'red',
            top: '-10px',
            left: '-10px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 700,
            [theme.breakpoints.up(MOBILE_LARGE)]:{
                display: 'none'
            },
        }
    },
    title: {
        marginBottom: theme.spacing(2),
    }
}))

const initialValues = {
    make: '',
    status: '',
    model: '',
    location: '',
    year: '',
}
const FormValidationSchema = yup.object().shape({
    make: yup.string(),
    status: yup.string(),
    model: yup.string(),
    location: yup.string(),
    year: yup.string(),
})

const makeOptions = {
    make1: "Hello",
    make2: " Hi"
}
const statusOptions = {
    status1: "New",
    status2: " 1 years old"
}
const modelOptions = {
    model1: "Model type1",
    model2: " Model typ2"
}
const locationOptions = {
    location1: "Nigeria",
    location2: " Cameroon"
}
const yearOptions = {
    year1: "2020",
    year2: "2021"
}
interface Props {
    closeForm: ()=>void,
}

export const ChoiceForm = ({closeForm}: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="close" onClick={()=>{closeForm()}}>X</div>
            <Typography variant="body1" className={classes.title}>
                FIND YOUR RIGHT CAR
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={FormValidationSchema}
                onSubmit={(values) => { console.log(values) }}
            >
                <Form>
                    <SelectField
                        name="make"
                        label="Make"
                        options={makeOptions}
                    />
                    <SelectField
                        name="status"
                        label="Status"
                        options={statusOptions}
                    />
                    <SelectField
                        name="model"
                        label="Model"
                        options={modelOptions}
                    />
                    <SelectField
                        name="location"
                        label="Location"
                        options={locationOptions}
                    />
                    <SelectField
                        name="year"
                        label="Year"
                        options={yearOptions}
                    />
                    <PrimaryButton
                        text="SEARCH VEHICLE"
                        type="submit"
                        fullWidth={true}
                    />
                </Form>

            </Formik>
        </div>
    )
}
