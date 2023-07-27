import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AllInclusive } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

import { getProject } from '../../hooks/projectHooks';
import DynamicLoader from '../ui/DynamicLoader';

const Root = styled('div')({
  backgroundColor: 'rgba(50, 115, 220, 0.8)',
  marginTop: '1.4rem',
  marginBottom: '1rem',
  padding: '1rem',
  width: '80vw',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Project = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call or any asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 3-second loading time
  }, []);

  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(id).then((data) => {
      setProject(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root>
      {isLoading ? (
        <DynamicLoader />
      ) : (
        <>
        <Typography variant="h4"><AllInclusive /> {project.name}</Typography>
        <Typography variant="subtitle1">{project.description}</Typography>
        <ReactMarkdown>{ decodeURIComponent(escape(project.body)) }</ReactMarkdown>
        </>
      )}
    </Root>
  );
};

export default Project;