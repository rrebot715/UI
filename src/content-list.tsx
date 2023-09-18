import { JsonMap } from "./json-map";

export function ContentList(filtersNew: any){
    const {itemId, filters} = filtersNew;
    const jsonData = JsonMap(filters)
    const handleClick = (id: string) => {
        console.log(id)
        itemId(id);
    };

    return (  
    <div className="List-Content">
        <div className="List-Header">
            <div className="List-Filler-Space"></div>
            <div className="List-column">
                Product Line
            </div>
            <div className="List-column">
                Name
            </div>
        </div>
        <div className="List-Content-Container">
            {jsonData.map((item) => (
                <button key={item.id} id={item.id} className="List-Item-Line" onClick={() => handleClick(item.id)}>
                    <img src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[0][0]}x${item.icon.resolutions[0][1]}.png`}></img>
                    <div className="List-column">
                        {item.line.name}
                    </div>
                    <div className="List-column">
                        {item.product.name}
                    </div>
                </button>
            ))}
        </div>
    </div>
    ) 
}
