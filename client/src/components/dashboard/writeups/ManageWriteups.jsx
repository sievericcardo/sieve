import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import AddWriteup from '../writeups/AddWriteup';
import ListWriteups from '../writeups/ListWriteups';

const ManageWriteups = () => {
    const auth = useSelector(state => state.auth);

    const [ writeup, setWriteup ] = useState({
        name: "",
        platform: "",
        body: "",
    });

    if(!auth._id) {
        return <Navigate to="/auth/signin" />
    }

    return (
        <>
            <AddWriteup writeup={writeup} setWriteup={setWriteup} />
            <ListWriteups writeup={writeup} setWriteup={setWriteup} />
        </>
    );
};

export default ManageWriteups;
