
export interface IData{
    gropus:Array<IGropus>
    areas:Array<IAreas>
    networks:Array<INetwroks>
}

export interface IGropus
{
    id:number
    name?:string
    color:string
    text_color:string
    HasAreas:boolean
    sort:number
}

export interface IAreas{
    id:number
    name:string
    top_group_id:number
    top_group_name:string
}

export interface INetwroks{
    id:number
    code:string
    name:string
    top_group_name:string
    group_name:string
    area_name:string
    group_color:string
    group_text_color:string
    type_name:string
    area_id:number
    top_group_id:number
    sort:number


}