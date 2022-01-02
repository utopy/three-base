import { BoxGeometry, FrontSide, MeshBasicMaterial, Color, PlaneBufferGeometry, BoxBufferGeometry } from "three";
import Entity from "./entity";
import { getNoise } from "../components/noise.component";

export default class TileEntity extends Entity{
    constructor(x:number, y:number, z:number){
        const n = Math.abs(getNoise(x, y, z));
        const geometry = new BoxBufferGeometry(1,1,1);
        const material = new MeshBasicMaterial({
            color: n > 0.2 ? new Color(n, n,n ) : new Color(0,0,0),
            side:FrontSide
        })



        super(geometry, material);
        this.moveGeometry(x, y, z);
    }


}