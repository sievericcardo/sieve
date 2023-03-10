import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AllInclusive } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

import { getProject } from '../../hooks/projectHooks';

const Root = styled('div')({
  backgroundColor: 'rgba(50, 115, 220, 0.1)',
  marginTop: '1.4rem',
  marginBottom: '1rem',
  padding: '1rem',
  width: '80vw',
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: '90vh',
});

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(id).then((data) => {
      setProject(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root>
      <Typography variant="h4"><AllInclusive /> {project.name}</Typography>
      <Typography variant="body2">{project.description}</Typography>
      <ReactMarkdown>{ decodeURIComponent(escape(project.body)) }</ReactMarkdown>
    </Root>
  );
};

export default Project;