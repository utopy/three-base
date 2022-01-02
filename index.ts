import { BoxBufferGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Raycaster, Scene, SphereBufferGeometry, WebGLRenderer } from "three";
import camera from "./src/components/camera.component";
import renderer from "./src/components/renderer.component";
import TileEntity from "./src/entities/tile.entity";

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import raycaster from "./src/components/raycaster.component";
import Entity, { GameEntities } from "./src/entities/entity";
import { getNoise } from "./src/components/noise.component";
const controls = new OrbitControls(camera, renderer.domElement)

class Sketch {
    camera: PerspectiveCamera; 
    renderer: WebGLRenderer;
    scene: Scene;
    controls: OrbitControls;
    raycaster: Raycaster;
    mouse: {
        x:number,
        y:number
    }
    options:SketchOptions
    


    //TO DELETE


    constructor(options:SketchOptions){
        this.camera = camera;
        this.renderer = renderer;
        this.scene = new Scene();
        this.controls = new OrbitControls(this.camera, renderer.domElement)
        this.controls.update()
        this.raycaster = raycaster

        this.mouse = {
            x: 0, y: 0
        }
        
        this.options = options
        this.renderScene(this.scene);
        this.registerEvents();

        

        this.options.target.appendChild(this.renderer.domElement);


        
        this.animationLoop(0);
    }




    animationLoop = (time: number) => {
        if(this.options.raycaster){
            this.controls.update()
            raycaster.setFromCamera(this.mouse, this.camera);
        }


        this.renderScene(this.scene);
        requestAnimationFrame(this.animationLoop);
    }

    renderScene(scene:Scene){
        this.renderer.render(scene, this.camera);
    }

    registerEvents(){
        if(this.options.listener.mouseMovement) this.options.target.addEventListener("mousemove", this.onMouseMove)
    }

    onMouseMove = (event:MouseEvent) => {
        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	    this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

}

new Sketch({
    raycaster: false,
    listener:{
        mouseMovement: false
    },
    target: document.body
})