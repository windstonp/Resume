import Link from "next/link";
import { Anchor, Container, Title } from "./style";

export function Socials(){
  return(
    <Container>
      <Title>
        Social
      </Title>
      <div>
        <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} passHref>
          <Anchor target="_blank">
            Linkedin
          </Anchor>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} passHref>
          <Anchor target="_blank">
            Github
          </Anchor>
        </Link>
      </div>
    </Container>
  )
}