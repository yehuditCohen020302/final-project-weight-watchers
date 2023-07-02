import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import axios from "axios";
import Stack from "@mui/material/Stack";

function createData(
  _id,
  firstName,
  lastName,
  city,
  street,
  number,
  email,
  phone,
  height
) {
  return {
    _id,
    firstName,
    lastName,
    city,
    street,
    number,
    email,
    phone,
    height,
  };
}

export function BasicTable() {
  const history = useHistory();

  const [allUsers, setAllUsers] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [inputFirstNme] = React.useState("");
  const [inputLastName] = React.useState("");
  const [inputAddress] = React.useState("");
  const [inputPhone] = React.useState("");
  const [inputEmail] = React.useState("");
  const [inputHight] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addUser = async () => {
    const dataUser = {
      firstNme: inputFirstNme.current?.value,
      lastName: inputLastName.current?.value,
      address: inputAddress.current?.value,
      phone: inputPhone.current?.value,
      emailAddress: inputEmail.current?.value,
      hight: inputHight.current?.value,
    };
    console.log(dataUser);
    try {
      const res = await axios.post(`http://localhost:3000/users/`, dataUser);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      var response = await fetch(`http://localhost:3000/users`);
      if (response.status === 200 && response.ok) {
        var data = await response.json();
      }
      setAllUsers(data);
    };
    getUsers();
  }, []);

  const newRow = [];

  allUsers.map((row) =>
    newRow.push(
      createData(
        row._id,
        row.firstName,
        row.lastName,
        row.city,
        row.street,
        row.houseNumber,
        row.emailAddress,
        row.phoneNumber,
        row.height
      )
    )
  );
  console.log(newRow);

  function passUser(_id) {
    history.push(`/userPage/${_id}`);
  }

  async function deleteUser(_id) {
    console.log("try to delete");
    try {
      console.log(`delete user: ${_id}`);
      return await axios.delete(`http://localhost:3000/users/${_id}`);
    } catch (error) {
      console.log(error);
    }
  }

  // async function addUser() {
  //   console.log("try to add new user");
  //   AddNewUser();
  // }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"> - - - </TableCell>
            <TableCell align="center">firstName</TableCell>
            <TableCell align="center">lastName</TableCell>
            <TableCell align="center">city</TableCell>
            <TableCell align="center">street</TableCell>
            <TableCell align="center">houseNumber</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">phone</TableCell>
            <TableCell align="center">height</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newRow.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Button onClick={() => passUser(row._id)}>Show details</Button>
                <Button onClick={() => deleteUser(row._id)}>Delete user</Button>
              </TableCell>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.street}</TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.height}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Button onClick={() => addUser()}>Add new user</Button> */}

      <div>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              handleClickOpen();
            }}
          >
            Click to Add user
          </Button>
        </Stack>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add new user</DialogTitle>
          <DialogContent>
            <DialogContentText>
              please enter your details here. We will send updates occasionally.
            </DialogContentText>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  inputRef={inputFirstNme}
                  label="enter first name"
                  placeholder="FirstNme"
                  variant="standard"
                />
                <TextField
                  inputRef={inputLastName}
                  label="enter last name"
                  placeholder="LastName "
                  variant="standard"
                />
                <TextField
                  inputRef={inputAddress}
                  label="enter address "
                  placeholder="Address"
                  variant="standard"
                />
                <TextField
                  inputRef={inputPhone}
                  label="Phone"
                  placeholder=" Phone"
                  variant="standard"
                />
                <TextField
                  inputRef={inputEmail}
                  label="enter Email"
                  placeholder="Email"
                  variant="standard"
                />
                {/* <TextField inputRef={inputCommunicationDetails}label="enter CommunicationDetails "placeholder="CommunicationDetails system" variant="standard" /> */}
              </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={addUser}>enter to add</Button>
          </DialogActions>
        </Dialog>
      </div>
    </TableContainer>
  );
}
