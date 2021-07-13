import React from 'react'
import {FeatureContainer, FeatureButton, } from './FeatureElements'
const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Meal of the day</h1>
            <p>Big fried chicken sandwich with mozzarilla and turkey</p>
            <FeatureButton>Order !!</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
