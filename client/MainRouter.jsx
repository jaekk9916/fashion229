/*import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './auth/Signin.jsx'
import Profile from './user/Profile.jsx'
import Switch from 'react'
import PrivateRoute from 'react'
import EditProfile from 'react'
import Menu from 'react'
const MainRouter = () => {
return ( <div> 
<Routes>
        <Route exact path="/" element={<Home />} /> 
                <Route path="/users" component={Users} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/user/:userId" component={Profile} />
                <Menu/>
     <Switch>

<PrivateRoute path="/user/edit/:userId" component={EditProfile}/> 
<Route path="/user/:userId" component={Profile}/>
</Switch>
        
        
</Routes>
</div> 
)
}
export default MainRouter*/




import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import React from 'react'
//import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'
import Profile from './user/Profile.jsx'
import Switch from 'react'
import PrivateRoute from './lib/PrivateRoute.jsx'
import EditProfile from './user/EditProfile.jsx'
import Menu from './core/Menu'
function MainRouter() {
  return (
    <div>
      <Menu />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default MainRouter;
