import Link from "next/link";
import S, { SvgShape } from "./style";

import { Base } from "layouts/base";
import { BudgetOptions, ServiceOptions } from "constants/ContactConstants";

import { formatInTimeZone } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { useForm } from "react-hook-form";

import { InputControlled } from "components/Form/Input";
import { SelectControlled } from "components/Form/Select";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { MutedText } from "components/MutedText";
import { Heading1, Heading3 } from "components/Headings";



export function ContactTemplate(){
  const { control, register, handleSubmit} = useForm({});

  const localTime = formatInTimeZone(new Date, 'America/Sao_Paulo', 'h:mm aa O', {
    locale: ptBR,
  });

  function SubmitedContactForm(form: any){
    
  }
  return(
    <Base>
      <SvgShape>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </SvgShape>
      <Stack spacing="5rem">
        <S.Container>
          <S.ContactInfoContainer>
            <Heading3>
              Contact
            </Heading3>
            <Heading1>
              let’s work together.
            </Heading1>
            <Heading3>
              Get in touch by:
            </Heading3>
            <S.ContactInfoGroup>
              <MutedText>
                By filling the contact form.
              </MutedText>
              <MutedText>
                By E-mail: 
                ‎ ‎
                <Link href="mailto:contact@alvez.dev" passHref>
                  <S.ContactInfoLink>
                    contact@alvez.dev
                  </S.ContactInfoLink>
                </Link>
              </MutedText>
              <MutedText>
                By ‎ ‎ 
                <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} passHref>
                  <S.ContactInfoLink target="_blank">
                    Linkedin
                  </S.ContactInfoLink>
                </Link>
              </MutedText>
              <MutedText>
                By‎ ‎ 
                <Link href="https://www.instagram.com/j.alvezs/" passHref>
                  <S.ContactInfoLink target="_blank">
                    Instagram
                  </S.ContactInfoLink>
                </Link>
              </MutedText>
            </S.ContactInfoGroup>
            <S.ContactInfoGroup>
              <MutedText>
                I’m based in Tubarão, Brazil (BRT)
              </MutedText>
              <Link href="https://www.zeitverschiebung.net/en/city/3445993" passHref about="see local time details">
                <S.ContactInfoLink>
                  The time now is {localTime}
                </S.ContactInfoLink>
              </Link>
            </S.ContactInfoGroup>
            <S.ContactInfoGroup>
              <MutedText>
                want to check out my github?
              </MutedText>
              <Link href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`} passHref about="go to github!">
                <S.ContactInfoLink target="_blank">
                  Click Here!
                </S.ContactInfoLink>
              </Link>
            </S.ContactInfoGroup>
          </S.ContactInfoContainer>
          <S.ContactForm onSubmit={handleSubmit(SubmitedContactForm)}>
            <MutedText>
              Got an exciting idea? Let me know it, if you want to work together on something.
            </MutedText>
            <S.GroupInput>
              <InputControlled 
                control={control}
                label="Your Name"
                placeholder="What's your name?"
                name="name"
                type="text"
              />
              <InputControlled
                control={control}
                label="Your Email"
                placeholder="What's your email address?"
                name="email"
                type="email"
              />
            </S.GroupInput>
            <S.GroupInput>
              <SelectControlled
                control={control}
                label="Service"
                name="service"
                placeholder="What are you interested in?"
                options={ServiceOptions}
              />
              <SelectControlled
                control={control}
                label="Budget"
                name="budget"
                placeholder="What's your budget?"
                options={BudgetOptions}
              />
            </S.GroupInput>
            <S.GroupInput>
              <InputControlled
                control={control}
                label="Message"
                placeholder="What's your message?"
                name="message"
                type="text"
              />
            </S.GroupInput>
            <S.ButtonContainer>
              <Button as="button">
                Send Message
              </Button>
            </S.ButtonContainer>
          </S.ContactForm>
        </S.Container>
      </Stack>
      <S.WaveSvg>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </S.WaveSvg>
    </Base>
  )
}