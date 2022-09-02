
import { useFBX } from '@react-three/drei'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

type ModelProps = {
  url: string
}

export function Model({url}: ModelProps) {
  const model = useFBX(url);
  const ref = useRef<Group>(null);
  useFrame((state, delta) => {
    if(ref.current){
      ref.current.rotation.y += Math.PI  / 500
    }
  });
  return (
    <group ref={ref} dispose={null}>
      <mesh {...model.children[0]}>
        <meshStandardMaterial color={"#424242"}/>
      </mesh>
    </group>
  )
}


