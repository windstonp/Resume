import React from 'react';
import { Stack } from 'components/Stack';
import { Base } from 'layouts/base';
import { AboutMe } from './components/aboutMe';
import { ExpertiseSection } from './components/expertiseSection';
import { Header } from './components/Header';
import { PersonalProjects } from './components/personalProjects';
import { ReasonsToWorkSection } from './components/reasonToWorkSection';
import { WorkExperience } from './components/workExperience';
import { WorkTogether } from './components/workTogether';


export function HomeTemplate(){
  return (
    <Base >
      <Stack spacing="5rem">
        <Header/>
        <ReasonsToWorkSection/>
        <ExpertiseSection />
        <WorkExperience />
        <PersonalProjects/>
        <AboutMe />
        <WorkTogether />
      </Stack>
    </Base>
  )
}