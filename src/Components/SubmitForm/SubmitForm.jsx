
const SubmitForm = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log("form submitted");
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default SubmitForm;