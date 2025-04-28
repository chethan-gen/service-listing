import { useState } from "react";
import ServiceCard from "./components/ServiceCard";
import data from "./components/data.json";

function App() {
   const [services, setServices] = useState(data);

   return (
      <>
         <div>
            {services.map((service) => (
               <ServiceCard key={service.id} service={service} />

            ))}
         </div>
      </>
   );
}

export default App;
