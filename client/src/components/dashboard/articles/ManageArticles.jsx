import React, { useState } from 'react';

import AddArticle from '../articles/AddArticle';
import ListArticles from '../articles/ListArticles';

const ManageArticles = () => {

    const [ article, setArticle ] = useState({
        name: "",
        body: "",
        author: "Riccardo",
    });

    return (
        <>
            <AddArticle article={article} setArticle={setArticle} />
            <ListArticles article={article} setArticle={setArticle} />
        </>
    );
};

export default ManageArticles;
