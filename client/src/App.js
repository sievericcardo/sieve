import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Routes from './routes';
import theme from './theme';

import NavigationScroll from './layout/NavigationScroll';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App" style={{ width: "100vw" }}>
        <BrowserRouter>
          <ThemeProvider theme={theme(customization)}>
            <CssBaseline />
            <ToastContainer />
            <NavigationScroll>
              <Routes />
            </NavigationScroll>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </StyledEngineProvider>
  )
}

export default App;
