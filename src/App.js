import React, { useEffect, useState } from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { db } from './firebase';
import img1 from './assets/img/jgla.jpeg';
import cv from './assets/cv/cv.pdf';
import {Resume} from "./components/Resume";
import { Portafolio } from "./components/Portafolio";

function App() {
  
  const [estudios, setEstudios] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [skills, setSkills] = useState([]);
  const [portafolio, setPortafolio] = useState([]);
  const [perfil, setPerfil] = useState([]);

  const getLinks = async () => {
    consultApi("education", setEstudios);
    consultApi("experience",setExperience);
    consultApi("certificate",setCertificate);
    consultApi("skills",setSkills);
    consultApi("portafolio",setPortafolio);
    consultApi("perfil",setPerfil);
  };

  const consultApi = (indice, setState) => {
    db.collection(indice).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setState(docs);
    });
  }

  useEffect(() => {
    getLinks();

  }, []);

  const person = {
    avatar: img1,
    resumeDownload: cv,
    name: (perfil && perfil[0]) ? perfil[0].name : '',
    profession: (perfil && perfil[0]) ? perfil[0].profession : '',
    bio: (perfil && perfil[0] ) ? perfil[0].bio : '',
    email: (perfil && perfil[0]) ? perfil[0].email: '',
    address: (perfil && perfil[0]) ? perfil[0].address : '',
    tlf: (perfil && perfil[0]) ? perfil[0].tlf : '',
    zip: (perfil && perfil[0]) ? perfil[0].zip : '',
    social: [
      {name: 'github', url: 'https://github.com/stevenjose/'},
      {name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/'},
    ],
    social: [
      {
        "name": "linkedin",
        "url": "https://www.linkedin.com/in/joselopezarias/",
        "className": "fa fa-linkedin"
      },
      {
        "name": "github",
        "url": "https://github.com/stevenjose/",
        "className": "fa fa-github"
      }
    ],
    experience,
    portafolio,
    education: estudios,
    certificate,
    skills
  };

  return (
    <div className="App">
      <Header bio={person}/>
      <About  bio={person}/>
      <Resume person={person}/>
      <Portafolio portafolio={person.portafolio}/>
    </div>
  );
}

export default App;
