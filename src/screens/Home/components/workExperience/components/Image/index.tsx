import ImageComponent, { ImageProps } from "next/image";
import { ImageContainer } from "./style";


export function Image({ alt, ...rest }: ImageProps){
  return(
    <ImageContainer>
      <ImageComponent

        alt={alt}
        objectFit="cover"
        layout='fill'
        placeholder="blur"
        {...rest}
      />
    </ImageContainer>
  )
}