import Image, { ImageProps } from "next/image";
import { ImageContainer } from "./style";


export function WorkExperienceImage({ alt, ...rest }: ImageProps){
  return(
    <ImageContainer>
      <Image

        alt={alt}
        objectFit="cover"
        layout='fill'
        {...rest}
      />
    </ImageContainer>
  )
}