import React from 'react';
import { ExpertiseSection } from '../../components/organisms/expertiseSection'
import { HomePresentation } from '../../components/organisms/homePresentation'
import { ReasonsToWorkSection } from '../../components/organisms/reasonToWorkSection'
import { WorkExperience } from '../../components/organisms/workExperience';
import { Container } from './style';

export function HomeTemplate(){
  return (
    <Container >
      <HomePresentation/>
      <ReasonsToWorkSection/>
      <ExpertiseSection />
      <WorkExperience />
    </Container>
  )
}