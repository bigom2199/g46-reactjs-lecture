import React, { useState } from 'react';

const ValidationForm = (props) => {
  /*  const [email,setEmail] =useState('');
    const [name,setName] = useState('');*/

    const [person,setPerson] = useState({name:'',email:''});
    const [errorMessage,setErrorMessage] = useState({email:'',name:''});

    const emailChangeHandler = (e) => {
     //   setEmail(e.target.value)
     const_person = {...person}; // {name: `´, email: `test.text@test.se`}
     _person.name= e.target.value;
     setPerson(_person);
    }

    const nameChangeHandler = (e) => {
       // setName(e.target.value);
       const_person ={...person}; // {name: ``,}
       _person.name = e.target.value;
       setPerson(_person);
    }

      const buttonClickHandler = () => {
        const person= {'email':email,'name': name};
        console.log(person);
        
      }
        const emailRegex = /^[^\s@] +@[^\s@]+\.[^\s@]+$/;
        let error= {name:'',email:''};
        let isValid = true;
        if (!emailRegex.test(email)){
            
            error.email = 'email is not valid!';
            isValid= false;

        } 
        if(name===''){
            
            error.email = 'name is not valid!';
            isValid= false;
        }
        setErrorMessage(error);

           if(isValid){
          
          setErrorMessage({name:'',email:''});
            const person = {'email':email,'name':name};
            console.log(person);
            console.log('send data to backend...')
            // call post function from service class that is a JS class

           }
        
        
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    
                        <form>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">
                            Email:
                            </label>
                            <input
                            type="email"
                            class="form-control" 
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={emailChangeHandler}
                            />
                            {errorMessage && errorMessage.email && (<p className="text-danger">{errorMessage.email} </p>)}
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="name" className="form-label">
                                        Name:
                                    </label>
                     <input
                     type="name"
                     className="form-control"
                     id="name"
                     placeholder="Enter name"
                     name="name"
                     value={name}
                     onChange={nameChangeHandler}
                     />
                     {errorMessage && errorMessage.name && (<p className="text-danger">{errorMessage.name} </p>)}
                     </div>


                    <button type="button" className="btn btn-primary" onClick={buttonClickHandler}>Click </button>
                    
                </form>
        </div>
            </div>

        </div>
    )

    }
  export default ValidationForm;   