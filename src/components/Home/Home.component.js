import React from 'react';
import InputField from '../InputField/InputField.component';
import './Home.styles.css';

function Home() {
    return (
        <div className="home">
            <div className="home__row1">
                <InputField label="FIRST NAME" />
                <InputField label="LAST NAME" />
            </div>
            <div className="home__row2">
                <InputField label="EMAIL" />
                <InputField label="OGRANIZATION" />
            </div>

        </div>
    )
}

export default Home
