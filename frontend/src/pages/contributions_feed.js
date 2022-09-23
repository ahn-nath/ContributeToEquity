import React from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'


const ContributionsFeed = () => {
  return (

    <div style={{padding: 20, margin: "auto", maxWidth: "1000px"}}>
      <h1>Contributions Feed page!</h1>
      <Card
        style={{
          width: 400,
          backgroundColor: "white",
          minWidth: "1000px",
          padding: 20
        }}
      >
        <CardContent>
          <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
            Link: Available open source project
          </Typography>

          <Typography variant="h5" component="h2">
            Project repository name
          </Typography>

          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis.
          </Typography>

      


        </CardContent>

        <CardActions style={{textAlign: "right"}}>
          <Button size="medium" style={{backgroundColor: "#b80c09", color: "white" }}>Contribute to project</Button>
        </CardActions>

      </Card>
    </div>

  );
};

export default ContributionsFeed;