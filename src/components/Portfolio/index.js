import React from 'react';
import projects from '../../portfolio.json'
import '../../index.css'

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="project-img">
                <img alt={props.name} src={props.image}/>
            </div>
            <div>
                <ul>
                    <li>
                        <p className="project-title">{props.name}</p>
                    </li>
                    <li>
                        <p className="project-description">{props.description}</p>
                    </li>
                    <li>
                        <div className="project-icon">
                            <a href={props.github}><img src="https://img.icons8.com/ios/50/000000/github--v1.png" alt="GitHub" className="proj-icon"/></a>
                            <a href={props.deploy}><img src="https://img.icons8.com/ios/50/000000/domain.png" alt="DeployedApp" className="proj-icon"/></a>
                        </div>
                    </li>
                    <li>
                        <p className="project-lang">{props.languages}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
    return (
        <section>
            <div className="project">
                <h2>Projects</h2>
                <hr></hr>
            </div>

            <Wrapper>
                {projects.map((portfolio) => (
                    <ProjectCard
                        key={portfolio.id}
                        name={portfolio.name}
                        image={portfolio.image}
                        github={portfolio.github}
                        deploy={portfolio.deploy}
                        description={portfolio.description}
                        languages={portfolio.languages}
                    />
                ))}
            </Wrapper>
        </section>
    );
}

export default Portfolio;