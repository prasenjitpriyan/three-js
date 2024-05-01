import * as THREE from "./three.module.js";
// Scene Mesh(Object) Camera Renderer

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1;
//scene.add(mesh);

// Mesh Two
const geometryTwo = new THREE.BoxGeometry(1, 1, 1);
const materialTwo = new THREE.MeshBasicMaterial({ color: "red" });
const meshTwo = new THREE.Mesh(geometryTwo, materialTwo);
meshTwo.position.y = 2;
//scene.add(meshTwo)

group.add(mesh, meshTwo);
group.position.x = 3;
scene.add(group);

// AxesHelper
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 5;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
