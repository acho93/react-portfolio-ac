import React from 'react';

import Layout from '../Layout';
import ResumeDoc from './ChoResume.pdf'

function Resume() {
    return (
        <Layout>
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
        </Layout>
    )
}

export default Resume;