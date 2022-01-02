import FastNoise from 'fastnoise-lite'


const noise = new FastNoise()
noise.SetNoiseType(FastNoise.NoiseType.OpenSimplex2);
noise.SetFrequency(0.1)
noise.SetSeed(Math.round(Math.random()*100))

export function getNoise(x:number, y:number, z?:number):number{
    return noise.GetNoise(x, y, z || null)
}