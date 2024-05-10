import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
function Search(){
    const [inputSearch, setInputSearch] = useState('');
    const dispatch = useDispatch();
   
    useEffect(() => {
        getGifs();
      }, []);
    
     const getGifs = () => {
      dispatch({ 
        type: 'FETCH_GIFS',
        payload: inputSearch
        });
      
     }

    const addGifs = (event) => {
    event.preventDefault();
   
   }
    return(
            
             <div>
                <h2>Search GIFS</h2>
                <form> 

               <input
               placeholder="Search"
               type = "text" 
               value = {inputSearch}
               onChange={(event) => setInputSearch(event.target.value)} 
               />
                <button onClick={addGifs}>Submit</button>

                </form>

             </div> 
               
        )
}
export default Search;