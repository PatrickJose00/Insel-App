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
import { getModalities } from "../querys/modality/modality";

interface Modality {
  id: string;
  name: string;
}

interface QueryData {
  modalities: Modality[];
}

function ModalityFunction() {

  useState();

  const { loading, error, data } = useQuery<QueryData>(getModalities);

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
      <h1>Modalities</h1>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.modalities.map((modality) => (
                <StyledTableRow key={modality.id}>
                  <StyledTableCell component="th" scope="row">
                    {modality.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {modality.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ModalityFunction;
