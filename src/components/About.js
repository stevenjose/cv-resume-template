import React from "react";

export const About = ({bio}) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={bio.avatar}
            alt="Jose Lopez"
          />
        </div>
        <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio.bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{bio.name}</span><br />
						   <span>{bio.address}<br />
						         Zip {bio.zip}
                           </span><br />
						   <span>{bio.tlf}</span><br />
                     <span>{bio.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={bio.resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};
