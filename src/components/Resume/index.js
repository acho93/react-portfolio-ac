import React from 'react';
import ResumeDoc from './ChoResume.pdf'

function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <hr></hr>

            <div>
                <h3>Proficiencies</h3>
                <ul>
                    <li>
                        HTML, CSS, JavaScript, MERN Stack (MongoDB, Express.js, React, Node.js), MySQL
                    </li>
                </ul>
            </div>

            <div>
                <a href={ResumeDoc} Download Resume></a>
            </div>
        </section>
    )
}

export default Resume;