import { useState } from 'react';
import './style.css';
import './style-content.css';
import { Searchbar } from "./searchbar"
import { ContentList } from "./content-list"
import { ContentGrid } from "./content-grid"
import { ContentDeviceOpen } from './content-device-open';

function App() {
    const [active, setActive] = useState("ContentList");
    const [header, setHeader] = useState(true);
    const [noFilters, setNoFilters] = useState(true);
    const itemId = (newId: any) => {
        setHeader(false);
        setActive(newId);
      };
    
    const [filters, setFilters] = useState<string[]>([]);

    const filtersSelected = (newFilters: string) => {
        if(newFilters==="Reset"){
            setNoFilters(true)
            //Unchecks all boxes
            for (let x = 0; x < filters.length; x++) {
                const checkbox = document.getElementById(filters[x]) as HTMLInputElement;
                checkbox.checked = false;
              } 
            setFilters([])
            
        }else{
            //Checks if exists in array. If it does, removes it. Else adds it
            const index = filters.indexOf(newFilters);
            if (index !== -1) {
            setFilters([...filters.slice(0, index), ...filters.slice(index + 1)]);
            } else {
            setFilters([...filters, newFilters]);
            }
            setNoFilters(false)
        }
    };
    
    //Toggles visibility of the filter dropdown
    const [isDivHidden, setIsDivHidden] = useState(true);
    const handleClick = () => {
        setIsDivHidden(!isDivHidden);
      };

  return ( 
  <>
      <div id="Header">
        <div className="Header-Top">
            <div className="Header-Left">
                <a href="index.html" id="UI-Logo-Link">
                    <svg id="UI-Logo" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="Logo-Background" width="50" height="50"/>
                        <path className="Logo-U" d="M34.3747 15H33.1249V16.2498H34.3747V15Z"/>
                        <path className="Logo-U" d="M30.0015 23.7532V21.2491L30.0022 21.2498H32.5011V23.7494H35V24.5417C35 25.4575 34.9221 26.5426 34.7431 27.3948C34.6428 27.871 34.4908 28.3443 34.3126 28.7989C34.1298 29.2639 33.9194 29.7094 33.6903 30.1086C33.3915 30.6298 33.0455 31.13 32.6442 31.6003L32.6229 31.6251L32.588 31.666C32.4916 31.7791 32.3962 31.891 32.2915 32.0001C32.1694 32.1304 32.0428 32.254 31.914 32.3776C30.3145 33.9179 28.2305 34.8802 26.0514 35.1011C25.7893 35.128 25.2628 35.1558 25 35.1558C24.7364 35.155 24.2107 35.128 23.9486 35.1011C21.7695 34.8802 19.6855 33.9172 18.086 32.3776C17.9572 32.254 17.8306 32.1304 17.7085 32.0001C17.5986 31.8862 17.4994 31.7694 17.3992 31.6513L17.3988 31.6509L17.3558 31.6003C16.9545 31.13 16.6085 30.6298 16.3097 30.1086C16.0806 29.7087 15.8701 29.2639 15.6874 28.7989C15.5092 28.3443 15.3572 27.871 15.2568 27.3948C15.0779 26.5419 15 25.4575 15 24.5417V15.1565H19.9985V23.7532C19.9985 23.7532 19.9985 24.4122 20.0067 24.6278L20.0086 24.6781V24.6784C20.0191 24.9574 20.0294 25.2306 20.0584 25.5025C20.1408 26.2745 20.3115 27.0069 20.6635 27.6262C20.7653 27.8051 20.8687 27.9789 20.9922 28.1436C21.744 29.1463 22.8883 29.8989 24.3156 30.1086C24.4855 30.1333 24.8285 30.155 25 30.155C25.1715 30.155 25.5144 30.1333 25.6844 30.1086C27.1117 29.8989 28.256 29.1463 29.0078 28.1436C29.1321 27.9789 29.2347 27.8051 29.3365 27.6262C29.6885 27.0069 29.8592 26.2745 29.9416 25.5025C29.9706 25.2301 29.9809 24.9563 29.9914 24.6769L29.9933 24.6278C30.0015 24.4122 30.0015 23.7532 30.0015 23.7532Z"/>
                        <path className="Logo-U" d="M30.6253 16.8751H32.5004L32.5004 18.7494H35V21.2491H32.5004L32.5004 18.7502H30.6253V16.8751Z"/>
                    </svg>
                </a>
                <div className="Header-Top-Text">Devices</div>
            </div>
            <div className="Header-Right">
                Ryan Rebot
            </div>
        </div>
    </div>
    {header === true &&
        <div className="Header-Bottom">
            <Searchbar itemId={itemId}/>
            <div className="Header-Right" >
                <div className="Filters-Container" >
                    <button className="Icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="List-Icon" onClick={() => setActive("ContentList")}>
                        <mask id="path-1-inside-1_2_850" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5ZM7.75 3.75H16.25C16.664 3.75 17 4.086 17 4.5C17 4.914 16.664 5.25 16.25 5.25H7.75C7.336 5.25 7 4.914 7 4.5C7 4.086 7.336 3.75 7.75 3.75ZM4.5 11.5C5.32843 11.5 6 10.8284 6 10C6 9.17157 5.32843 8.5 4.5 8.5C3.67157 8.5 3 9.17157 3 10C3 10.8284 3.67157 11.5 4.5 11.5ZM7.75 9.25H16.25C16.664 9.25 17 9.586 17 10C17 10.414 16.664 10.75 16.25 10.75H7.75C7.336 10.75 7 10.414 7 10C7 9.586 7.336 9.25 7.75 9.25ZM4.5 17C5.32843 17 6 16.3284 6 15.5C6 14.6716 5.32843 14 4.5 14C3.67157 14 3 14.6716 3 15.5C3 16.3284 3.67157 17 4.5 17ZM7.75 14.75H16.25C16.664 14.75 17 15.086 17 15.5C17 15.914 16.664 16.25 16.25 16.25H7.75C7.336 16.25 7 15.914 7 15.5C7 15.086 7.336 14.75 7.75 14.75Z"/>
                        </mask>
                        <path d="M4.5 7C5.88071 7 7 5.88071 7 4.5H5C5 4.77614 4.77614 5 4.5 5V7ZM2 4.5C2 5.88071 3.11929 7 4.5 7V5C4.22386 5 4 4.77614 4 4.5H2ZM4.5 2C3.11929 2 2 3.11929 2 4.5H4C4 4.22386 4.22386 4 4.5 4V2ZM7 4.5C7 3.11929 5.88071 2 4.5 2V4C4.77614 4 5 4.22386 5 4.5H7ZM16.25 2.75H7.75V4.75H16.25V2.75ZM18 4.5C18 3.53372 17.2163 2.75 16.25 2.75V4.75C16.1117 4.75 16 4.63828 16 4.5H18ZM16.25 6.25C17.2163 6.25 18 5.46628 18 4.5H16C16 4.36172 16.1117 4.25 16.25 4.25V6.25ZM7.75 6.25H16.25V4.25H7.75V6.25ZM6 4.5C6 5.46628 6.78372 6.25 7.75 6.25V4.25C7.88828 4.25 8 4.36172 8 4.5H6ZM7.75 2.75C6.78372 2.75 6 3.53372 6 4.5H8C8 4.63828 7.88828 4.75 7.75 4.75V2.75ZM5 10C5 10.2761 4.77614 10.5 4.5 10.5V12.5C5.88071 12.5 7 11.3807 7 10H5ZM4.5 9.5C4.77614 9.5 5 9.72386 5 10H7C7 8.61929 5.88071 7.5 4.5 7.5V9.5ZM4 10C4 9.72386 4.22386 9.5 4.5 9.5V7.5C3.11929 7.5 2 8.61929 2 10H4ZM4.5 10.5C4.22386 10.5 4 10.2761 4 10H2C2 11.3807 3.11929 12.5 4.5 12.5V10.5ZM16.25 8.25H7.75V10.25H16.25V8.25ZM18 10C18 9.03372 17.2163 8.25 16.25 8.25V10.25C16.1117 10.25 16 10.1383 16 10H18ZM16.25 11.75C17.2163 11.75 18 10.9663 18 10H16C16 9.86171 16.1117 9.75 16.25 9.75V11.75ZM7.75 11.75H16.25V9.75H7.75V11.75ZM6 10C6 10.9663 6.78372 11.75 7.75 11.75V9.75C7.88828 9.75 8 9.86171 8 10H6ZM7.75 8.25C6.78372 8.25 6 9.03372 6 10H8C8 10.1383 7.88828 10.25 7.75 10.25V8.25ZM5 15.5C5 15.7761 4.77614 16 4.5 16V18C5.88071 18 7 16.8807 7 15.5H5ZM4.5 15C4.77614 15 5 15.2239 5 15.5H7C7 14.1193 5.88071 13 4.5 13V15ZM4 15.5C4 15.2239 4.22386 15 4.5 15V13C3.11929 13 2 14.1193 2 15.5H4ZM4.5 16C4.22386 16 4 15.7761 4 15.5H2C2 16.8807 3.11929 18 4.5 18V16ZM16.25 13.75H7.75V15.75H16.25V13.75ZM18 15.5C18 14.5337 17.2163 13.75 16.25 13.75V15.75C16.1117 15.75 16 15.6383 16 15.5H18ZM16.25 17.25C17.2163 17.25 18 16.4663 18 15.5H16C16 15.3617 16.1117 15.25 16.25 15.25V17.25ZM7.75 17.25H16.25V15.25H7.75V17.25ZM6 15.5C6 16.4663 6.78371 17.25 7.75 17.25V15.25C7.88829 15.25 8 15.3617 8 15.5H6ZM7.75 13.75C6.78371 13.75 6 14.5337 6 15.5H8C8 15.6383 7.88829 15.75 7.75 15.75V13.75Z" fill={active === "ContentList" ? '#006FFF' : '#838691'} mask="url(#path-1-inside-1_2_850)"/>
                        </svg>
                    </button>
                    <button className='Icon'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="Grid-Icon" onClick={() => setActive("ContentGrid")}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 8.5V4H4V8.5H8.5ZM4 3H8.5C9.052 3 9.5 3.448 9.5 4V8.5C9.5 9.052 9.052 9.5 8.5 9.5H4C3.448 9.5 3 9.052 3 8.5V4C3 3.448 3.448 3 4 3ZM8.5 16V11.5H4V16H8.5ZM4 10.5H8.5C9.052 10.5 9.5 10.948 9.5 11.5V16C9.5 16.552 9.052 17 8.5 17H4C3.448 17 3 16.552 3 16V11.5C3 10.948 3.448 10.5 4 10.5ZM16 4V8.5H11.5V4H16ZM16 3H11.5C10.948 3 10.5 3.448 10.5 4V8.5C10.5 9.052 10.948 9.5 11.5 9.5H16C16.552 9.5 17 9.052 17 8.5V4C17 3.448 16.552 3 16 3ZM16 16V11.5H11.5V16H16ZM11.5 10.5H16C16.552 10.5 17 10.948 17 11.5V16C17 16.552 16.552 17 16 17H11.5C10.948 17 10.5 16.552 10.5 16V11.5C10.5 10.948 10.948 10.5 11.5 10.5Z" fill={active === "ContentGrid" ? '#006FFF' : '#838691'}/>
                        </svg>
                    </button>
                    <button className="Icon" onClick={handleClick} style={{ color: isDivHidden === false ? '#006FFF' : '#838691', backgroundColor: isDivHidden === false ? '#F4F5F6' : '' }}>
                        Filter
                    </button>
                </div>
                <div className={`Filter-Dropdown ${isDivHidden ? 'hidden' : ''}`}>
                        <h1>Product line</h1>
                        <div className='Filter-Options'>
                            <div className='Filter-Row'>
                                <input type='checkbox' id="UniFi" onClick={() => filtersSelected("UniFi")}></input>
                                <div>UniFi</div>
                            </div>
                            <div className='Filter-Row'>
                                <input type='checkbox' id="UniFi LTE" onClick={() => filtersSelected("UniFi LTE")}></input>
                                <div>UniFi LTE</div>
                            </div>
                            <div className='Filter-Row'>
                                <input type='checkbox' id="UniFi Protect" onClick={() => filtersSelected("UniFi Protect")}></input>
                                <div>UniFi Protect</div>
                            </div>
                            <div className='Filter-Row'>
                                <input type='checkbox' id="UniFi Access" onClick={() => filtersSelected("UniFi Access")}></input>
                                <div>UniFi Access</div>
                            </div>
                            <div className='Filter-Row'>
                                <input type='checkbox' id="airMAX" onClick={() => filtersSelected("airMAX")}></input>
                                <div>airMax</div>
                            </div>
                            <div className='Filter-Row'>
                                <input type='checkbox' id="EdgeMAX" onClick={() => filtersSelected("EdgeMAX")}></input>
                                <div>EdgeMax</div>
                            </div>
                        </div>
                        <div id="Filter-Dropdown-Reset" className={`${noFilters ? 'lightRed' : ''}`} onClick={() => filtersSelected("Reset")}>Reset</div>
                    </div>
            </div>     
        </div>
    }
        {active === "ContentList" &&  <ContentList itemId={itemId} filters={filters}/>}
        {active === "ContentGrid" &&  <ContentGrid itemId={itemId} filters={filters}/>}
        {active != "ContentGrid" && active != "ContentList"  &&  <ContentDeviceOpen itemId={itemId} active={active}/>}    
    </>
  );
}

export default App;