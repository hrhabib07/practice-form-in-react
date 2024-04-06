import { useState } from "react";

const SatefulForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState('');
    const handleFormSubmit = e =>{
        e.preventDefault();
        if(pass.length < 6){
            setErr("password must be more than 6 characters ")
        }else{
            
        console.log("form submitted", name, email, pass);
        }
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPass(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleFormSubmit}>
                <input type="text" value={name} onChange={handleNameChange} name="name" />
                <br />
                <input type="email" value={email} onChange={handleEmailChange}  name="email" />
                <br />
                <input type="password" onChange={handlePasswordChange}  name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    err && <p>{err}</p>
                }
            </form>
        </div>
    );
};

export default SatefulForm;