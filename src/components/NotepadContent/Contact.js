import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaMedium } from 'react-icons/fa'

const Icons = { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaMedium };


const StyledItem = styled.li`
    display: inline;
    font-size: 20px;
    margin-left: 10px;
`

const StyledLink = styled.a`
    color: black;
`

function Contact({ content }) {
    const { email, emailText, socialText, social } = content;
    const mailto = `mailto:${email}`;
    return (
        <div>
            <h2>Let's have a chat!</h2>
            <p>{emailText}<a href={mailto}>{email}</a></p>
            <p>{socialText}</p>
            <ul>
                {
                    social.map((s, idx) => {
                        const Icon = Icons[s.name];
                        return (
                            <StyledItem key={idx}>
                                <StyledLink href={s.link} target="_blank" rel="noopener noreferrer">
                                    <Icon />
                                </StyledLink>
                            </StyledItem>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Contact
