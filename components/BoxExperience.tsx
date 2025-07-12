import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { Float, OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useGesture } from '@use-gesture/react'

const NAV_LINKS = [
  { icon: '📦', label: 'Custom Boxes', href: '/packaging-products?category=corrugated' },
  { icon: '🐀', label: 'Shrink Wrapping', href: '/services' },
  { icon: '🠀', label: 'Kitting Services', href: '/services' },
  { icon: '🏭', label: 'Industries We Serve', href: '/about' },
  { icon: '📞', label: 'Get a Quote', href: '/contact' },
  { icon: '➕', label: 'More', href: '#' },
]

// Cache textures globally and dispose on unmount
const iconTextureCache: Record<string, THREE.CanvasTexture> = {}
const labelTextureCache: Record<string, THREE.CanvasTexture> = {}
function getIconTexture(icon: string) {
  if (!iconTextureCache[icon]) {
    const canvas = document.createElement('canvas')
    canvas.width = 96
    canvas.height = 96
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = 'rgba(255,255,255,0.98)'
    ctx.beginPath()
    ctx.arc(48, 48, 44, 0, 2 * Math.PI)
    ctx.fill()
    ctx.font = '48px Segoe UI Emoji, Arial, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#234236'
    ctx.fillText(icon, 48, 52)
    iconTextureCache[icon] = new THREE.CanvasTexture(canvas)
  }
  return iconTextureCache[icon]
}
function getLabelTexture(label: string) {
  if (!labelTextureCache[label]) {
    const canvas = document.createElement('canvas')
    canvas.width = 180
    canvas.height = 40
    const ctx = canvas.getContext('2d')!
    ctx.font = 'bold 18px Poppins, Arial, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, 180, 40)
    ctx.fillStyle = '#234236'
    ctx.fillText(label, 90, 20)
    labelTextureCache[label] = new THREE.CanvasTexture(canvas)
  }
  return labelTextureCache[label]
}
function disposeAllTextures() {
  Object.values(iconTextureCache).forEach(tex => tex.dispose())
  Object.values(labelTextureCache).forEach(tex => tex.dispose())
}

type IconButtonProps = {
  icon: string
  label: string
  href: string
  index: number
  show: boolean
  showLabel: boolean
}

function IconButton3D({ icon, label, href, index, show, showLabel }: IconButtonProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const labelRef = useRef<THREE.Mesh>(null)
  const iconTexture = getIconTexture(icon)
  const labelTexture = getLabelTexture(label)
  // Distribute icons in an arc (from -60deg to +60deg)
  const total = NAV_LINKS.length
  const angle = ((index / (total - 1)) * 120 - 60) * (Math.PI / 180) // -60deg to +60deg
  useFrame(() => {
    if (meshRef.current) {
      const targetRadius = show ? 1.6 + index * 0.1 : 0.5
      const targetY = show ? 1.3 + Math.sin(angle) * targetRadius : 0.5
      const targetX = show ? Math.cos(angle) * targetRadius : 0
      const targetScale = show ? 1 : 0.7
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.13
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.13
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.13
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.13
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.13
    }
    if (labelRef.current) {
      const targetOpacity = showLabel ? 1 : 0
      const mat = labelRef.current.material as THREE.MeshBasicMaterial
      mat.opacity += (targetOpacity - mat.opacity) * 0.15
    }
  })
  return (
    <group>
      <mesh
        ref={meshRef}
        position={[0, 0.5, 0]}
        onClick={() => window.location.href = href}
        castShadow
        receiveShadow
      >
        <circleGeometry args={[0.32, 16]} />
        <meshStandardMaterial map={iconTexture} transparent />
        {/* Soft shadow */}
        <mesh position={[0, -0.13, -0.01]}>
          <circleGeometry args={[0.3, 8]} />
          <meshBasicMaterial color="#000" opacity={0.13} transparent />
        </mesh>
      </mesh>
      {/* Label appears above icon */}
      <mesh
        ref={labelRef}
        position={[0, 0.32, 0]}
        visible={true}
      >
        <planeGeometry args={[1.1, 0.25]} />
        <meshBasicMaterial map={labelTexture} transparent opacity={0} />
      </mesh>
    </group>
  )
}

type ParticleProps = {
  angle: number
  distance: number
  color: string
  show: boolean
}

function ConfettiParticle({ angle, distance, color, show }: ParticleProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (meshRef.current) {
      const t = show ? 1 : 0
      const rad = angle * (Math.PI / 180)
      const targetX = t * Math.cos(rad) * distance
      const targetY = t * Math.sin(rad) * distance + 1.5
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.18
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.18
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = show ? 1 : 0.5
      meshRef.current.material.opacity = show ? 0.8 : 0
    }
  })
  return (
    <mesh ref={meshRef} position={[0, 1.5, 0]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0} />
    </mesh>
  )
}

type BoxProps = {
  open: boolean
  logoPath: string
  showLinks: boolean
  shiver: boolean
  showConfetti: boolean
  showLabels: boolean
}

function Box({ open, logoPath, showLinks, shiver, showConfetti, showLabels }: BoxProps) {
  const lidRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const logoTexture = useTexture(logoPath)
  const frontLogoTexture = useTexture('/logo.jpg')
  useFrame(() => {
    if (groupRef.current) {
      if (shiver) {
        groupRef.current.rotation.z = (Math.random() - 0.5) * 0.18
        groupRef.current.position.x = (Math.random() - 0.5) * 0.08
      } else {
        groupRef.current.rotation.z += (0 - groupRef.current.rotation.z) * 0.15
        groupRef.current.position.x += (0 - groupRef.current.position.x) * 0.15
      }
    }
    if (lidRef.current) {
      lidRef.current.rotation.x += ((open ? -Math.PI / 2.2 : 0) - lidRef.current.rotation.x) * 0.08
    }
  })
  // Confetti burst (reduced to 10 particles)
  const confettiColors = ['#FBBF24', '#34D399', '#60A5FA', '#F472B6', '#F87171', '#A78BFA']
  const confettiParticles = Array.from({ length: 10 }, (_, i) => ({
    angle: (i * 360) / 10 + (i % 2 === 0 ? 10 : -10),
    distance: 1.5 + Math.random() * 0.5,
    color: confettiColors[i % confettiColors.length],
  }))
  return (
    <group ref={groupRef}>
      {/* Box base */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#B89B72" />
      </mesh>
      {/* Logo on front face */}
      {frontLogoTexture && (
        <mesh position={[0, 0, 1.52]} rotation={[0, 0, 0]}>
          <planeGeometry args={[1.5, 1.5]} />
          <meshBasicMaterial map={frontLogoTexture} transparent />
        </mesh>
      )}
      {/* Box lid */}
      <mesh ref={lidRef} position={[0, 1.01, -1.5]} castShadow>
        <boxGeometry args={[3, 0.2, 3]} />
        <meshStandardMaterial color="#B89B72" />
        {/* Logo on lid */}
        {logoTexture && (
          <mesh position={[0, 0.11, 1.1]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.5, 1.5]} />
            <meshBasicMaterial map={logoTexture} transparent />
          </mesh>
        )}
      </mesh>
      {/* Box edges for realism */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.02, 2.02, 3.02]} />
        <meshStandardMaterial color="#5A5A5A" wireframe opacity={0.2} transparent />
      </mesh>
      {/* Confetti burst */}
      {showConfetti && confettiParticles.map((p, i) => (
        <ConfettiParticle key={i} {...p} show={showConfetti} />
      ))}
      {/* 3D Icon Buttons pop up from inside the box */}
      {NAV_LINKS.map((link, i) => (
        <IconButton3D key={link.label} {...link} index={i} show={showLinks} showLabel={showLabels} />
      ))}
    </group>
  )
}

export default function BoxExperience() {
  const [shiver, setShiver] = useState(false)
  const [open, setOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showLinks, setShowLinks] = useState(false)
  const [showLabels, setShowLabels] = useState(false)
  const [contextLost, setContextLost] = useState(false)
  const containerRef = useRef(null)

  // Add swipe gesture for mobile
  useGesture(
    {
      onDrag: ({ direction, down, event }) => {
        if (down) return;
        if (Math.abs(direction[1]) > Math.abs(direction[0])) {
          if (direction[1] < 0) {
            if (!open) setOpen(true);
          }
        }
      },
    },
    {
      target: containerRef,
      eventOptions: { passive: false },
      drag: { axis: 'y', filterTaps: true },
    }
  )

  useEffect(() => {
    setShiver(true)
    setOpen(false)
    setShowConfetti(false)
    setShowLinks(false)
    setShowLabels(false)
    setContextLost(false)
    const t1 = setTimeout(() => setShiver(false), 900)
    const t2 = setTimeout(() => setShowConfetti(true), 1100)
    const t3 = setTimeout(() => setShowLinks(true), 1400)
    // Open the box only after popout icons are visible
    const t4 = setTimeout(() => setOpen(true), 2000)
    const t5 = setTimeout(() => setShowLabels(true), 2300)
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5)
      disposeAllTextures()
    }
  }, [])
  return (
    <div ref={containerRef} className="relative w-full h-full max-w-3xl mx-auto touch-pan-y" style={{maxHeight: '90vh'}}>
      {contextLost && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="text-white text-2xl font-bold p-8 rounded-xl bg-black/80 border-2 border-kraft">WebGL context lost. Please reload the page.</div>
        </div>
      )}
      <Canvas camera={{ position: [0, 3, 7], fov: 40 }} shadows
        style={{ width: '100%', height: '100%', maxHeight: '90vh', maxWidth: '100vw', aspectRatio: '1.5/1' }}
        onCreated={({ gl }) => {
          gl.getContext().canvas.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            setContextLost(true)
          });
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
        <Float floatIntensity={0.2} speed={1.2}>
          <Box open={open} logoPath="/logo.jpg" showLinks={showLinks} shiver={shiver} showConfetti={showConfetti} showLabels={showLabels} />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 2.5} />
      </Canvas>
    </div>
  )
} 