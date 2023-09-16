import { JsonMap } from "./json-map";

export function ContentGrid(){
    const jsonData = JsonMap()
    console.log(jsonData)
    return (      
    <div className="Grid-Content">



        <a href="index.html" className="Grid-Content-Card">
            <div className="Grid-Top-Container">
                <img src="https://static.ui.com/fingerprint/ui/icons/1a431afe-91c6-400f-bd34-c2eeffec263d_257x257.png"></img>
            </div>
            <div className="Grid-Top-Right">UniFi</div>
            <div className="Grid-Bottom-Container">
                <h1>title</h1>
                <p>text</p>
            </div>
        </a>
        
        

    </div>
    ) 
}