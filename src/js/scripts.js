import * as THREE from 'three';

const RENDERER = new THREE.WebGLRenderer();

RENDERER.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(RENDERER.domElement);