import { JsonMap } from "./json-map";

interface ContentDeviceOpenInter {
    active: string;
  }


  
export function ContentDeviceOpen({active}: ContentDeviceOpenInter){
    
    const jsonData = JsonMap()
    const filteredData = jsonData.filter((item) => item.id.includes(active))
    console.log(filteredData)

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
                    <div className="Content-Device-Button Icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 16C12.367 16 12.235 15.947 12.136 15.843L7.287 10.701C7.102 10.513 7 10.264 7 9.99998C7 9.73598 7.102 9.48698 7.287 9.29898L12.136 4.15697C12.325 3.95597 12.642 3.94697 12.843 4.13597C13.044 4.32597 13.053 4.64197 12.864 4.84297L8 9.99998L8.01 10.01L12.864 15.156C13.053 15.357 13.044 15.673 12.843 15.863C12.746 15.955 12.623 16 12.5 16Z" fill="#838691"/>
                        </svg>
                    </div>
                    <div className="Content-Device-Button Icon Flipped">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 16C12.367 16 12.235 15.947 12.136 15.843L7.287 10.701C7.102 10.513 7 10.264 7 9.99998C7 9.73598 7.102 9.48698 7.287 9.29898L12.136 4.15697C12.325 3.95597 12.642 3.94697 12.843 4.13597C13.044 4.32597 13.053 4.64197 12.864 4.84297L8 9.99998L8.01 10.01L12.864 15.156C13.053 15.357 13.044 15.673 12.843 15.863C12.746 15.955 12.623 16 12.5 16Z" fill="#838691"/>
                        </svg>
                    </div>
                </div>
            </div>     
        </div>
        <div className="Device-Open-Content">
            {filteredData.map((item) => (
                <div key={item.id} id={item.id} className="Device-Open-Container">
                    <img src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[4][0]}x${item.icon.resolutions[4][1]}.png`} ></img>
                    <div>
                        <table>
                            <tr>
                                <th colSpan={2}>
                                    {item.product.name}
                                </th>
                            </tr>
                            <tr>
                                <th colSpan={2}>
                                    {item.line.name}
                                </th>
                            </tr>                          
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
                            <tr>
                                <td>
                                    Max. Power
                                </td>
                                <td>
                                    {item.unifi?.network?.radios['6e']?.maxPower}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Speed
                                </td>
                                <td>
                                    {item.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Number of Ports
                                </td>
                                <td>
                                    {item.unifi?.network?.numberOfPorts}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    </>) 
    
}