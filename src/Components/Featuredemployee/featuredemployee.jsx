import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Featuredemployee = (props) => {
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
      <Typography variant="h4" sx = {{color:'blue'}}>
       FEATURED EMPLOYEE
      </Typography>
      <Grid container spacing={1} sx={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:'2%'}}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={2.1} key={item}>
            <Paper
              sx={{ p: '20px', textAlign: 'center', height: 150, borderRadius: '20px' }}
            >
              <Typography variant="h6" component="div">
                Employee {item}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
};

export default Featuredemployee;
