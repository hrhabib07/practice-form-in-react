import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
    }
    return (
        <div>
             <form onSubmit={handleFormSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
                

            </form>
        </div>
    );
};

export default RefForm;