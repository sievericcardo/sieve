import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import AddArticle from '../articles/AddArticle';
import ListArticles from '../articles/ListArticles';

const ManageArticles = () => {
    const auth = useSelector(state => state.auth);

    const [ article, setArticle ] = useState({
        name: "",
        body: "",
        author: "Riccardo",
    });

    // if(!auth._id) {
    //     return <Navigate to="/signin" />
    // }

    return (
        <>
            <AddArticle article={article} setArticle={setArticle} />
            <ListArticles article={article} setArticle={setArticle} />
        </>
    );
};

export default ManageArticles;
