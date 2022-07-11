import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      {/* <Overlay />  */}
      <Stars />
    </Canvas>
  )
}



function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(50000), { radius: 1 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25
    // ref.current.rotation.y -= delta / 35
  })
  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
