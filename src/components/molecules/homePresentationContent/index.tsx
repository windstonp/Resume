import { Subtitle } from "../../atoms/Headings/subtitle";
import { Text } from "../../atoms/Headings/text";
import { Title } from "../../atoms/Headings/title";
import { Button } from "../../atoms/Headings/button";
import { ButtonContainer, CanvasComponent, Container } from "./style";
import { theme } from "../../../global/styles/theme";
import { Model } from "../../models/michelangeloBust";
import { Suspense } from "react";
import { PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer, SSAO, SMAA } from   "@react-three/postprocessing";

export function HomePresentationContent() {
  return (
    <Container>
      <Subtitle
        color={theme.colors.background[50]}
      >
        João Vitor Assunção Alves
      </Subtitle>
      <Title
        color={theme.colors.background[50]}
      >
        FullStack Website and Mobile Developer
      </Title>
      <Suspense fallback={
        <CanvasComponent>
        </CanvasComponent>
      }>
        <CanvasComponent>
          <Canvas performance={{ min: 0.1, max: 0.1, current: 0.1 }}>
            <PerspectiveCamera makeDefault rotation={[0, 0, 0]} position={[0, 5, 200]}/>
            <spotLight intensity={5} angle={45} position={[250, 250, 250]}  />
            <ContactShadows />
            <Suspense fallback={null}>
              <Model url="michelangelo.fbx" />
            </Suspense>
            <EffectComposer>
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={1}
                height={100}
                opacity={3}
              />
              <SSAO />
              <SMAA />
            </EffectComposer>
          </Canvas>
        </CanvasComponent>
      </Suspense>
      <Text
        color={theme.colors.background[100]}
      >
        Over the past 2 years, I have worked with large companies and startups, helping them to create their innovative websites with unique and innovative features.
      </Text>
      <ButtonContainer>
        <Button as="a" href="/contact">
          Contact me!
        </Button>
      </ButtonContainer>
    </Container>
  )
}