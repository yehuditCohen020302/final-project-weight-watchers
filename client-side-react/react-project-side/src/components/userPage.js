import { getUserById } from "../api/user.js";
import {
  FormLabel,
  Input,
  Table,CssBaseline,Container
} from "@mui/material";
import {  useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from "@mui/material/TextField";


export function UserPage() {
  const { _id } = useParams();

  const history = useHistory();

  function passDiary() {
    history.push(`/${_id}/diary`);
  }

  useEffect(() => {
    getUserById(_id);
  });

  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed>
  
      <Card  sx={{ maxWidth: 400 , bgcolor: '#cfe8fc', height: '100vh'}}>
        <CardActionArea id="card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              User Details:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <FormLabel>id:</FormLabel>
              <TextField id="userId" placeholder="userId" disabled /><br/>
              <FormLabel>first Name:</FormLabel>
              <TextField id="firstName" placeholder="FirstNme"  disabled/><br/>
              <FormLabel>last Name:</FormLabel>
              <TextField id="lastName" placeholder="LastName "  disabled/><br/>
              <FormLabel>city:</FormLabel>
              <TextField id="city" placeholder="city"  disabled/><br/>
              <FormLabel>street:</FormLabel>
              <TextField id="street" placeholder=" street"  disabled/><br/>
              <FormLabel>house Number:</FormLabel>
              <TextField id="houseNumber" placeholder="Email"  disabled/><br/>
              <FormLabel>phone Number:</FormLabel>
              <TextField id="phoneNumber" placeholder="phoneNumber"  disabled/><br/>
              <FormLabel>email Address:</FormLabel>
              <TextField id="emailAddress" placeholder="emailAddress"  disabled/><br/>
              <FormLabel>height:</FormLabel>
              <TextField id="height" placeholder="height"  disabled/>
              <FormLabel>Weights:</FormLabel>
              <Table>
                <thead>
                  <tr>
                    <th>-date-</th>
                    <th>-weight-</th>
                  </tr>
                </thead>
                <tbody id="weights"></tbody>
              </Table>
              <FormLabel>BMI</FormLabel>
              <Input type="number" id="BMI" disabled/>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" className="btnToDiary" onClick={() => passDiary()} >
            Enter to show your diary
          </Button>
        </CardActions>
      </Card>
      </Container>
  </React.Fragment>
  );
}
