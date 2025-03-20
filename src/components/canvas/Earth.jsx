import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={2}
      position-x={0}
      position-y={0}

    />
  );
}



const EarthCanvas=()=>{
return(

<Canvas
shadows
frameloop='always'
gl={{preserveDrawingBuffer:true}}
camera={{
  fov: 50,
  near:0.1,
  far:200,
  position:[-2,3,6]
}}
>
<Suspense fallback={<CanvasLoader/>}>
<OrbitControls
autoRotate
enableZoom={false}
maxPolarAngle={Math.PI/2}
minPolarAngle={Math.PI/2}

/>
<Earth/>
</Suspense>


</Canvas>
)

}

export default EarthCanvas