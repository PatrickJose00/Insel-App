import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { getStudies } from "../querys/studies/studies";
import Moment from "moment";

interface Studies {
  id: string;
  study_name: string;
  created_date: string;
}

interface QueryData {
  studies: Studies[];
}

function StudiesFunction() {

  useState();

  const { loading, error, data } = useQuery<QueryData>(getStudies);

  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <h1>Studies</h1>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Study Name</StyledTableCell>
              <StyledTableCell align="right">Created date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.studies.map((study) => (
                <StyledTableRow key={study.id}>
                  <StyledTableCell component="th" scope="row">
                    {study.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {study.study_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {Moment(parseInt(study.created_date)).format(
                      "DD-MM-yyyy"
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StudiesFunction;
