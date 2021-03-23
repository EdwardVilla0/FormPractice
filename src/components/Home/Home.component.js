import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import './Home.styles.css'

const useStyle = makeStyles(theme => ({
    root: {

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
    const classes = useStyle()
    return (
        <div className="home">
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            label="Full Name"
                            value={values.fullname}
                        />
                        <TextField
                            variant="outlined"
                            label="email"
                            value={values.email}
                        />
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Home
