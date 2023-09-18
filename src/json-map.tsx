import { useState, useEffect } from "react"
const jsonURL = "https://static.ui.com/fingerprint/ui/public.json"

export function JsonMap(filters: any){
    const [dataUnmapped, setdataUnmapped] = useState([])
    const [error, setError] = useState({})
    useEffect(() => {
        fetch(jsonURL)
        .then(response => response.json())
        .then(Jsondata => setdataUnmapped(Jsondata.devices))
        .catch(err => setError(err))
    },[])


    interface btle {
        factoryDerfault: string;
        userConfigured: string;
    }
    interface icon {
        id: string;
        resolutions: [number, number][];
    }
    interface line {
        name: string;
        id: string;
    }
    interface product {
        abbrev: string;
        name: string;
    }
    interface triplets {
        [0]: string;
        [1]: string;
    }
    interface bleServices{
        [0]?: string;
    }
    interface features{
        atfDisabled: boolean;
        ax: boolean;
        bandsteer: boolean;
        gen: number;
    }
    interface ports{
        standard?: number;
    }
    interface first{
        gain: number;
        maxPower: number;
    }
    interface second{
        gain: number;
        maxPower: number;
        maxSpeedMegabitsPerSecond: number;
    }
    interface third{
        gain: number;
        maxPower: number;
        maxSpeedMegabitsPerSecond: number;
    }
    interface radios{
        '6e'?: first;
        na?: second;
        ng?: third;
    }
    interface network{
        bleServices: bleServices;
        chipset: string;
        deviceCapabilites: string;
        ethernetMaxSpeedMegabitsPerSecond: number;
        features: features;
        hybrid: string;
        miniumFirmwareRequired: string;
        numberOfPorts: number;
        ports: ports;
        radios: radios;
        systemIdHexadecimal: string;
        type: string;
    }
    interface unifi{
        adoptability: string;
        network: network;
    }
    interface firmware{
        board: string;
        platform: string;
    }
    interface uisp{
        bleServices: string;
        firmware: firmware;
        line: string;
        nameLegacy: string;
    }
    interface UserData {
        btle: btle;
        guids: string;
        icon: icon;
        id: string;
        line: line;
        product: product;
        shortnames: string;
        sysid: string;
        sysids: string;
        triplets: triplets;
        unifi: unifi;
        uisp: uisp;
        [key: string]: any;
    }

    const jsonData: UserData[] = dataUnmapped; 
    const filtersList: any = []

    if (filters == '' || filters == null) {
        return(jsonData)
    }else{
        filtersList.push(filters)
        const filteredData = jsonData.filter((item) => {
            return filtersList.some((categoryList: any) => {
              return categoryList.some((query: any) => {
                return item.line.name.includes(query);
              });
            });
          });
        return( filteredData )    
    }  
}