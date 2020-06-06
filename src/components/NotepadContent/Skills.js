import React from 'react'
import { ProgressBar } from '@react95/core'
import styled from 'styled-components'

const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`


function Skills({ content, isMobile }) {
    console.log(content)
    const { hard, soft } = content;
    return (
        <div>
            <h2>Technical Skills</h2>
            {
                hard.map((h, idx) => (
                    <StyledSkill key={idx}>
                        <p style={{ flex: 1 }}>{h.name}</p>
                        <ProgressBar style={{ flex: 1 }} width={isMobile ? 150 : 200} percent={h.progress} />
                    </StyledSkill>
                ))
            }
            <br />
            <h2>Interpersonal Skills</h2>
            <p>{soft}</p>

        </div>
    )
}

export default Skills
