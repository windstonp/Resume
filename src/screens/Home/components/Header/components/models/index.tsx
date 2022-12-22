import { useRef, memo } from 'react';
import { invalidate, useFrame } from '@react-three/fiber';
import { useFBX } from '@react-three/drei';
import { Group } from 'three';

function Model() {
  const model = useFBX('michelangelo.fbx');
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      invalidate();
    }
  });
  return (
    <group ref={ref}>
      <mesh {...model.children[0]}>
        <meshStandardMaterial color="#424242" />
      </mesh>
    </group>
  );
}

export default memo(Model);
