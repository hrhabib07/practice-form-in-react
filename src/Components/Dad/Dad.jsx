import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex"><Brother></Brother>
            <MySelf></MySelf>
            <Sister></Sister></section>
        </div>
    );
};

export default Dad;