import ServiceCard from "@/components/ServiceCard";
import {services} from "../data";
import React from 'react'

const Index = () => {
  return (
    <>
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am Web Developer from Pune, India.  I have 1+ year of experience in web development using
        ReactJs, Javascript, Bootstrap, Tailwind CSS, HTML and CSS.
      </h5>
      <div className="flex-grow rounded-lg pt-4 mt-5 bg-gray-400" style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I am doing..</h6>
        <div className="grid gap-6 px-5 lg:grid-cols-2">
          {services.map((service=>(
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service}/>
            </div>
            )))
          }
        </div>
      </div>
    </div>
    </>
  )
};

export default Index;
