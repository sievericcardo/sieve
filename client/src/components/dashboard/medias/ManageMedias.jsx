import React, { useState } from 'react';

import AddMedia from './AddMedia';
import ListMedias from './ListMedias';

const ManageMedias = () => {

    const [ media, setMedia ] = useState({
        altText: "",
    });

    return (
        <>
            <AddMedia media={media} setMedia={setMedia} />
            <ListMedias media={media} setMedia={setMedia} />
        </>
    );
};

export default ManageMedias;