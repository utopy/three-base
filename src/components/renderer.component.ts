import { WebGLRenderer } from "three";

const renderer = new WebGLRenderer({
    //antialias: true
})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(innerWidth, innerHeight)

export default renderer