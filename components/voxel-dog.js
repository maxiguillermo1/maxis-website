import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  // Add a new state variable to hold the position
  const [modelPosition, setModelPosition] = useState({ x: 0, y: 0, z: 0 });
  
  
  // Updated model URL
  const urlMozartGLB = '/models/voxel_cat.glb';

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        200 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

  // Existing AmbientLight for general illumination
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);  
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 5, 100);  // White color, full intensity, 100 distance
      pointLight.position.set(10, 10, 10);  // Position the light
      scene.add(pointLight);
      // New SpotLight for focused, directional light
      const spotLight = new THREE.SpotLight(0xffffff, 5);  // White color, high intensity
      spotLight.position.set(0, -10, 0);  // Position the light below the object
      spotLight.target.position.set(0, 0, 0);  // Point the light towards the object
      spotLight.angle = Math.PI / 6;  // Narrow the light cone
      spotLight.distance = 50;  // Set a maximum distance for the light
      spotLight.penumbra = 0.2;  // Soften the edge of the light cone
      spotLight.decay = 2;  // Set the attenuation (quadratic by default)
      scene.add(spotLight);
      scene.add(spotLight.target);

      
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      // Updated loadGLTFModel function call
      loadGLTFModel(scene, urlMozartGLB, {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 40
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog;
