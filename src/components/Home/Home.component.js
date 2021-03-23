import { Grid } from '@material-ui/core';
import React, { useState } from 'react'
import './Home.styles.css'

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
    return (
        <div className="home">
            <form>
                <Grid container>
                    <Grid item></Grid>
                    <Grid item></Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Home
