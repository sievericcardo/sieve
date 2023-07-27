import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AllInclusive } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

import { getArticle } from '../../hooks/articleHooks';
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

const Article = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call or any asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 3-second loading time
  }, []);

  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(id).then((data) => {
      setArticle(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root>
      {isLoading ? (
        <DynamicLoader />
      ) : (
        <>
          <Typography variant="h4"><AllInclusive /> {article.name}</Typography>
          <Typography variant="subtitle1">{article.description}</Typography>
          <ReactMarkdown>{ decodeURIComponent(escape(article.body)) }</ReactMarkdown>
        </>
      )}
    </Root>
  );
};

export default Article;