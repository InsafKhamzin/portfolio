import React from 'react'

function Resume({ content }) {
    const { workExperience, education } = content;

    return (
        <div>
            <h2>Work Experience</h2>
            {
                workExperience.map((exp, idx) => (
                    <div key={idx}>
                        <p><b>{exp.jobTitle}</b> | {exp.company}</p>
                        <p>{exp.period}</p>
                        <ul>
                            {exp.accomplishments.map((a, idx) => (
                                <li key={idx}>{a}</li>
                            ))}
                        </ul>
                        <br />
                    </div>
                ))
            }
            <hr />
            <h2>Education</h2>
            {
                education.map((ed, idx) => (
                    <div key={idx}>
                        <p><b>{ed.credit}</b></p>
                        <p>{ed.place}</p>
                        <p><b>{ed.gpa}</b></p>
                        <p>{ed.period}</p>
                        <br />
                    </div>
                ))
            }
        </div>
    )
}

export default Resume
