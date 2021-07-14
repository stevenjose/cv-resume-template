import React from "react";

export const Resume = ({ person }) => {
  var skillmessage = 'Here you can create a short write-up of your skills to show off to employers';
  if (person.education && person.experience && person.skills) {
    const { education, experience, skills } = person;
    var student = education.map(function (education) {
      return (
        <div key={education.id}>
          <h3></h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.endDate}</em>
          </p>
        </div>
      );
    });
    var work = experience.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span>{" "}
            <em className="date">
              {work.startDate} : {work.endDate}
            </em>
          </p>
          <p>{work.jobDescription}</p>
        </div>
      );
    });
    var skill = skills.map(function(skills){
      var className = 'bar-expand '+skills.name.toLowerCase();
      return <li key={skills.name}><span style={{width:skills.percentage}}className={className}></span><em>{skills.name}</em></li>
    })
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{student}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skill}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};
