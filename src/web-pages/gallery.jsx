import Header from "../re-useable components/header";
import Footer from "../re-useable components/footer";
import axios from 'axios';
import {useState , useEffect} from "react"
function Gallery() {
  const [data,setData] = useState([])
 const fetchData = async () =>{
  try {
    const response = await axios.get("https://picsum.photos/v2/list")
    setData(response.data);
    }catch (error){
   console.error("error fatching data",error)
    }
 }
 useEffect(() =>{
fetchData()
 } ,[]);
    return(
        
        <>
        < Header/>

      
        < Footer/>
        </>
    )
}
export default Gallery;