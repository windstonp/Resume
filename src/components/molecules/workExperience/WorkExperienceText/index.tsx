import { ReactNode } from 'react';
import { Subtitle } from '../../../atoms/Headings/subtitle'
import { Text } from '../../../atoms/Headings/text'
import {TextContent} from './style'

type WorkExperienceTextProps ={
  company: string;
  children: ReactNode;
}

export function WorkExperienceText({ company, children }: WorkExperienceTextProps){
  return(
    <TextContent>
      <Subtitle>
        {company}
      </Subtitle>
      <Text>
        {children}
      </Text>
    </TextContent>
  )
}