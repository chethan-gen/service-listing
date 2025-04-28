import {useState} from "react";
import ServiceCard from "./components/ServiceCard";
import axios from "axios";
import data from "./components/data.json"

function App() {
   const {services,setServices} = useState({data});

   return(
    <>
    <div>
    {services.map((service)=>(
      <ServiceCard key={service.id} data={service}/>
   ))}
   </div>

   </>
   
   );
}

export default App;


