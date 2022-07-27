import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
//import getUsers from "../api/manager"
debugger

function createData(firstName, lastName, address, email, phone, hieght) {
  return { firstName, lastName, address, email, phone, hieght };
}

export default function BasicTable() {

    const [allUsers, setAllUsers] = useState([]);
    const [rows, setRows] = useState([]);


    useEffect(() => {
        fetch("https://pacific-headland-08901.herokuapp.com/users")
            .then((response) => {
                if (response.ok && response.status === 200) {
                    return response.json()
                }
            })
            .then(data => {
                setAllUsers(data)
                console.log(data)
            }).catch((error) => { console.log(error); alert(error) });

    }, [])

 //   useEffect(() => {
        setRows(
            allUsers.map((row) => (
                createData(row.firstName, row.lastName, row.address, row.email, row.phone, row.hieght)
            ))
        )
    //}, [allUsers])
    
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">firstName</TableCell>
            <TableCell align="right">lastName</TableCell>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">hieght</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows ? <div>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.firstName}
                            </TableCell>
                            <TableCell align="right">{row.lastName}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.hieght}</TableCell>
                          </TableRow>
                        ))}</div> : <div>null</div>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



