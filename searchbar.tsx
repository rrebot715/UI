import { useState } from "react"
import { JsonMap } from "./json-map";
const jsonURL = "https://static.ui.com/fingerprint/ui/public.json"
var resultNum = 0;

export function Searchbar(){
    const [resultNumShown, setResultNumShown] = useState('457')
    const [isFocused, setIsFocused] = useState(false)
    const handleFocus = () => {
        console.log("changed", resultNum)
        if(resultNum>0){
            setIsFocused(true)
        }
    };
    const handleBlur = () => {
        setIsFocused(false)
    }; 
    
    const jsonData = JsonMap()
    const [value, setValue] = useState('');
    const [displaySearch, setDisplaySearch] = useState(jsonData)
    const onChange = (event: any) => {
        setValue(event.target.value)
        const filteredData = jsonData.filter((item) => item.product.name.includes(event.target.value))
        resultNum = filteredData.length
        setResultNumShown(String(resultNum))
        if(filteredData.length>0){
            handleFocus()
        }else{
            handleBlur()
        }
        setDisplaySearch(filteredData)
    } 

    return (
        <div className="Header-Left">
            <div className="search-container">
                <i className="Search-Icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8529 13.1465L11.0059 10.3025C11.9369 9.21149 12.4999 7.79749 12.4999 6.25049C12.4999 2.79849 9.70188 0.000488281 6.24988 0.000488281C2.79788 0.000488281 -0.00012207 2.79849 -0.00012207 6.25049C-0.00012207 9.70249 2.79788 12.5005 6.24988 12.5005C7.79488 12.5005 9.20788 11.9385 10.2989 11.0095L13.1469 13.8535C13.2449 13.9515 13.3719 13.9995 13.4999 13.9995C13.6279 13.9995 13.7559 13.9505 13.8539 13.8525C14.0489 13.6585 14.0489 13.3415 13.8529 13.1465ZM0.999878 6.25049C0.999878 3.35549 3.35488 1.00049 6.24988 1.00049C9.14488 1.00049 11.4999 3.35549 11.4999 6.25049C11.4999 9.14549 9.14488 11.5005 6.24988 11.5005C3.35488 11.5005 0.999878 9.14549 0.999878 6.25049Z" fill="#838691"/>
                    </svg>
                </i>
                <input 
                    type="text" 
                    id="Searchbar" 
                    placeholder="Search" 
                    value={value} 
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            {isFocused && <div className="dropdownSearch">
                {displaySearch.map((item) => (
                    <a href={item.id} key={item.id}>
                        <div>{item.product.name}</div>
                        <div>{item.shortnames[0]}</div>                        
                    </a>
                ))}
                </div>}
            <div id="Devices-Num">
                {resultNumShown} Devices
            </div>
        </div>   
    )
}