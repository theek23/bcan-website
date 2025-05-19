import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useState, useEffect } from 'react'
import * as THREE from 'three'

function Model({ url }: { readonly url: string }) {
  const { scene } = useGLTF(url)
  
  useEffect(() => {
    // Apply initial rotation to show the front of the bra
    if (scene) {
      // Create a rotation matrix
      const rotationMatrix = new THREE.Matrix4().makeRotationY(Math.PI / 2);
      
      // Apply rotation to the scene
      scene.applyMatrix4(rotationMatrix);
    }
  }, [scene]);
  
  return <primitive object={scene} scale={[4, 4, 4]} />
}

export default function ModelViewer() {
  // Add auto-rotation state
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <div style={{ height: '500px', width: '100%', position: 'relative' }}>
      <Canvas 
        camera={{ 
          position: [0, 0, 5], // Adjusted camera position to view front
          fov: 45 
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <spotLight position={[0, 0, 5]} intensity={0.8} castShadow />
        
        {/* Modified OrbitControls with constraints and auto-rotation */}
        <OrbitControls 
          enableZoom={true}
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          enablePan={false}
          // Set initial target point for the camera to look at
          target={[0, 0, 0]}
        />
        
        <Model url="/models/bra.glb" />
      </Canvas>
      
      {/* Add controls to toggle auto-rotation */}
      <div style={{ 
        position: 'absolute', 
        bottom: '10px', 
        left: '10px', 
        padding: '8px 12px',
        background: 'rgba(255,255,255,0.7)', 
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onClick={() => setAutoRotate(!autoRotate)}>
        {autoRotate ? 'Stop Rotation' : 'Start Rotation'}
      </div>
    </div>
  )
}