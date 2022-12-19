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
import { SizedContainer } from 'components/Container';


export function HomeTemplate(){
  return (
    <Base >
      <Stack spacing="5rem">
        <Header/>
        <SizedContainer>
          <ReasonsToWorkSection/>
          <ExpertiseSection />
          <WorkExperience />
          <PersonalProjects/>
          <AboutMe />
        </SizedContainer>
        <WorkTogether />
      </Stack>
    </Base>
  )
}