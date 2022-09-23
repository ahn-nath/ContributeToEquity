import React from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

// props and API
import { useEffect, useState } from 'react';


const ContributionsFeedInProgress = () => {
  // parameters
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const user_id = 1 // TODO: replace with id of authenticated user

  // fecth items to render as cards
  useEffect(() => {
    // make request to get user's contrubutions in progress
    fetch("/api/github/" + user_id) // /api/user/contributions
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.repos);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  // verify/validate open source contribution and send thanks message
  const handleClick = (event, param) => {
    console.log(event);
    console.log(param);
  };


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  else {
    return (
      // main wrapper
      <div style={{ padding: 20, margin: "auto", maxWidth: "1000px" }}>
        <h1>Contributions In Progress Feed page!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.</p>
        {items.map(item => (
          // each repository
          <div style={{ padding: 20, margin: "auto", maxWidth: "1000px" }}>

            <Card
              style={{
                width: 400,
                backgroundColor: "#f9f9f9",
                minWidth: "1000px",
                padding: 20
              }}
            >
              <CardContent>
                <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                  Link: <a color='textSecondary' href='{item.link}'>{item.link}</a>
                </Typography>

                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>

                <Typography
                  style={{
                    marginBottom: 12,
                    marginTop: 20
                  }}
                  color="textSecondary"
                >
                  {item.description}
                </Typography>
                {
                  // use GitHub API to verify contributionand send thanks message and use Amplify API to list representatives with Twitter accounts
                  <CardActions style={{ padding: 0 }}>

                    <Button onClick={event => handleClick(event, 'hello world')} size="medium" style={{ backgroundColor: "#b80c09", color: "white" }}>Verify contribution</Button>
                    
                    <Button onClick={event => handleClick(event, 'hello world')} size="medium" style={{ backgroundColor: "#b7b5b3", color: "black" }}>Share with representative</Button>

                  </CardActions>
                }


              </CardContent>
            </Card>
          </div>

        ))}

      </div>

    );
  }

};

export default ContributionsFeedInProgress;