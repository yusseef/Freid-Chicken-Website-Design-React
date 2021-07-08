import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import {HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn

} from './HeroElement'
const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
           <HeroContainer>
                <Navbar toggle ={toggle} />
               <Sidebar isOpen={isOpen} toggle = {toggle} />
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
