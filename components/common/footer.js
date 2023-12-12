import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import cogoToast from "cogo-toast";
import React from 'react'
import { useRouter } from "next/router";


export default function Footer(){
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    message : "",
   
    
  });
  const router = useRouter();

  const [disable,setDisable] =React.useState(false)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveinfo = async (e) => {
    e.preventDefault();
    setDisable(true)
    let validate = true;
    let message = '';

    if(user.name == ''){
      message = 'Please write your Name!'
      validate = false;

    }
    if(user.email == ''){
      message = 'Please write your email!'
      validate = false;

    }
   
if(validate){
  
    var payload = {
      records: [
        {
          fields: {
            name: user.name,
            email: user.email,
            message : user.message,
          
           
          },
        },
      ],
    };

    
    //upload count for code root
  cogoToast.loading("Sending...").then(async () => {
    await fetch("https://api.airtable.com/v0/app5jVJuOzdd1mrQe/contact", {
      body: JSON.stringify(payload),
      headers: {
        Authorization: "Bearer keyS46GYLYKR3YNPk",
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .catch((error) => cogoToast.error("Error "))
      .then((response)=>{
        
        cogoToast.success("Sent!");
        setDisable(false)
       

  }); 
  });
}else{
  cogoToast.warn(message)
  validate = true;
  setDisable(false)
}
};

 
    return (<footer className="text-white body-font bg-gradient-to-r from-[#3e2e81] via-[#3e67ac] to-[#3e80be] ">
     </footer>)
}