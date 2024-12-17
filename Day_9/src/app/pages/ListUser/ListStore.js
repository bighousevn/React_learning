import React, { useState } from 'react'

export default function ListStore() {
    const [ls,setLs]=useState([]);

    const updateLs = (ls) =>{
        setLs(ls);
    }
    return ls;
}
