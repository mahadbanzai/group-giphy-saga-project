import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
function Search(){
    const [inputGifs, setInputGifs] = useState('');
    const dispatch = useDispatch();
   
    useEffect(() => {
        getGifs();
      }, []);
    
     const getGifs = () => {
      dispatch({ type: 'FETCH_GIFS'});
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
               value = {inputGifs}
               onChange={(event) => setInputGifs(event.target.value)} 
               />
                <button onClick={addGifs}>Submit</button>

                </form>

             </div> 
               
        )
}
export default Search;