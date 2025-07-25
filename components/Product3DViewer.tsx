"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import React, { Suspense } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function Product3DViewer({
  modelUrl = "/models/box.glb",
  specs = [
    { label: "Material", value: "Premium Corrugated Cardboard" },
    { label: "Wall Type", value: "Triple Wall (15mm thickness)" },
    { label: "Weight Capacity", value: "Up to 50kg" },
    { label: "Color", value: "Natural Brown" },
    { label: "Lead Time", value: "2-3 business days" },
    { label: "Warranty", value: "Quality guarantee" },
  ],
  useCases = [
    { src: "/images/realistic-conveyor.png", alt: "Use case 1" },
    { src: "/images/conveyor-belt.png", alt: "Use case 2" },
  ],
  onRequestQuote = () => alert("Request Quote clicked!"),
  onOrderSample = () => alert("Order Sample clicked!"),
}: {
  modelUrl?: string;
  specs?: { label: string; value: string }[];
  useCases?: { src: string; alt: string }[];
  onRequestQuote?: () => void;
  onOrderSample?: () => void;
}) {
  return (
    <div>
      {/* 3D Model Viewer */}
      <div style={{ width: "100%", height: 400, background: "#f5f5f5", borderRadius: 16, overflow: "hidden" }}>
        <Canvas camera={{ position: [2, 2, 2], fov: 45 }} shadows>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <Suspense fallback={<Html center>Loading 3D Model...</Html>}>
            <Model url={modelUrl} />
          </Suspense>
          <OrbitControls enablePan enableZoom enableRotate />
        </Canvas>
      </div>
      {/* Material Specs & Use-case Visuals */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Material Specs */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Material Specs</h2>
          <ul className="text-steel text-lg space-y-2">
            {specs.map((spec, i) => (
              <li key={i}><b>{spec.label}:</b> {spec.value}</li>
            ))}
          </ul>
        </div>
        {/* Use-case Visuals */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Use-case Visuals</h2>
          <div className="flex gap-4 overflow-x-auto">
            {useCases.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className="w-40 h-32 object-cover rounded-xl border" />
            ))}
          </div>
        </div>
      </div>
      {/* CTA Buttons */}
      <div className="flex gap-4 mt-8">
        <button onClick={onRequestQuote} className="bg-deepgreen text-offwhite px-8 py-4 rounded-xl font-bold text-lg shadow hover:bg-kraft hover:text-deepgreen transition-all">Request Quote</button>
        <button onClick={onOrderSample} className="bg-kraft text-deepgreen px-8 py-4 rounded-xl font-bold text-lg shadow hover:bg-deepgreen hover:text-offwhite transition-all">Order Sample</button>
      </div>
    </div>
  );
}

// Required for GLTF loading
// @ts-ignore
useGLTF.preload && useGLTF.preload("/models/box.glb"); 