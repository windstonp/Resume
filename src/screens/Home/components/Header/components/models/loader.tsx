import { Html, useProgress } from '@react-three/drei'
import { Heading1 } from 'components/Headings'

export function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <Heading1>
      {progress} % loaded
    </Heading1>
  </Html>
}