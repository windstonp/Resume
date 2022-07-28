import React from 'react';
import { AboutMe } from '../../components/organisms/aboutMe';
import { ExpertiseSection } from '../../components/organisms/expertiseSection'
import { HomePresentation } from '../../components/organisms/homePresentation'
import { PersonalProjects } from '../../components/organisms/personalProjects';
import { ReasonsToWorkSection } from '../../components/organisms/reasonToWorkSection'
import { WorkExperience } from '../../components/organisms/workExperience';
import { WorkTogether } from '../../components/organisms/workTogether';
import { Container } from './style';

export function HomeTemplate(){
  return (
    <Container >
      <HomePresentation/>
      <ReasonsToWorkSection/>
      <ExpertiseSection />
      <WorkExperience />
      <PersonalProjects/>
      <AboutMe />
      <WorkTogether />
    </Container>
  )
}