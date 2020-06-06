import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    margin-bottom: 10px;
    margin-right: 15px;
    font-size: 1.1em;
`

function Projects({ content }) {
    const { projects } = content;
    return (
        <div>
            <h2>Projects</h2>
            {
                projects.map((project, idx) => (
                    <div key={idx}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {
                            project.myRole &&
                            <p><strong>My role:</strong> {project.myRole}</p>
                        }
                        <p><strong>Tech Stack:</strong> {project.techStack}</p>
                        {
                            project.url &&
                            <StyledLink href={project.url} target="__blank">Link</StyledLink>
                        }
                        {
                            project.repo &&
                            <StyledLink href={project.repo} target="__blank">GitHub Repo</StyledLink>
                        }
                        <hr />
                    </div>
                ))
            }

        </div>
    )
}

export default Projects
