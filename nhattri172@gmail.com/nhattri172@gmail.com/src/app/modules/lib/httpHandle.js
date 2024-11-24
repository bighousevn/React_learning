import { BE_ENPOINT } from "../../../settings/localVar";
import { getApiUser } from "./config";

const KEY = "1234"
const HEADERS = {
     "Content-Type" : "application/json",
     accept: "application/json",
    key: KEY,
};


export const getUser = async() => {
    const url =getApiUser();
    const res= await fetch(url  ,{
       
        headers:HEADERS,
    });

    if(!res.ok){
        
        return;
    }

    return res.json();

}

export const post1 = async(uri, reqData, onSuccess, onFail) => {
    const res= await fetch(BE_ENPOINT + uri ,{
        method:"POST",
        headers:HEADERS,
        body: JSON.stringify(reqData),
    });

    if(!res.ok){
        onFail();
        return;
    }

    const data= await res.json();
    onSuccess(data);

}

export const post2 = async( reqData, onSuccess, onFail) => {
    const res= await fetch(BE_ENPOINT + "user/" ,{
        method:"POST",
        headers:HEADERS,
        body: JSON.stringify(reqData),
    });

    if(!res.ok){
        onFail();
        return;
    }

    const data= await res.json();
    onSuccess();

}

export const Delete = async(id, onSuccess, onFail) => {
    const url = getApiUser(id);
    const res= await fetch( url  ,{
        method:"DELETE",
        headers:HEADERS,
    });

    if(!res.ok){
        onFail();
        return;
    }

    const data= await res.json();
    onSuccess();

}


export const Update = async(id, payload, onSuccess, onFail) => {
    const url = getApiUser(id);
    const res= await fetch( url  ,{
        method:"PUT",
        headers:HEADERS,
        body: JSON.stringify(payload),
    });

    if(!res.ok){
        onFail();
        return;
    }

    const data= await res.json();
    onSuccess();

}