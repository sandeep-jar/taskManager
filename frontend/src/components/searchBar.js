import axios from "axios";
import { useState } from "react"

const SearchBar = () => {
    const [text,setText] = useState(0);
    const [res,setRes] = useState(null);
    const url = "http://localhost:5000/task"
    const handleSearch = () => {
        const act = async () => {
            try {
                const dat = await axios.get(url,{"params":{id:text}});
                if(dat.data) {
                    console.log(dat.data);
                    
                    setRes(dat.data);
                    return;
                }
                else{
                    alert("no such item");
                    return;
                }
            }
            catch(err) {
                alert('error occured while searching');
            }

        }
        act();
    }
    return(
        <><div className="searchBar">
        <input placeholder="search" value={text} onChange={(e) => {setText(e.target.value)}}></input>
        <button onClick={handleSearch}>search</button>
        </div>
        <div className="result">
            {res!=null? (<div className="resItem">{res.title}</div>):null}
        </div>
        </>
        
        
    )
}

export default SearchBar;