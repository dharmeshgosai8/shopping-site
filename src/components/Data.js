import React, { useState, useEffect } from 'react';
import API from './../project.json';

// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);

function Data() {
    console.log(API);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(API)
                .then(res => res.json())
                .then(
                    (result) => {
                        //console.log(result);
                        // setIsLoaded(true);
                        setItems(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        console.log('error');
                        // setIsLoaded(true);
                        // setError(error);
                    }
                    )
                }, [])
    return [items];
}

export default Data;