import { BE_ENPOINT } from "../../../settings/localVar";

const KEY = "1234"
const HEADERS = {
    // "Content-Type" : "application/json",
    // accept: "application/json",
    key: KEY,
};


export const get = async( onSuccess, onFail) => {
    const res= await fetch(BE_ENPOINT  ,{
        method:"GET",
        headers:HEADERS,
    });

    if(!res.ok){
        onFail();
        return;
    }

    const data= await res.json();
    onSuccess(data);

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
    const res= await fetch(BE_ENPOINT ,{
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

export const Delete = async(id, onSuccess, onFail) => {
    const res= await fetch(BE_ENPOINT  ,{
        method:"DELETE",
        headers:HEADERS,
        id
    });

    if(!res.ok){
        onFail();
        return;
    }

    const data= await res.json();
    onSuccess(data);

}