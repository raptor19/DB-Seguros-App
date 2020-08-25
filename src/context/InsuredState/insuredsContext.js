import React,{useState,createContext} from 'react';
import InsuredHeaders from "../../services/Insureds-headers";

const InsuredsContext = createContext();

export const InsuredContextProvider = props => {
    const [insuredHeaders,setInsuredHeaders] = useState([]);
    const [insuredDelete,setInsuredDelete] = useState([]);
    const [insuredSearched,setInsuredSearched] = useState([])
    return(
        <InsuredsContext.Provider value={}>
        {props.children}
        </InsuredsContext.Provider>
    )
}

