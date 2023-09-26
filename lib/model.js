import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true },
  positionConfig = { x: 1, y: 2.2, z: 2 }  // New parameter for position adjustments
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'dog';

        // Compute the bounding box
        let boundingBox = new THREE.Box3().setFromObject(obj);
        let center = boundingBox.getCenter(new THREE.Vector3());

        // Translate object to origin based on bounding box
        obj.position.sub(center);

        // Apply position adjustments
        obj.position.x += positionConfig.x;
        obj.position.y += positionConfig.y;
        obj.position.z += positionConfig.z;

        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
