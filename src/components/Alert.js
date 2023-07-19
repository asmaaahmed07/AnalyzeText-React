import React from "react";

export default function Alert(props) {
    const capatilize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
   
   props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatilize(props.alert.type)}</strong>  :  {props.alert.msg}
       
      </div>
    
  );
}
// and mein evaluate hoti dono cheezain ...if alert null tou ni mille gi aghe wali cheez 