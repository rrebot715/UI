import { useState } from "react"
import { JsonMap } from "./json-map";

export function ContentDeviceOpen(filtersNew: any){
    const {itemId, active} = filtersNew;
    const jsonData = JsonMap(null);
    const changeDevice = (which: string) => {
        const selectedItems = [];

        for (const item of jsonData) {
            selectedItems.push(item);
            if (item.id === active) {
                break;
            }
        }
        if(which==='left'){
            if(selectedItems.length <= 1){  
                //When the left arrow press selects before the first in the array, loops to the last
                itemId(jsonData[jsonData.length-1].id);
            }else{
                itemId(jsonData[selectedItems.length-2].id);
            }
        }else{
            if(selectedItems.length >= jsonData.length){
                //When the right arrow press selects after the last in the array, loops to the first
                itemId(jsonData[1].id);
            }else{
                itemId(jsonData[selectedItems.length].id);
            }
        } 
        console.log(jsonData[selectedItems.length]);     
    };
    const filteredData = jsonData.filter((item) => item.id.includes(filtersNew.active))
    const [showJsonToggle, setShowJson] = useState(false);
    const showJson = () => {
        setShowJson(true);
    };

    return ( <>
        <div className="Header-Bottom">
            <div className="Header-Left">
                <a href="index.html" className="Content-Device-Button Icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 16C12.367 16 12.235 15.947 12.136 15.843L7.287 10.701C7.102 10.513 7 10.264 7 9.99998C7 9.73598 7.102 9.48698 7.287 9.29898L12.136 4.15697C12.325 3.95597 12.642 3.94697 12.843 4.13597C13.044 4.32597 13.053 4.64197 12.864 4.84297L8 9.99998L8.01 10.01L12.864 15.156C13.053 15.357 13.044 15.673 12.843 15.863C12.746 15.955 12.623 16 12.5 16Z" fill="#838691"/>
                    </svg> Back
                </a>
            </div> 
            <div className="Header-Right">
                <div className="Arrows" >
                    <button className="Content-Device-Button Icon" onClick={() => changeDevice("left")}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 16C12.367 16 12.235 15.947 12.136 15.843L7.287 10.701C7.102 10.513 7 10.264 7 9.99998C7 9.73598 7.102 9.48698 7.287 9.29898L12.136 4.15697C12.325 3.95597 12.642 3.94697 12.843 4.13597C13.044 4.32597 13.053 4.64197 12.864 4.84297L8 9.99998L8.01 10.01L12.864 15.156C13.053 15.357 13.044 15.673 12.843 15.863C12.746 15.955 12.623 16 12.5 16Z" fill="#838691"/>
                        </svg>
                    </button>
                    <button className="Content-Device-Button Icon Flipped" onClick={() => changeDevice("right")}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 16C12.367 16 12.235 15.947 12.136 15.843L7.287 10.701C7.102 10.513 7 10.264 7 9.99998C7 9.73598 7.102 9.48698 7.287 9.29898L12.136 4.15697C12.325 3.95597 12.642 3.94697 12.843 4.13597C13.044 4.32597 13.053 4.64197 12.864 4.84297L8 9.99998L8.01 10.01L12.864 15.156C13.053 15.357 13.044 15.673 12.843 15.863C12.746 15.955 12.623 16 12.5 16Z" fill="#838691"/>
                        </svg>
                    </button>
                </div>
            </div>     
        </div>
        <div className="Device-Open-Content" style={{ display: showJsonToggle === false ? 'flex' : 'none'}}>
            {filteredData.map((item) => (
                <div key={item.id} id={item.id} className="Device-Open-Container">
                    <img src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[4][0]}x${item.icon.resolutions[4][1]}.png`} ></img>
                    <div className="Table-Container">
                        <div className="Table-Title"> 
                            <div>
                                {item.product.name}
                            </div>
                            <div>
                                {item.line.name}
                            </div> 
                        </div>
                        <table className="Table-Content">                     
                            <tr>
                                <td>
                                    Product Line
                                </td>
                                <td>
                                    {item.line.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ID
                                </td>
                                <td>
                                    {item.line.id}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    {item.product.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Short Name
                                </td>
                                <td>
                                    {item.shortnames[0]}
                                </td>
                            </tr>
                            {item.unifi?.network?.radios['6e']?.maxPower != null &&
                                <tr>
                                    <td>Max. Power</td>
                                    <td>{item.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond}</td>
                                </tr>
                            }
                            {item.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond != null &&
                                <tr>
                                    <td>Speed</td>
                                    <td>{item.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond}</td>
                                </tr>
                            }
                            {item.unifi?.network?.numberOfPorts != null &&
                                <tr>
                                    <td>Number of Ports</td>
                                    <td>{item.unifi?.network?.numberOfPorts}</td>
                                </tr>
                            }       
                        </table>
                        {/*<a href="https://static.ui.com/fingerprint/ui/public.json" className="LinkToJSON">See All Details as JSON</a>*/}
                        <button className="LinkToJSON" onClick={() => showJson()}>See All Details as JSON</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="showJson" style={{ display: showJsonToggle === true ? 'flex' : 'none'}}>
            {filteredData.map((item) => (
                <div key={item.id}>
                    {Object.keys(item).map((key) => (
                        <div key={key}>
                            <strong>{key}:</strong> {JSON.stringify(item[key])}
                        </div>
                        ))}
                </div>
            ))}
        </div>
    </>) 
    
}