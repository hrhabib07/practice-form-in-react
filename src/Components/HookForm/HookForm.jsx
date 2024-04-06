import useInputSate from "../../hooks/useInputState";

const HookForm = () => {
    const nameValue = useInputSate();
    const emailValue = useInputSate();
    const passValue = useInputSate();
    const handleFormSubmit = e =>{
        e.preventDefault();
        console.log(nameValue.value, emailValue.value, passValue.value);
    }
    return (
        <div>
             <form onSubmit={handleFormSubmit}>
                <input {...nameValue} type="text" name="name" />
                <br />
                <input {...emailValue} type="email" name="email" />
                <br />
                <input {...passValue} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;