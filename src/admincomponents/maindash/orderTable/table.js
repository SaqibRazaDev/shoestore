import "./table.css"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function createData(name, trackingid, date , status) {
  return { name, trackingid, date , status };
}

const rows = [
  createData('Juicer Blender',942898, "2 March 2023", "Pending"),
  createData('Sandwich Maker', 42787, "2 March 2023", "Approved"),
  createData('Electric Kettle', 812748,  "2 March 2023", "Reject"),
  createData('King Foam ', 124787, "2 March 2023", "Approved"),
  createData('Wooden Chair', 48771,  "2 March 2023","Delivered"),
];

const makestyle = (status)=>{
    if(status == "Pending"){
        return{
            background:"rgb(45, 0, 206)",
            color : "#fff",
            width: "fit-content",
        }
    }
    if(status == "Approved"){
        return{
            background:"rgb(4, 170, 54)",
            color : "#fff",
            width: "fit-content",
        }
    }
    if(status == "Reject"){
        return{
            background:"rgb(194, 8, 8)",
            color : "#fff",
            width: "fit-content",
        }
    }
    if(status == "Delivered"){
        return{
            background:"rgb(236, 201, 0)",
            color : "#fff",
            width: "fit-content",
        }
    }
}

export  function OrderTable() {
  return (
<div className='table'>
    <h2>Recent Orders</h2>
    <TableContainer component={Paper}
    style={
        {boxShadow : "0px 2px 8px blue"}
    }
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead 
            style={
                {
                    fontSize:'50px',
                    boxShadow : "0px 0px 8px blue"
                }
            }
        >
          <TableRow>
            <TableCell>Our Products</TableCell>
            <TableCell align="left">TrackingID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingid}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left" style={makestyle(row.status)}><span>{row.status}</span></TableCell>
              <TableCell align="left" style={{color:"blue"}}><Link>Details</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
  );
}