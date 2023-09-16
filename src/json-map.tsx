import { useState, useEffect } from "react"
const jsonURL = "https://static.ui.com/fingerprint/ui/public.json"

export function JsonMap(){
    const [dataUnmapped, setdataUnmapped] = useState([])
    const [error, setError] = useState({})
    useEffect(() => {
        fetch(jsonURL)
        .then(response => response.json())
        .then(Jsondata => setdataUnmapped(Jsondata.devices))
        .catch(err => setError(err))
    },[])

    interface line {
        name: string;
        id: string;
    }
    interface product {
        abbrev: string;
        name: string;
    }
    interface icon {
        resolutions: [number, number][];
        id: string;
    }
    interface UserData {
        id: string;
        sysid: string;
        icon: icon;
        line: line;
        product: product;
        shortnames: string;
    }
    const jsonData: UserData[] = dataUnmapped; 
    return ( jsonData )
}