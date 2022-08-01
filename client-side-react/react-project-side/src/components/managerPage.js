import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  { useState, useEffect } from 'react';
import getUsers from "../api/manager"
import { ClickAwayListener } from '@mui/material';
debugger

function createData(firstName, lastName, address, email, phone, hieght) {
    return { firstName, lastName, address, email, phone, hieght };
}

export default async function  BasicTable() {

     const [allUsers, setAllUsers] = useState([]);
    const [rows, setRows] = useState([]);
    const [rows11, setRows11] = useState("");
    // try { setAllUsers(getUsers); }
    // catch (e) { console.error(e); }
    var users =await getUsers();
console.log(rows11+" rows")
    console.log(users);
    debugger
    users.length!==0?setRows11(
        // ()=>{
        //     users.map((row) => (
        //     createData(row.firstName, row.lastName, row.address, row.email, row.phone, row.hieght)
        // ))}
        "jjj"
    ):<></>

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
                    {rows.length!==0 ? <div>
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



