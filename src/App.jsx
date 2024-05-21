import "./App.css";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { collection,getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";
import Model from "./components/Model";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const inputcss = {
    width: "80%",
  };
  let {isopen,handleopen,handleclose,isupdate,handleUpdate} = useDisclouse()
  let [contact, setContact] = useState([]);
 
 

  let filterContact = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "contact");
    onSnapshot(contactRef,(snapshot)=>{
      const contactlists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filtered = contactlists.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
      setContact(filtered);
      return filtered;
    });
  
    setContact(searchfilter);
  };
  useEffect(() => {
    const fireContact = async () => {
      try {
        const contactRef = collection(db, "contact");
        onSnapshot(contactRef,(snapshot)=>{
          const contactlists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactlists);
          return contactlists
        });
        
      
      } catch (error) {
        console.log(error);
      }
    };

    fireContact();
  }, []);

  return (
    <>
      <div className={isopen? "container-wrapper" : "container"} >
        <Navbar />
        <div className="container mt-4 ">
          <div className="row">
            <div className="col-12">
              <FaSearch
                fontSize="18px"
                className="position-absolute text-white ms-2 mt-3"
              />
              <input
                type="text"
                onChange={(e) => filterContact(e)}
                style={inputcss}
                className="bg-transparent border outline-none p-1 text-white position-relative text-center"
                placeholder="Search"
              />
              <IoIosAddCircle
                onClick={handleopen}
                fontSize="50px"
                className="text-white ms-2 add-icon"
              />
            </div>
          </div>
        </div>
        <div className="container mt-4">
      <div className="row d-flex justify-content-center gap-2">
      {contact.map(cont =>
        <ContactCard cont={cont} handleUpdate={handleUpdate}  contacts={contact} />
        )}
      </div>
    </div>
      </div>
      <Model isopen={isopen} isupdate={isupdate} handleclose={handleclose} contacts={contact} />
     <ToastContainer/>
     
    </>
  );
}

export default App;
