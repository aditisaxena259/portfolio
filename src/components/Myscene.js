import * as THREE from 'three';

function MyScene() {
  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000); // Black background
  document.body.appendChild(renderer.domElement);

  // Roads
  const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 }); // Dark gray roads
  const roadGeometry = new THREE.PlaneGeometry(4, 200);

  const roadX = new THREE.Mesh(roadGeometry, roadMaterial); // Horizontal road
  roadX.rotation.x = -Math.PI / 2;
  roadX.position.set(0, 0.01, 0);
  scene.add(roadX);

  const roadZ = new THREE.Mesh(roadGeometry, roadMaterial); // Vertical road
  roadZ.rotation.x = -Math.PI / 2;
  roadZ.rotation.z = Math.PI / 2;
  roadZ.position.set(0, 0.01, 0);
  scene.add(roadZ);

  // Roundabout
  const roundaboutGeometry = new THREE.CircleGeometry(6, 32);
  const roundaboutMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 }); // Slightly lighter gray
  const roundabout = new THREE.Mesh(roundaboutGeometry, roundaboutMaterial);
  roundabout.rotation.x = -Math.PI / 2;
  roundabout.position.set(0, 0.02, 0);
  scene.add(roundabout);

  // Popup Introduction
  let popupDisplayed = false;
  const showPopup = () => {
    if (!popupDisplayed) {
      alert("Hi, I'm Aditi Saxena, a passionate developer and founder of SentinelGuard AI! 🚗✨");
      popupDisplayed = true;
    }
  };

  // Traffic Lights
  function addTrafficLight(x, z) {
    const poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 5, 16);
    const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 }); // Gray pole
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.set(x, 2.5, z);

    const lightGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const redLight = new THREE.Mesh(lightGeometry, new THREE.MeshStandardMaterial({ color: 0xff0000 })); // Red light
    const yellowLight = new THREE.Mesh(lightGeometry, new THREE.MeshStandardMaterial({ color: 0xffff00 })); // Yellow light
    const greenLight = new THREE.Mesh(lightGeometry, new THREE.MeshStandardMaterial({ color: 0x00ff00 })); // Green light

    redLight.position.set(x, 4.5, z);
    yellowLight.position.set(x, 4, z);
    greenLight.position.set(x, 3.5, z);

    scene.add(pole);
    scene.add(redLight);
    scene.add(yellowLight);
    scene.add(greenLight);
  }

  addTrafficLight(6, 6);
  addTrafficLight(-6, 6);
  addTrafficLight(6, -6);
  addTrafficLight(-6, -6);

  // Car
  const carBodyGeometry = new THREE.BoxGeometry(3, 1, 6);
  const carBodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff4500 }); // Orange car
  const carBody = new THREE.Mesh(carBodyGeometry, carBodyMaterial);
  carBody.position.set(0, 0.75, 20);

  const carWheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
  const carWheelMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black wheels
  const wheels = [];
  for (let i = 0; i < 4; i++) {
    const wheel = new THREE.Mesh(carWheelGeometry, carWheelMaterial);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(
      (i % 2 === 0 ? -1 : 1) * 1.5,
      0.25,
      (i < 2 ? -1 : 1) * 2
    );
    wheels.push(wheel);
    carBody.add(wheel);
  }
  scene.add(carBody);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1, 100);
  pointLight.position.set(10, 20, 10);
  scene.add(pointLight);

  // Camera Position
  camera.position.set(0, 15, 40);

  // Movement Variables
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  const carSpeed = 0.2;
  const carRotationSpeed = 0.03;

  // Event Listeners for Keyboard Controls
  document.addEventListener('keydown', (event) => {
    if (event.key === 'w') moveForward = true;
    if (event.key === 's') moveBackward = true;
    if (event.key === 'a') moveLeft = true;
    if (event.key === 'd') moveRight = true;
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'w') moveForward = false;
    if (event.key === 's') moveBackward = false;
    if (event.key === 'a') moveLeft = false;
    if (event.key === 'd') moveRight = false;
  });

  // Animation Loop
  function animate() {
    // Car Movement
    if (moveForward) {
      carBody.position.z -= Math.cos(carBody.rotation.y) * carSpeed;
      carBody.position.x -= Math.sin(carBody.rotation.y) * carSpeed;
    }
    if (moveBackward) {
      carBody.position.z += Math.cos(carBody.rotation.y) * carSpeed;
      carBody.position.x += Math.sin(carBody.rotation.y) * carSpeed;
    }
    if (moveLeft) {
      carBody.rotation.y += carRotationSpeed;
    }
    if (moveRight) {
      carBody.rotation.y -= carRotationSpeed;
    }

    // Camera follows the car
    camera.position.set(
      carBody.position.x + 10 * Math.sin(carBody.rotation.y),
      8,
      carBody.position.z + 10 * Math.cos(carBody.rotation.y)
    );
    camera.lookAt(carBody.position);

    // Check if the car is near the roundabout
    const distanceToRoundabout = Math.sqrt(carBody.position.x ** 2 + carBody.position.z ** 2);
    if (distanceToRoundabout < 8) {
      showPopup();
    }

    // Render Scene
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
}

export default MyScene;
