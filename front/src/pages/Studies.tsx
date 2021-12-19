import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { getStudies, createStudyMutation } from "../querys/studies/studies";
import Moment from "moment";
import Button from '@mui/material/Button';
import TextFormField from "../components/TextFieldForm";
import FormDialog from "../components/FormDialog";
import { useStyles } from "./material-ui-css/styles";


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

  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const { loading, error, data, refetch } = useQuery<QueryData>(getStudies);

  const [selectedRow, setSelectedRow] = useState({} as Studies);

  function handleCancel() {
    setIsOpen(false);
  }

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const [createStudy] = useMutation<
    { createStudy: Studies },
    { studyName: string; createdDate: string }
  >(createStudyMutation);

  async function handleSubmit() {
    await createStudy({
      variables: {
        studyName: selectedRow.study_name,
        createdDate: Moment(parseInt(selectedRow.created_date)).format(
          "yyyy-MM-DD"
        ),
      },
    });
    refetch();
    setIsOpen(false);
  }

  const handleNameChanged = (study_name: any) => {
    setSelectedRow({
      id: selectedRow.id,
      study_name,
      created_date: selectedRow.created_date,
    });
  };

  const handleDateChanged = (created_date: any) => {
    setSelectedRow({
      id: selectedRow.id,
      study_name: selectedRow.study_name,
      created_date: Moment(created_date).valueOf().toString(),
    });
  };

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
      <div className={classes.divFlexFloatLeft}>
        <h1>Studies</h1>
      </div>
      <div className={classes.divFlexFloatRight}>
      <Button
          variant="contained"
          onClick={() => handleDialogOpen()}
        >
          Create
        </Button>
      </div>
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
                    {Moment(parseInt(study.created_date)).format("DD-MM-yyyy")}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {isOpen && (
          <FormDialog
            title="Create Study"
            open={isOpen}
            titleButtonLeft="Cancel"
            titleButtonRight="Create"
            handleCancel={handleCancel}
            handleUpdate={handleSubmit}
          >
            <div>
              <TextFormField
                id="name"
                label="name"
                type="text"
                value={selectedRow.study_name}
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

export default StudiesFunction;
