import React, { useState, useEffect } from "react";

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Media from "./Media";
import { getMedias } from "../../../hooks/mediaHooks";

const PREFIX = "DashboardListMedias";
const classes = {
  mediaStyle: `${PREFIX}-mediaStyle`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.mediaStyle}`]: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: '#fff',
    color: '#000',
    marginTop: '0.2em',
  },
}));

const ListMedias = ({ setMedia }) => {
  const [medias, setMedias] = useState();

  var length = 0;

  // Use Effect will be called when our components renders
  useEffect(() => {
    getMedias().then((data) => {
      setMedias(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!medias) {
    length = 0
  } else {
    length = medias.length
  }

  return (
    <>
      <Root className={classes.mediaStyle}>
        <Typography variant="h5">
          {length > 0 ? "My medias" : "No media yet"}
        </Typography>
        {medias &&
          medias.map((media) => {
            return (
              <Media
                media={media}
                key={media._id}
                setMedia={setMedia}
              />
            );
          })}
      </Root>
    </>
  );
};

export default ListMedias;
