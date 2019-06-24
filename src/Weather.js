import React from 'react';

export default function Weather (props) {
    const { weatherData } = props;
    return (
        <p>{weatherData.name}</p>
    );
}