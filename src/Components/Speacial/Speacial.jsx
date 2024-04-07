import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Speacial = () => {
    const asset = useContext(AssetContext)
    return (
        <div>
            <h2>Speacial</h2>
            <p>has: {asset}</p>
        </div>
    );
};

export default Speacial;