import { useEffect } from "react";
import { useState } from "react";

function usecurrencyinfo(currency){
    const [data,setdata] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
        .then((res)=>res.json())
        .then((res)=> setdata(res[currency]));
        // console.log(data);
    },[currency]);
    return data;
}
export default usecurrencyinfo;