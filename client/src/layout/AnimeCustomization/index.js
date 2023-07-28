import { useAnimeContext } from '../../context/AnimeContext';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Fab,
  IconButton,
  Tooltip,
} from '@mui/material';
import { IconSettings } from '@tabler/icons';

// project imports
import AnimateButton from '../../components/ui/extended/AnimateButton';

const AnimeCustomization = () => {
  const theme = useTheme();
  const { setAnimeState } = useAnimeContext();

  const toggleAnimeLayout = () => {
    setAnimeState((prevState) => !prevState);
  };

  

  return (
    <>
      {/* toggle button */}
      <Tooltip title="Weeb style">
        <Fab
          component="div"
          onClick={toggleAnimeLayout}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
              borderRadius: 0,
              borderTopLeftRadius: '50%',
              borderBottomLeftRadius: '50%',
              borderTopRightRadius: '50%',
              borderBottomRightRadius: '4px',
              top: '25%',
              position: 'fixed',
              right: 10,
              zIndex: theme.zIndex.speedDial
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>
    </>
  );
};

export default AnimeCustomization;
