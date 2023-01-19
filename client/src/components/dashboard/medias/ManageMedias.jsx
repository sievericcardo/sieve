import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import AddMedia from '../medias/AddMedia';
import ListMedias from '../medias/ListMedias';

const ManageMedias = () => {
    const auth = useSelector(state => state.auth);

    const [ media, setMedia ] = useState({
        altText: "",
    });

    // if(!auth._id) {
    //     return <Navigate to="/signin" />
    // }

    return (
        <>
            <AddMedia media={media} setMedia={setMedia} />
            <ListMedias media={media} setMedia={setMedia} />
        </>
    );
};

export default ManageMedias;