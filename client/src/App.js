// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Routes from './routes';
import theme from './theme';

import NavigationScroll from './layout/NavigationScroll';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

// Authentication
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

// Pages
import Home from './components/pages/Home';
import Writeup from './components/pages/Writeup';
import DisplayWriteups from './components/pages/DisplayWriteups';

// Navigation components
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';

// Backend pages
import Dashboard from './components/dashboard/Dashboard';
import Chart from './components/dashboard/Chart';
import Sidebar from './components/dashboard/Sidebar';
import ManageMedias from './components/dashboard/medias/ManageMedias';
import ManageProjects from './components/dashboard/projects/ManageProjects';
import ManageArticles from './components/dashboard/articles/ManageArticles';
import ManageWriteups from './components/dashboard/writeups/ManageWriteups';

// import { Container, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import { loadUser } from './store/actions/authActions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const customization = useSelector((state) => state.customization);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  // const DashboardContainer = ({ match }) => (
  //   <div className="content">
  //     <Dashboard />
  //     <div>
  //       <Sidebar />
  //       <main className='cont'>
  //         <div className='appBarSpacer' />
  //         <Container maxWidth="lg" className='container'>
  //           <Routes>
  //             <Route exact path={match.url} element={Chart} />
  //             <Route path={match.url + "/manage-medias"} element={ManageMedias} />
  //             <Route path={match.url + "/manage-projects"} element={ManageProjects} />
  //             <Route path={match.url + "/manage-articles"} element={ManageArticles} />
  //             <Route path={match.url + "/manage-writeups"} element={ManageWriteups} />
  //           </Routes>
  //         </Container>
  //       </main>
  //     </div>
  //   </div>
  // )

  // const DefaultContainer = () => (
  //   <div className="content">
  //     <Navbar />
  //     <Container className='page-content' maxWidth="false">
  //       <Routes>
  //         <Route path="/signin" element={<SignIn />} />
  //         <Route path="/signup" element={<SignUp />} />
  //         <Route path="/writeups" element={<DisplayWriteups />} />
  //         <Route path="/writeups/:id" element={<Writeup />} />
  //         <Route path="/" element={<Home />} />
  //         {/* <Route path="/" exact element={Articles} /> */}
  //       </Routes>
  //     </Container>
  //     <Footer />
  //   </div>
  // )

  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <ToastContainer />
  //       <Routes>
  //         <Route path="/cms-dashboard/*" element={<DashboardContainer />}/>
  //         <Route exact path="/" element={<DefaultContainer />}/>
  //         <Route exact path="/signin/*" element={<DefaultContainer />}/>
  //         <Route exact path="/signup/*" element={<DefaultContainer />}/>
  //         <Route exact path="/writeups" element={<DefaultContainer />}/>
  //         <Route exact path="/writeups/:id" element={<DefaultContainer />}/>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
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
