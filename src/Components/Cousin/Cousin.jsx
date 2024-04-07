import { useCallback, useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Cousin = ({name}) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            { name === "Romjan" && <small>{money}</small>}
        </div>
    );
};

export default Cousin;