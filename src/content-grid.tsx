import { JsonMap } from "./json-map";
interface ContentGridInter {
    itemId: (itemId: string) => void;
}

export function ContentGrid({itemId}: ContentGridInter){
    const jsonData = JsonMap()
    const handleClick = (id: string) => {
        itemId(id);
      };

    console.log(jsonData)
    return ( <>
        <div className="Grid-Content">


            {jsonData.map((item) => (
                <div key={item.id} id={item.id} className="Grid-Content-Card" onClick={() => handleClick(item.id)}>
                <div className="Grid-Top-Container">
                    <img src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[0][0]}x${item.icon.resolutions[0][1]}.png`}></img>
                </div>
                <div className="Grid-Top-Right">UniFi</div>
                <div className="Grid-Bottom-Container">
                    <h1>{item.line.name}</h1>
                    <p>{item.product.name}</p>
                </div>
            </div>
            ))}




            

        </div>
    </>) 
}