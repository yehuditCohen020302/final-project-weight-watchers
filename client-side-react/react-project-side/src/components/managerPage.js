// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
// import getUsers from "../api/manager"
// import { ClickAwayListener } from '@mui/material';

function createData(firstName, lastName, city, street, number, email, phone, hieght) {
    return { firstName, lastName, city, street, number, email, phone, hieght };
}

export default function BasicTable() {

    const [allUsers, setAllUsers] = useState([]);
    // const [rows, setRows] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            var response = await fetch(`http://localhost:3000/users`)
            if (response.status === 200 && response.ok) {
                var data = await response.json()
            }
            setAllUsers(data);
        }
        getUsers()
    }, []);
 
    console.log(allUsers);

    const newRow = []
    debugger
    allUsers.map((row) => (
        newRow.push(createData(row.firstName, row.lastName, row.city, row.street, row.houseNumber, row.emailAddress, row.phoneNumber, row.height))
    ))
    console.log(newRow)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">firstName</TableCell>
                        <TableCell align="center">lastName</TableCell>
                        <TableCell align="center">city</TableCell>
                        <TableCell align="center">street</TableCell>
                        <TableCell align="center">houseNumber</TableCell>
                        <TableCell align="center">email</TableCell>
                        <TableCell align="center">phone</TableCell>
                        <TableCell align="center">hieght</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {newRow.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            {/* <TableCell component="th" scope="row">
                                {row.firstName}
                            </TableCell> */}
                            <TableCell align="center">{row.firstName}</TableCell>
                            <TableCell align="center">{row.lastName}</TableCell>
                            <TableCell align="center">{row.city}</TableCell>
                            <TableCell align="center">{row.street}</TableCell>
                            <TableCell align="center">{row.number}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{row.hieght}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}



