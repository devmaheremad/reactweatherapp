import React from 'react';
import { PInfo, Section } from '../AppStyled';

const WeatherResault = (props) => {

    return (
        <Section>
            {
                props.temperature && props.city && props.country && props.humidity && props.description && <div>
                    <PInfo>Temperature: {props.temperature}</PInfo>
                    <PInfo>City: {props.city}</PInfo>
                    <PInfo>Country: {props.country}</PInfo>
                    <PInfo>Humidity: {props.humidity}</PInfo>
                    <PInfo>Description: {props.description}</PInfo>
                </div> 
            }
            {
                props.erorr && 
                <div>
                    <PInfo>{props.erorr}</PInfo>
                </div> 
            }

        </Section>
    )
}

export default WeatherResault;