import { useEffect, useState } from "react";
import { View, Text} from "react-native";
import { IAreas, IData, IGropus } from "../state/gropus";



export default function TopGroup(props) {

 

    const [data,setData]=useState<IData>()
    const [areas,setAreas]=useState<Array<IAreas>>([])
    
    const [name,setName]=useState("vgfg")

    useEffect(()=>{
      axios
  .get("https://finalspaceapi.com/api/v0/character/?limit=2")
  .then(function (response:IData) {
   
    setData(response)
  });
    },[])


    return (
      <View >
        <Text>{name}</Text>
        <button onClick={()=>setName("tttt")}>change</button>
        {data.gropus.map((group) => {
          return (
            <View>
              <Text>{group.id}</Text>
              <Text>{group.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
  