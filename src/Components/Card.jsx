import React from 'react';
import {RiCustomerService2Fill} from "react-icons/ri"
import { RxGlobe } from "react-icons/rx";
import { FaSearchengin } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";


const Cards = ({ title, description, icon }) => (
  <div className="p-6 bg-white rounded-3xl shadow-md h-full flex flex-col justify-between">
    <div>
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-[#170524]">{title}</h3>
      <p className="text-[#170524]">{description}</p>
    </div>
  </div>
);

const Card = () => {
  return (
    <div className="bg-white px-2 py-28">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 h-full">
          <div className="py-24 px-14 bg-[#170524] border rounded-3xl text-white shadow-md flex-1 flex flex-col justify-between" style={{ flexBasis: '70%' }}>
            <div>
              <h1 className="text-4xl font-bold">
                We are on a mission to make 
              </h1>
              <h1 className='mb-4'>
                <span className="bg-gradient-to-r from-[#E30069] to-[#F180B4] bg-clip-text text-transparent">integration</span> easy
              </h1>
              <p className="text-lg">
                An EDI platform for all - retailers, suppliers, manufacturers, transportation, 3PLs & developers.
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-stretch h-[345px]" style={{ flexBasis: '30%' }}>
            <Cards
              title="Faster & stabler integrations"
              description="Our API eliminates EDI complexities using a very rich modern developer toolset, resulting in faster EDI integrations & production environments that are 10X stabler than typical EDI solutions."
              icon={<GoRocket className='text-[#643684] p-2 border shadow-md rounded-lg' size={60} />}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="h-[340px] flex items-stretch">
            <Cards
              title="Global connectivity"
              description="Zenbridge is the only platform that offers API for X12 and EDIFACT EDI standards. No matter which part of the world or industry your trading partner belongs to, you are all set for EDI connectivity."
              icon={<RxGlobe className='text-[#643684] p-2 border shadow-md rounded-lg'  size={60} />}
            />
          </div>
          <div className="h-[340px] flex items-stretch">
            <Cards
              title="Real-time data validation"
              description="Unlike traditional EDI solutions, API can validate data for partner-specific compliances in real-time, saving hundreds of manual hours lost in communication & thousands of dollars lost as chargebacks."
              icon={<FaSearchengin className='text-[#643684] p-2 border shadow-md rounded-lg'  size={60} />}
            />
          </div>
          <div className="h-[340px] flex items-stretch">
            <Cards
              title="Unlimited support"
              description="Zenbridge offers you a delivery manager who manages trading partners & monitors issues with unlimited developer support 24X7 chat, email & phone connectivity. No more EDI support frustrations."
              icon= {<RiCustomerService2Fill className='text-[#643684] p-2 border shadow-md rounded-lg'  size={60} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
