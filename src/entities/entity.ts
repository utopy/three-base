import { BufferGeometry, Material, Mesh } from "three";

export const GameEntities:Map<string, Entity> = new Map();


const defaultEntityOptions = {
    hidden: false,
    registerEntity: true
}


export default class Entity{
    uuid: string;
    geometry: BufferGeometry;
    material: Material;
    mesh: Mesh;


    entityOptions:EntityOptions


    constructor(geometry:BufferGeometry, material: Material, entityOptions?:EntityOptions){
        this.uuid = crypto.randomUUID();
        this.geometry = geometry;
        this.material = material;
        this.mesh = new Mesh(this.geometry, material);
        this.entityOptions = {...defaultEntityOptions, ...entityOptions}
        
        if(this.entityOptions.registerEntity) GameEntities.set(this.uuid, this);
        console.log("entities", GameEntities.keys.length)
    }

    moveGeometry(x:number, y:number, z:number){
        this.mesh.position.x = x; 
        this.mesh.position.y = y;
        this.mesh.position.z = z;
    }


    deleteEntity(){
        GameEntities.delete(this.uuid);
    }

    getVertices(geometry?:BufferGeometry):number[][]{
        const vertices = (geometry ?? this.geometry.attributes.position.array )as any as number[]
        const newV = []
        for(let i = 0; i < vertices.length; i+=3){
            const vx = vertices[i]
            const vy = vertices[i+1]
            const vz = vertices[i+2]
            newV.push([vx, vy, vz])
        }
        return newV
    }




}