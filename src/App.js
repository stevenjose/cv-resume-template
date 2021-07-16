import React, { useEffect, useState } from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { db } from './firebase';
import img1 from './assets/img/jgla.jpeg';
import cv from './assets/cv/cv.pdf';
import {Resume} from "./components/Resume";
import { Portafolio } from "./components/Portafolio";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import { useSelector, useDispatch } from 'react-redux'
import { personSkills,personPerfil,personEducation, personPortafolio } from "./app/personReducer";

function App() {
  
  const [estudios, setEstudios] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [skills, setSkills] = useState([]);
  const [portafolio, setPortafolio] = useState([]);
  const [perfil, setPerfil] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [pr, setPr] = useState({perfil,portafolio,skills});
  const dispatch = useDispatch();
  const personState = useSelector((state) => state.person.person);
  const getLinks = async () => {
    consultApi("education", setEstudios);
    consultApi("experience",setExperience);
    consultApi("certificate",setCertificate);
    consultApi("skills",setSkills);
    consultApi("portafolio",setPortafolio);
    consultApi("perfil",setPerfil);
    consultApi("testimonials",setTestimonials);
  };

  const consultApi = (indice, setState) => {
    if(sessionStorage.getItem(indice)){
      setState(JSON.parse(localStorage.getItem(indice)));   
      switch (indice) {
        case 'skills':
          dispatch(personSkills(JSON.parse(localStorage.getItem(indice))));
          break;
        case 'education':
          dispatch(personEducation(JSON.parse(localStorage.getItem(indice))));
          break;
        case 'portafolio':
          dispatch(personPortafolio(JSON.parse(localStorage.getItem(indice))));
          break;  
        case 'perfil':
          let perfil1 = JSON.parse(localStorage.getItem(indice));
          dispatch(personPerfil(perfil1[0]));
          break;    
        default:
          break;
      }
    }else{
      db.collection(indice).onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setState(docs);
        sessionStorage.setItem(indice, JSON.stringify(docs));
      });
    }
   
  }

  useEffect(async () => {
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
    skills,
    testimonials
  };

  return (
    <div className="App">
      <Header bio={person}/>
      <About  bio={person}/>
      <Resume person={person}/>
      <Portafolio portafolio={person.portafolio}/>
      <Testimonials testimonials={person.testimonials}/>
      <Footer social={person.social}/>
    </div>
  );
}

export default App;
