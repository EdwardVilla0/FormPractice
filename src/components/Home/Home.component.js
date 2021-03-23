import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import './Home.styles.css'

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '500px',
            margin: theme.spacing(1),

        }
    }
}))

const initialValues = {
    id: 0,
    fullname: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

function Home() {
    const [values, setValues] = useState(initialValues);
    const classes = useStyle();
    const handleFullname = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return (
        <div className="home">
            <form className={classes.root}>

                <Grid container>
                    <Grid item xs={6} className="home__row1">
                        <TextField
                            variant="outlined"
                            label="Full Name"
                            name='fullname'
                            value={values.fullname}
                            className="home__row1__input"
                            onChange={handleFullname}
                        />
                        <TextField
                            variant="outlined"
                            label="Email"
                            name="email"
                            value={values.email}
                            className="home__row1__input"
                        />
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}

export default Home
