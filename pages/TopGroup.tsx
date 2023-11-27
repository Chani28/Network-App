import { useEffect, useState } from "react";
import { View, Text} from "react-native";
import { IAreas, IData, IGropus, INetwroks } from "../state/gropus";
import axios from 'axios';




export default function TopGroup() {

 

    const [data,setData]=useState<IData>()
    const [gropus,setGropus]=useState<Array<IGropus>>([])
    const [areas,setAreas]=useState<Array<IAreas>>([])
    const [netwroks,setNetwroks]=useState<Array<INetwroks>>([])
    const [name,setName]=useState("")
    const baseUrl = 'https://shared.gapps.police.gov.il:11082/api/tapnetworks/';


    useEffect(()=>{
      axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJmNGEwMWNhNS0yOTI0LTQwOGQtODM4My05NDdhNjI1ZjNjZWEiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODgwOTVjMTEtZjJkOC00YTIzLWI1NTktODQ5M2VmMTM5MmFiL3YyLjAiLCJpYXQiOjE3MDEwODg4NTQsIm5iZiI6MTcwMTA4ODg1NCwiZXhwIjoxNzAxMDkzNTU0LCJhaW8iOiJBVFFBeS84VkFBQUFTRU9kUTJvOFBjR2FjWVdRNk9TakZVeWIrcForVWwwbGtzTEMzN1JIUHB0RGc0dUw2Z2NjWkl1NkltNVhGdmlGIiwiYXpwIjoiZjRhMDFjYTUtMjkyNC00MDhkLTgzODMtOTQ3YTYyNWYzY2VhIiwiYXpwYWNyIjoiMSIsIm5hbWUiOiLXntep15Qg15fXmdeZ15giLCJvaWQiOiJmZjBlNmY4Mi00Mzc3LTQyODEtYmFhYi0yZDU5ZjlhZDkwZGUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJNOTQ4NDQ0NTNAaWxwb2xpY2V0ZXN0Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BWG9BRVZ3SmlOanlJMHExV1lTVDd4T1NxNlVjb1BRa0tZMUFnNE9VZW1KZlBPcDZBTkEuIiwicm9sZXMiOlsibG9naW4iXSwic2NwIjoiQXBwLkxvZ2luIiwic3ViIjoiNUQyMXY0bVFBLUhGT21Ta2F6ZW9neXpLUGhUbnRpcjE2X2l5dFhMQUFPOCIsInRpZCI6Ijg4MDk1YzExLWYyZDgtNGEyMy1iNTU5LTg0OTNlZjEzOTJhYiIsInV0aSI6ImZVVzFDdWowb1VDbGFJOVQySThfQWciLCJ2ZXIiOiIyLjAifQ.C5G8mdF6yqLbMMdyHrjFvQui2xTgzDr23czTWLGGwn7bZmkow9VJh8Yt2mP-C35qPVUNdYbCDkvx1LUBsuO1M2rW0pYE1YGScdI6LjoKNNwr24kQScKTv907AAU4agdOPt30h7nZ_2WOqPUoPqd5i_lHFa71un4Zp154q6wUSYq4Lc4gHp9myHDfwkAa4MymFqB-aAQQixV0oRcvkbbS6xb9MDRgl0Z6ITiRQlrtuCPq6_9MyfJ67fJGgVclSCFZvHOG0Fvt8xddOu_0fhMjcNDqUx2ilojMbqY_qZrdDmnO7j4Npe-6plSb2-5Fi2LhCCJrHfkL5tPwnLJjSjc2oQ`;

      axios.get(`${baseUrl}All`).then((response) => {
      console.log(response.data);
  });
    },[])
    /*
    */
    return (
      <View>
        <Text> {name}</Text>
        {data?.gropus.map((group) => {
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
  