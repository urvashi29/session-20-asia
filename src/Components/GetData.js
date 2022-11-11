import React, { useEffect, useState } from 'react'
import axios from "axios"

export const GetData = () => {
    const [state, setState] = useState({
        firstName: '',
    });

    const fetchData = async () => {
        const response = await axios.get(
            'https://api.fake-rest.refine.dev/users/1'
        );
        const result = await response;
        console.log(result.data);
        return result.data;
    };

    useEffect(() => {
        (async () => {
            const data = await fetchData();
            console.log(data);
            setState(data);
        })();
    }, []);

    <button data-testid="button-up"></button>
    return <div>{state.firstName}</div>;
};




// in es7 (asyn await)

// async function add() {
//     console.log(10 + 20);
//     return 10 + 20;
// }

// const r = await add();
// r.then(() => {

// }, () => {

// })

// async function subtract() {
//     console.log(10 + 20);
//     return 10 + 20;
// }

// const r = await subtract(); 

