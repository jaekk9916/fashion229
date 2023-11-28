/*export default function Shop({match}) { 
const [shop, setShop] = useState('') 
const [error, setError] = useState('')
useEffect(() => {
const abortController = new AbortController() 
const signal = abortController.signal
read({
shopId: match.params.shopId 
}, signal).then((data) => {
if (data.error) { 
setError(data.error)} else { 
setShop(data)
} 
})
return function cleanup(){ 
abortController.abort()
}
}, [match.params.shopId])
... 
}
<CardContent>
<Typography type="headline" component="h2"> 
{shop.name}
</Typography><br/>
<Avatar src={logoUrl}/><br/>
<Typography type="subheading" component="h2"> 
{shop.description}
</Typography><br/> 
</CardContent>
const logoUrl = shop._id
? `/api/shops/logo/${shop._id}?${new Date().getTime()}` 
: '/api/shops/defaultphoto'*/

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Mock API read function
const read = async ({ shopId }, signal) => {
  // Mock API call
  return {
    name: 'Shop Name',
    description: 'Shop Description',
    _id: 'shop123'
  };
};

function App() {
  return (
    <Router>
      <Route path="/shops/:shopId" component={Shop} />
    </Router>
  );
}

export default App;

function Shop({ match }) {
  const [shop, setShop] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read({ shopId: match.params.shopId }, signal)
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setShop(data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to fetch shop data.');
      });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.shopId]);

  const logoUrl = shop._id
    ? `/api/shops/logo/${shop._id}?${new Date().getTime()}`
    : '/api/shops/defaultphoto';

  return (
    <CardContent>
      <Typography variant="h6" component="h2">
        {shop.name}
      </Typography>
      <br />
      <Avatar src={logoUrl} />
      <br />
      <Typography variant="subtitle1" component="h2">
        {shop.description}
      </Typography>
      <br />
    </CardContent>
  );
}
