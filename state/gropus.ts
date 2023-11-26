
export interface IData{
    gropus:Array<IGropus>
    areas:Array<IAreas>
    networks:Array<INetwroks>
}

export interface IGropus
{
    id:number
    name?:string
}

export interface IAreas{
    id:number;
    name:string
    top_grid:boolean
}

export interface INetwroks{

}