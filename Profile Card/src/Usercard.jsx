const userData = [
    {
        name: "Seetharaman",
        city: "Namakkal",
        desc: "Full Stack Developer",
        skills: ["Python", "Django", "Data Science", "Flask", "HTML", "CSS", "Java", "JavaScript", "Node", "Bash Scripting"],
        online: true,
        profile: "images/1.jpg"
    },
    {
        name: "Linkedh",
        city: "Theni",
        desc: "Data Analyst",
        skills: ["Python", "Data Science", "Excel", "SQL", "R Programming", "Tableau", "Power BI"],
        online: false,
        profile: "images/2.jpg"
    },
];

function User(props){
    return (
    <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.desc}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })}
            </ul>
        </div>
    </div>
    )
};

export const Usercard = () => {
    return (
    // <User 
    //     name="Seetharaman" 
    //     city="Namakkal" 
    //     desc="Full Stack Developer" 
    //     skills={["Python", "Django", "Data Science", "Flask", "HTML", "CSS", "Java", "JavaScript", "Node", "Bash Scripting"]}
    //     online={true}
    //     profile="images/1.jpg" 
    // />
    
    <>
    {userData.map((user, index) => {
        return <User 
            key={index}
            name={user.name} 
            city={user.city} 
            desc={user.desc} 
            skills={user.skills}
            online={user.online}
            profile={user.profile} 
        />
    })}
    </>
    )
}
