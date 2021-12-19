import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@material-ui/core/Button";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import FormDialog from "../components/FormDialog";
import TextFormField from "../components/TextFieldForm";
import { getPatients, updatePatientMutation } from "../querys/patient/querys";
import Moment from "moment";

interface Patient {
  id: string;
  name: string;
  created_date: string;
}

interface QueryData {
  patients: Patient[];
}

function PatientFunction() {
  useState();

  const [isOpen, setIsOpen] = useState(false);

  const [selectedRow, setSelectedRow] = useState({} as Patient);

  const [updatePatient] = useMutation<
    { updatePatient: Patient },
    { updatePatientId: number; name: string; createdDate: string }
  >(updatePatientMutation);

  function handleCancel() {
    setIsOpen(false);
  }

  async function handleSubmit() {
    let payload = {
      variables: {
        updatePatientId: parseInt(selectedRow.id),
        name: selectedRow.name,
        createdDate: Moment(parseInt(selectedRow.created_date)).format(
          "yyyy-MM-DD"),
      },
    };
    await updatePatient(payload);
    refetch();
    setIsOpen(false);
  }

  const handleDialogOpen = (selected: any) => {
    setSelectedRow(selected);
    setIsOpen(true);
  };

  const handleNameChanged = (name: any) => {
    setSelectedRow({
      id: selectedRow.id,
      name,
      created_date: selectedRow.created_date,
    });
  };

  const handleDateChanged = (created_date: any) => {
    setSelectedRow({
      id: selectedRow.id,
      name: selectedRow.name,
      created_date: Moment(created_date).valueOf().toString(),
    });
  };

  const { loading, error, data, refetch } = useQuery<QueryData>(getPatients);

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
      <h1>Patients</h1>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Created date</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.patients.map((patient) => (
                <StyledTableRow key={patient.id}>
                  <StyledTableCell component="th" scope="row">
                    {patient.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {patient.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {Moment(parseInt(patient.created_date)).format(
                      "DD-MM-yyyy"
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      className="btn"
                      color="primary"
                      onClick={() => handleDialogOpen(patient)}
                    >
                      Update
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {isOpen && (
          <FormDialog
            title="Update Patient"
            open={isOpen}
            titleButtonLeft="Cancel"
            titleButtonRight="Update"
            handleCancel={handleCancel}
            handleUpdate={handleSubmit}
          >
            <div>
              <TextFormField
                id="name"
                label="name"
                type="text"
                value={selectedRow.name}
                onChange={(e: any) => {
                  handleNameChanged(e.target.value);
                }}
              />
              <TextFormField
                id="created_date"
                label="created_date"
                type="Date"
                value={Moment(parseInt(selectedRow.created_date)).format(
                  "yyyy-MM-DD"
                )}
                onChange={(e: any) => {
                  handleDateChanged(e.target.value);
                }}
              />
            </div>
          </FormDialog>
        )}
      </div>
    </div>
  );
}

export default PatientFunction;
