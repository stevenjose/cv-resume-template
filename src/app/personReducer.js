import { createSlice } from '@reduxjs/toolkit'

export const personReducer = createSlice({
  name: 'person',
  initialState: {
    person: {
      perfil: '',
      avatar: '',
      resumeDownload: '',
      name: '',
      profession: '',
      bio: '',
      email: '',
      address: '',
      tlf: '',
      zip: '',
      social: '',
      experience: '',
      portafolio: '',
      education: '',
      certificate: '',
      skills: '',
      testimonials: ''
    },
  },
  reducers: {
    personLoad: (state, action, index) => {
      console.log('Person Load',action);
      state.person = action.payload
    },
    personSkills: (state, action) => {
      state.person.skills = action.payload
    },
    personEducation: (state, action) => {
      state.person.education = action.payload
    },
    personPerfil: (state, action) => {
      state.person.perfil = action.payload
    },
    personPortafolio: (state, action) => {
      state.person.portafolio = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { personLoad, personSkills, personEducation, personPerfil,personPortafolio } = personReducer.actions

export default personReducer.reducer
