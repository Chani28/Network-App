import { useEffect, useState } from "react";
import { View, Text} from "react-native";
import {  IGropus} from  "../state/Group";
import { IArea } from "../state/Area";
import { INetwroks } from "../state/Network";
import { IData } from "../state/DataArray";

import axios from 'axios';
import { useRealm } from "@realm/react";






export default function TopGroup() {

 

    const [data,setData]=useState<IData>()
    const [gropus,setGropus]=useState<Array<IGropus>>([])
    const [areas,setAreas]=useState<Array<IArea>>([])
    const [netwroks,setNetwroks]=useState<Array<INetwroks>>([])
    const [name,setName]=useState("")
    const baseUrl = 'https://shared.gnp.police.gov.il:10082/api/tapnetworks/';
    const realm = useRealm();

    useEffect(()=>{
      axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJmNGEwMWNhNS0yOTI0LTQwOGQtODM4My05NDdhNjI1ZjNjZWEiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODgwOTVjMTEtZjJkOC00YTIzLWI1NTktODQ5M2VmMTM5MmFiL3YyLjAiLCJpYXQiOjE3MDEyMzgxMjEsIm5iZiI6MTcwMTIzODEyMSwiZXhwIjoxNzAxMjQyODAxLCJhaW8iOiJBVFFBeS84VkFBQUE2bmdFcjZQZnFCUDFuL0lpY0RBZ0VoMlY5cDJqbnN4VnhMT3ZBdTJHNlAvZ2FqemZackNUYlp4c3VudHdra2RKIiwiYXpwIjoiZjRhMDFjYTUtMjkyNC00MDhkLTgzODMtOTQ3YTYyNWYzY2VhIiwiYXpwYWNyIjoiMSIsIm5hbWUiOiLXntep15Qg15fXmdeZ15giLCJvaWQiOiJmZjBlNmY4Mi00Mzc3LTQyODEtYmFhYi0yZDU5ZjlhZDkwZGUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJNOTQ4NDQ0NTNAaWxwb2xpY2V0ZXN0Lm9ubWljcm9zb2Z0LmNvbSIsInJoIjoiMC5BWG9BRVZ3SmlOanlJMHExV1lTVDd4T1NxNlVjb1BRa0tZMUFnNE9VZW1KZlBPcDZBTkEuIiwicm9sZXMiOlsibG9naW4iXSwic2NwIjoiQXBwLkxvZ2luIiwic3ViIjoiNUQyMXY0bVFBLUhGT21Ta2F6ZW9neXpLUGhUbnRpcjE2X2l5dFhMQUFPOCIsInRpZCI6Ijg4MDk1YzExLWYyZDgtNGEyMy1iNTU5LTg0OTNlZjEzOTJhYiIsInV0aSI6ImZtV3VQc1B1VzBHdFhuemYwNmdHQUEiLCJ2ZXIiOiIyLjAifQ.BvAxHLLmAnDxifincHTVw7GdHuB1tOQwYhBZ9IpThaKH9GPvXfbgygdSItCxWP9GmEL7ANNumjYj3rEudxGvapjCpAhCMpc_Ql63jCwTiQK2PLWuJVhFe9Vuyo_bAV8dnPxmToCjuGTUZAg6EQi0HST4xV1Cq4PayZDjwO5K-mLSbUHOVzFsufHh-rx3nfMuARuxkKLq8s0QRH3K5N5-B-N6Ap89Uw7BCM1_Rwo3Y11FWUJOePQiJ0f98l9KysoAnrVUATVLTyRgGCpU-qNGkbO8gkLea2vI5hf9b2Kpu6kq-GgkdRIyzAOEB6XuFH3wmxG6wkwj_1m5dp0YWjNhxg`;
      axios.get(`${baseUrl}All`).then((response) => {
      console.log(response.data);
      
      realm.write(() => {
        realm.create('IData',response.data)
      } );
      
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
  