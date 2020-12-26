import React from 'react';
import { Input, Section, Submit } from '../AppStyled';

const WeatherForm =  (props) => {
    return (
        <Section>
            <form method="post" onSubmit={props.getWeather}>
                <Input type="text" name="city" placeholder="City..." />
                <Input type="text" name="country" placeholder="Country..." />
                <Submit><i className="fas fa-snowflake fa-x2"></i> Weather</Submit>
            </form>
        </Section>
    )
}

export default WeatherForm;