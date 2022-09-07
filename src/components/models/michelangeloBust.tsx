
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber'
import { Group, TextureLoader } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

type ModelProps = {
  url: string
}

export function Model({url}: ModelProps) {
  const model = useLoader(FBXLoader, url);
  const ref = useRef<Group>(null);
  useFrame((state, delta) => {
    if(ref.current){
      ref.current.rotation.y += 0.01;
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


