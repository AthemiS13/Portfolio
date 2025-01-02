let scene, camera, renderer, controls;

function init() {
  const container = document.querySelector('.model-wrapper');
  const canvas = document.getElementById('three-canvas');
  const loadingSpinner = document.getElementById('loading-spinner');
  const modelOverlay = document.getElementById('model-overlay');

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // Camera
  camera = new THREE.PerspectiveCamera(
    70,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(0, 5, 10);
  scene.add(directionalLight);

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);

  // Load model
  const loader = new THREE.GLTFLoader();
  loader.load(
    'models/neogrip.glb',
    (gltf) => {
      // Center geometry
      gltf.scene.traverse((child) => {
        if (child.isMesh) child.geometry.center();
      });
      scene.add(gltf.scene);

      // Set final camera position
      camera.position.set(100, 25, 40);

      // Hide loading spinner and show overlay
      loadingSpinner.style.display = 'none';
      modelOverlay.classList.add('visible');
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
      // Hide loading spinner on error
      loadingSpinner.style.display = 'none';
    }
  );

  // Orbit controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false; // Disable zoom
  controls.enablePan = false; // Disable pan
  controls.addEventListener('start', hideOverlay);
}

function hideOverlay() {
  document.getElementById('model-overlay').classList.add('hidden');
  controls.removeEventListener('start', hideOverlay);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  const container = document.querySelector('.model-wrapper');
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

init();
animate();