import React, { useState } from 'react'

const Todo = () => {
    const [form,setForm]=useState({customerName:"",borrowRupee:"",contactNumber:"",Date:""})
    const [formErro,setFormError]=useState({customerName:"",borrowRupee:"",contactNumber:"",Date:""})

const handleValues = (e)=>{
    const {name,value}=e.target
    console.log(name,"namingData")



    setForm({...form,[name]:value})
    setFormError({...formErro,[name]:""})


}


const handleSubmitTodo = ()=>{
  let hasError={}
  let errorStatus =false
  if(!form.customerName){
  hasError.customerName = "Required"
  errorStatus=true
  }
  if(!form.borrowRupee){
    hasError.borrowRupee = "Required"
    errorStatus = true
  }

  if(!form.contactNumber){
    hasError.contactNumber = "Required"
    errorStatus = true
  }

  
  if(!form.Date){
    hasError.Date = "Required"
    errorStatus = true
  }
  console.log(hasError,"hasing")
  
  if(hasError && errorStatus){
    console.log("yes");
      setFormError(hasError)
      return
    }

    console.log("AllformField---",form)
    
}


const handleClear = ()=>{
    setForm({customerName:"",borrowRupee:"",contactNumber:"",Date:""})
}



  return (


<>


<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Customer Name
      </label>
      <input onChange={handleValues} class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline   ${formErro.customerName?"border-2 border-red-400":""} ` } value={form.customerName}name='customerName'  type="text" placeholder="Username"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Borrow Rupeess
      </label>
      <input value={form.borrowRupee}onChange={handleValues} class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline   ${formErro.borrowRupee?"border-2 border-red-400":""} ` }  name='borrowRupee'  type="number" placeholder="Username"/>
    </div>
    <div class="mb-4">
      <label  class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Contact Number
      </label>
      <input value={form.contactNumber}onChange={handleValues} class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline   ${formErro.contactNumber?"border-2 border-red-400":""} ` }  name='contactNumber' type="number" placeholder="Username"/>
    </div>
 

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Date
      </label>
      <input value={form.Date} onChange={handleValues} name='Date' class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline   ${formErro.Date?"border-2 border-red-400":""} ` }  type="date" placeholder="Username"/>
    </div>
 
    <div class="flex items-center justify-between">
      <button  onClick={handleSubmitTodo}class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
      <a onClick={handleClear} class="inline-block align-baseline font-bold  text-blue-500 hover:text-blue-800" href="#">
       Clear
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</>
  )
}

export default Todo