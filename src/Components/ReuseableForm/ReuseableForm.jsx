import { Children } from "react";

const ReuseableForm = ({handleSubmit, btnText, children}) => {
    const handleFormSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        handleSubmit(data)
    }
    return (
        <div>
            {children}
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={btnText} />
            </form> 
        </div>
    );
};

export default ReuseableForm;