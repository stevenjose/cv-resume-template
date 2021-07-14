import React from "react";

export const Portafolio = ({portafolio}) => {
    if(portafolio){
        var projects = portafolio.map(function(projects){
          var projectImage = 'images/portfolio/'+projects.image;
          return <div key={projects.name} className="columns portfolio-item">
             <div className="item-wrap">
              <a href={projects.url} title={projects.name} target="_blank" >
                 <img alt={projects.name} src={projects.img} />
                 <div className="overlay">
                    <div className="portfolio-item-meta">
                   <h5>{projects.name}</h5>
                       <p>{projects.category}</p>
                    </div>
                  </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        })
      }
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};
