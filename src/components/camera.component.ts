import { PerspectiveCamera } from "three";


const camera = new PerspectiveCamera(
    75, innerWidth / innerHeight, 0.1, 1000
)

camera.position.z = 10
camera.position.x = 0
camera.position.y = 5

export default camera


