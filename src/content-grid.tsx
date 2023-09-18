import { JsonMap } from "./json-map";
interface ContentGridInter {
    itemId: (itemId: string) => void;
}
interface test {
    filters: (filters: string) => void;
}

//export function ContentGrid({itemId}: ContentGridInter){
    export function ContentGrid(filtersNew: any){
    const {itemId, filters} = filtersNew;    
    const jsonData = JsonMap(filters)
    const handleClick = (id: string) => {
        itemId(id);
      };

    console.log(jsonData)
    return ( <>
        <div className="Grid-Content">
            {jsonData.map((item) => (
                <button key={item.id} id={item.id} className="Grid-Content-Card" onClick={() => handleClick(item.id)}>
                    <div className="Grid-Top-Container">
                        <img src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[2][0]}x${item.icon.resolutions[2][1]}.png`}></img>
                    </div>
                    <div className="Grid-Top-Right">{item.line.name}</div>
                    <div className="Grid-Bottom-Container">
                        <h1>{item.product.name}</h1>
                        <p>{item.shortnames[0]}</p>
                    </div>
                </button>
            ))}




            

        </div>
    </>) 
}