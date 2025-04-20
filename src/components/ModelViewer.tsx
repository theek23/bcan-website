import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model({ url }: { readonly url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={[4, 4, 4]} />
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }} style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Model url="/models/bra.glb" />
    </Canvas>
  )
}
