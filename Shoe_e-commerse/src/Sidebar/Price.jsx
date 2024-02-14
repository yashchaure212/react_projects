import React from "react";
import Input from "../components/Input";

function Price({handleChange}) {
  return (
    <>
      <div className=" border-b-2 flex flex-col justify-center w-full p-5">
        <h2 className="font-medium text-2xl mb-2">Price</h2>

        <Input 
      handleChange={handleChange} 
      value=""
      title="All"
      name="test2"
      />

        <Input 
      handleChange={handleChange} 
      value="50"
      title="$0-50"
      name="test2"
      />
        <Input 
      handleChange={handleChange} 
      value="100"
      title="$50-100"
      name="test2"
      />
        <Input 
      handleChange={handleChange} 
      value="150"
      title="$100-150"
      name="test2"
      />
        <Input 
      handleChange={handleChange} 
      value="200"
      title="Over $150"
      name="test2"
      />
      
      </div>
    </>
  );                                                                                       
}

export default Price;
