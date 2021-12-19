import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@material-ui/core/Button";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { getSeries, filterSeries } from "../querys/series/series";
import Moment from "moment";
import TextFormField from "../components/TextFieldForm";

interface Series {
  id: string;
  series_name: string;
  created_date: string;
  modality: { name: string };
}

interface QueryData {
  seriesQuery: Series[];
}

interface QueryFilterData {
  findSeriesByModalityNameAndDate: Series[];
}

function PatientFunction() {
  useState();
  let { loading, error, data, refetch } = useQuery<QueryData>(getSeries);
  let filterResult = useQuery<QueryFilterData>(filterSeries, {
    variables: { name: "", startedDate: "", endDate: "" },
  });
  const [modalityNameState, setModalityName] = useState("");
  const [startDateState, setStartDate] = useState("");
  const [endDateState, setEndDate] = useState("");
  const [renderData, setRenderData] = useState(data?.seriesQuery);

  async function HandleFilterChanged() {
    let res = await filterResult.refetch({
      name: modalityNameState,
      startedDate: Moment(startDateState).format("yyyy-MM-DD"),
      endDate: Moment(endDateState).format("yyyy-MM-DD"),
    });
    setRenderData(res.data?.findSeriesByModalityNameAndDate);
  }

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
      <h1>Series</h1>
      <TableContainer component={Paper}>
        <div style={{ display: "flex", height: "9%" }}>
          <TextFormField
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={(e: any) => {
              setModalityName(e.target.value);
            }}
          />
          <TextFormField
            id="created_date"
            label="Start range"
            type="Date"
            onChange={(e: any) => {
              setStartDate(e.target.value);
            }}
          />
          <TextFormField
            id="end_date"
            label="End range"
            type="Date"
            onChange={(e: any) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
        <Button className="btn" onClick={() => HandleFilterChanged()}>
          Search
        </Button>
        <Button
          className="btn"
          onClick={async () => {
            let res = await refetch();
            setRenderData(res.data.seriesQuery);
          }}
        >
          Reset
        </Button>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Created date</StyledTableCell>
              <StyledTableCell align="right">Modality Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderData &&
              renderData.map((series) => (
                <StyledTableRow key={series.id}>
                  <StyledTableCell component="th" scope="row">
                    {series.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {series.series_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {Moment(parseInt(series.created_date)).format("DD-MM-yyyy")}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {series.modality.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PatientFunction;
