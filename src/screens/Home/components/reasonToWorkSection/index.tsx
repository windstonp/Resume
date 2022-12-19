import { Heading2 } from "components/Headings";
import { Reveal } from "components/Reveal";
import { ReasonContent } from "./components/content";
import { Container, Content } from "./style";

export function ReasonsToWorkSection(){
  const variants = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
  };
  return (
    <>
      <Container>
        <Reveal>
          <Heading2>
            Reasons to work with me
          </Heading2>
        </Reveal>
        <Content
          variants={variants}
        >
          <ReasonContent
            subtitleSection={<span>2+ years of web development <br/> & <br/> mobile development</span>}>
            I've been working as an professional web developer since february 2020 and throughout my journey I've learned
            a lot about the dev ecosystem learning about good practices and agile development.
          </ReasonContent>
          <ReasonContent
            subtitleSection={<span>Curiosity<br/>&<br/>continuous improvement </span>}>
              I always want to learn new things because besides a job, progamming is also my hobby which I love, so every oportunity that I've
              to try a new tool or learn a new framework I would love to do so. because with that experience I expect to discover new ways to solve
              the problems with a better approach
          </ReasonContent>
        </Content>
      </Container>
    </>
  );
}