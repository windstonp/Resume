import { getSeconds } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { InputControlled } from "../../components/atoms/form/input";
import { SelectControlled } from "../../components/atoms/form/select";
import { Button } from "../../components/atoms/Headings/button";
import { Subtitle } from "../../components/atoms/Headings/subtitle";
import { Text } from "../../components/atoms/Headings/text";
import { Title } from "../../components/atoms/Headings/title";
import { BudgetOptions, ServiceOptions } from "../../constants/ContactConstants";
import S from "./style";

export function ContactTemplate(){
  const { control, register, handleSubmit} = useForm({});

  function SubmitedContactForm(form: any){
    
  }
  return(
    <>
      <S.Container>
        <S.ContactInfoContainer>
          <Subtitle>
            Contact
          </Subtitle>
          <Title>
            let’s work together.
          </Title>
          <Subtitle>
            Get in touch by:
          </Subtitle>
          <S.ContactInfoGroup>
            <Text>
              By filling the contact form.
            </Text>
            <Text>
              By E-mail: 
              ‎ ‎
              <Link href="mailto:contact@alvez.dev" passHref>
                <S.ContactInfoLink>
                  contact@alvez.dev
                </S.ContactInfoLink>
              </Link>
            </Text>
            <Text>
              By ‎ ‎ 
              <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} passHref>
                <S.ContactInfoLink target="_blank">
                  Linkedin
                </S.ContactInfoLink>
              </Link>
            </Text>
            <Text>
              By‎ ‎ 
              <Link href="https://www.instagram.com/j.alvezs/" passHref>
                <S.ContactInfoLink target="_blank">
                  Instagram
                </S.ContactInfoLink>
              </Link>
            </Text>
          </S.ContactInfoGroup>
          <S.ContactInfoGroup>
            <Text>
              I’m based in Tubarão, Brazil (BRT)
            </Text>
            <Link href="https://www.zeitverschiebung.net/en/city/3445993" passHref about="see local time details">
              <S.ContactInfoLink>
                The time now is {
                  formatInTimeZone(new Date, 'America/Sao_Paulo', 'h:mm aa O', {
                    locale: ptBR,
                  })
                }
              </S.ContactInfoLink>
            </Link>
          </S.ContactInfoGroup>
          <S.ContactInfoGroup>
            <Text>
              want to check out my github?
            </Text>
            <Link href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`} passHref about="go to github!">
              <S.ContactInfoLink target="_blank">
                Click Here!
              </S.ContactInfoLink>
            </Link>
          </S.ContactInfoGroup>
        </S.ContactInfoContainer>
        <S.ContactForm onSubmit={handleSubmit(SubmitedContactForm)}>
          <Text>
            Got an exciting idea? Let me know it, if you want to work together on something.
          </Text>
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
    </>
  )
}