import { useState } from "react";


function useDisclouse() {
  const [isopen, setIsopen] = useState(false);
  const [isupdate, setIsUpdate] = useState(false)

  let handleopen = () => {
    setIsopen(true);
    setIsUpdate(false)
  };
  let handleclose = () => {
    setIsopen(false);
  };
  let handleUpdate = ()=>{
    setIsUpdate(true)
    setIsopen(true)
  }

  return {isopen,handleclose,handleopen,handleUpdate,isupdate};
}

export default useDisclouse