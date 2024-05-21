import React from 'react'
import { IoClose } from "react-icons/io5";
import {useFormik} from 'formik'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';


function Model({isopen,handleclose,isupdate}) {
  let AddContact = async (contact)=>{
    try{
      let contactRef = collection(db,'contact');
      await addDoc(contactRef,contact)
      toast.success('Add Contact to Successfully')
    }catch(error){
      console.log(error);
    }

  }

  let {handleChange,values,handleSubmit} = useFormik({
    initialValues:{
      name:'',
      email:'',
    },
    onSubmit: (values)=>{
     AddContact(values)

    }
  })
 
  return (
    <>
    <div>
    {isopen && <div className="container model-wrapper">
      <div className="row ">
        <div className="col-12">
        <div className="model bg-white">
        <IoClose onClick={handleclose} fontSize='30px' className='ico-hover text-dark'/>
        <form onSubmit={handleSubmit}>
        <div className="model-field mt-5 mb-3">
          <label htmlFor="name" className='fw-bold fs-4'>Name</label>
        <input type="text" name='name' onChange={handleChange} value={values.name} className='text-dark w-100 p-2 rouded-4' placeholder='Name' required/>
        </div>
        <div className="model-field mb-3">
          <label htmlFor="email" className='fw-bold fs-4'>Email</label>
        <input type="text" name='email'  onChange={handleChange} value={values.email} className='text-dark w-100 p-2 rouded-4' placeholder='email' required/>
        </div>
        <button className='btn btn-warning my-3'>{isupdate? 'Update' :'Add'} Contact</button> 
        </form>
      
         
        </div>
        </div>
      </div>
    </div>
    }
   </div>
    </>
  )
}

export default Model