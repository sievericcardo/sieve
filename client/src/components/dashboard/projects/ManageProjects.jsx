import React, { useState } from 'react';

import AddProject from '../projects/AddProject';
import ListProjects from '../projects/ListProjects';

const ManageProjects = () => {

    const [ project, setProject ] = useState({
        name: "",
        body: "",
        author: "Riccardo",
    });

    return (
        <>
            <AddProject project={project} setProject={setProject} />
            <ListProjects project={project} setProject={setProject} />
        </>
    );
};

export default ManageProjects;
