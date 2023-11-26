import { useState } from "react";
import { View, Text} from "react-native";
import { IGropus } from "../state/gropus";



export default function TopGroup() {

    const [groups,setGroups]=useState<Array<IGropus>>([{id:2,name:"fdfdf"}])
    const [name,setName]=useState("vgfg")


    return (
      <View >
        <Text>{name}</Text>
        <button onClick={()=>setName("tttt")}>change</button>
        {groups.map((group) => {
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
  