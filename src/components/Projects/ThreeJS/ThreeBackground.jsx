import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bounds  } from '@react-three/drei'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <Canvas orthographic dpr={[1, 2]} camera={{ position: [0, 0, 10], zoom: 200 }}>
    <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
      <Bounds fit clip observe margin={1.25}>
        <Box/>
      </Bounds>
      <gridHelper args={[10, 40, '#101010', '#050505']} position={[-0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
    </group>
  </Canvas>
  )
}
