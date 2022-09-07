import Link from "next/link";
import S from "./style";

import { Base } from "../../layouts/base";
import { BudgetOptions, ServiceOptions } from "../../constants/ContactConstants";

import { formatInTimeZone } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { useForm } from "react-hook-form";

import { InputControlled } from "../../components/Form/Input";
import { SelectControlled } from "../../components/Form/Select";
import { Button } from "../../components/Button";
import { Stack } from "../../components/Stack";
import { MutedText } from "../../components/MutedText";
import { Heading1, Heading3 } from "../../components/Headings";



export function ContactTemplate(){
  const { control, register, handleSubmit} = useForm({});

  const localTime = formatInTimeZone(new Date, 'America/Sao_Paulo', 'h:mm aa O', {
    locale: ptBR,
  });

  function SubmitedContactForm(form: any){
    
  }
  return(
    <Base>
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
    </Base>
  )
}