
const Skills = () => {

    const skills = ["JavaScript", "TypeScript", "NodeJS", "React and frames", "CSS and frames", "Git", "Express", 
    "Sequelize", "PostgreSQL", "AWS", "Firebase", "GraphQL", "Redux", "Recoil", "HTML", "Excel / Spreadsheets"]
    return (
        <div className="col-md-4" >
            <div className="card bg-secondary text-light">
                <div className="card-body">
                    <h1>Skills</h1>
                    <div>
                        <ul>
                           {skills.map(i => (
                            <li className="py-1" key={i}>{i}</li>
                           ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;