import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './component/Context/AuthProvider';
import AboutUs from './component/Pages/About Us/AboutUs';
import Contact from './component/Pages/Contact/Contact';
import FooterSection from './component/Pages/Footer/FooterSection';
import Header from './component/Pages/Header/Header';
import Home from './component/Pages/Home/Home';
import Login from './component/Pages/Login/Login';
import UnavailabePage from './component/Pages/NotFound/UnavailabePage';
import PrivateRoute from './component/Pages/PrivateRoute/PrivateRoute';
import Research from './component/Pages/Research/Research';
import ServiceDetails from './component/Pages/Service/ServiceDetails';
function App() {

  return (
    <div>
      
        <AuthProvider>
          
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>

          <PrivateRoute path="/research">
           <Research></Research>
          </PrivateRoute>
          
          <PrivateRoute path="/contact">
           <Contact></Contact>
          </PrivateRoute>

          <PrivateRoute path="/serviceDetails/:serviceID">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <Route path="*">
          <UnavailabePage></UnavailabePage>
          </Route>
          
        </Switch>
        <FooterSection></FooterSection>
      </BrowserRouter>
      
        </AuthProvider>
 
    </div>
  );


}

export default App;
