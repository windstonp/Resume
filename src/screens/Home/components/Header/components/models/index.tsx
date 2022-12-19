
import { useRef, memo } from 'react';
import { invalidate, useFrame } from '@react-three/fiber'
import { useFBX } from '@react-three/drei';
import { Group } from 'three';

type ModelProps = {
  url: string
}

function Model({url}: ModelProps) {
  const model = useFBX(url);
  const ref = useRef<Group>(null);
  useFrame(() => {
    if(ref.current){
      ref.current.rotation.y += 0.01;
      invalidate();
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

useFBX.preload("michelangelo.fbx")
export default memo(Model)