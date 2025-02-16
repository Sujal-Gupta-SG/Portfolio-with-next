/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ComputerDesk(props) {
  const { nodes, materials } = useGLTF("/models/ComputerDesk-FBX.glb");

  const modelRef = useRef();

//   useFrame((state) => {
//     if (modelRef.current) {
//       modelRef.current.position.y =
//         -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
//     }
//   });

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      position={[-0.7, -1, 0]}
      scale={[0.025, 0.025, 0.025]}
      rotation={[0.25, -2.5, 0]}
    >
      <group position={[-1.028, 3.596, 45.075]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <group scale={1.048}>
              <group position={[-0.025, 0.213, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.table_1.geometry}
                  material={materials.wood}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.table_2.geometry}
                  material={materials["metal-shiny"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-36.7, 24.296, -76.393]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, -0.262]}>
            <group scale={0.498}>
              <group position={[0, -0.001, -52.349]}>
                <group rotation={[3.142, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.basket.geometry}
                    material={materials["Trash-bin"]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={[-1, 1, 1]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-34.27, 72.73, -28.527]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[0, 0, Math.PI / 2]}>
            <group scale={[2.99, 2.99, 3.107]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_1.geometry}
                material={materials["plastic-white"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_2.geometry}
                material={materials["plastic-black-shiny"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_3.geometry}
                material={materials["glass-clear"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_4.geometry}
                material={materials["plastic-white-rough"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_5.geometry}
                material={materials["computer-screen"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_6.geometry}
                material={materials["plastic-white-rough"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_7.geometry}
                material={materials["plastic-white"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_8.geometry}
                material={materials["plastic-black-shiny"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_9.geometry}
                material={materials.screen}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_10.geometry}
                material={materials["plastic-rough-2"]}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[30.713, 58.147, 15.766]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, -1.222, 0]}>
            <group rotation={[-Math.PI, 0, 0]} scale={[-1.248, 0.996, 1.036]}>
              <group position={[0.562, -3.521, 4.333]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Chair_1.geometry}
                  material={materials["chair-fabric"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Chair_2.geometry}
                  material={materials["chair-back"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Chair_3.geometry}
                  material={materials["plastic-shiny"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Chair_4.geometry}
                  material={materials["plastic-rough"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Chair_5.geometry}
                  material={materials["metal-shiny"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Chair_6.geometry}
                  material={materials["plastic-gray"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/ComputerDesk-FBX.glb");
