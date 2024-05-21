import React from 'react'
import { IoIosContact } from "react-icons/io";
import { MdDelete ,MdEditSquare} from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';



function ContactCard({cont,handleUpdate}) {


 let handledeletefirebase = async (id)=>{
  try{
   await deleteDoc(doc(db,'contact',id))
   toast.success('Deleted the Contact Successfully')
  }catch(error){
    console.log(error);
  }
  
}
  return (
    <>
     <div  key={cont.id} className="col-12 col-md-12 col-lg-6 ">
          <div className="contact-card d-flex bg-white rounded-2 py-2 gap-5">
            <div className="card-inner d-flex gap-3  align-items-center ">
            <IoIosContact className='text-warning ico-hover' fontSize='70px'/>
            <div className="card-detial  d-flex flex-column">
             <h6 className='fw-bold fs-4'>{cont.name}</h6>
             <h6 className='fw-bold fs-4'>{cont.email}</h6>
            </div>
            </div>
       
            <div className="card-icon d-flex   gap-1 align-items-center justify-content-end ">
            <MdEditSquare onClick={handleUpdate} className='text-primary ico-hover' fontSize='40px'/>
            <MdDelete  onClick={()=>{handledeletefirebase(cont.id)}} className='text-danger ico-hover'fontSize='40px'/>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default ContactCard