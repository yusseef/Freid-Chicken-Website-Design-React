import React from 'react'
import {FaBehance, FaFacebook, FaGithub, FaTwitter} from 'react-icons/fa'
import {FooterContainer,
        FooterWrapper,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcon,
        SocialIconLink,        
}
         from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"> Fried Chicken</SocialLogo>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Github" rel="noopener noreferrer"><FaGithub /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><FaBehance /></SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
