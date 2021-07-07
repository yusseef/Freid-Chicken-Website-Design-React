import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn

} from './HeroElement'
const HeroSection = () => {
    return (
        <>
           <HeroContainer>
                <Navbar />
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Best fried chicken in town</HeroH1>
                        <HeroP>Order Now !!</HeroP>
                        <HeroBtn>Place your order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer> 
        </>
    )
}

export default HeroSection
