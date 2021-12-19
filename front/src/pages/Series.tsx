import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { getSeries, filterSeries } from "../querys/series/series";
import Moment from "moment";
import TextFormField from "../components/TextFieldForm";
import { useStyles } from "./material-ui-css/styles";

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

function SeriesFunction() {
  useState();

  const classes = useStyles();

  let { loading, error, data, refetch } = useQuery<QueryData>(getSeries);
  const [renderData, setRenderData] = useState(data?.seriesQuery);

  function getData() {
    if (renderData === undefined) {
      setRenderData(data?.seriesQuery);
    }
    return renderData;
  }

  const [modalityNameState, setModalityName] = useState("");
  const [startDateState, setStartDate] = useState("");
  const [endDateState, setEndDate] = useState("");

  async function HandleFilterChanged() {
    let res = await filterResult.refetch({
      name: modalityNameState,
      startedDate: Moment(startDateState).format("yyyy-MM-DD"),
      endDate: Moment(endDateState).format("yyyy-MM-DD"),
    });
    setRenderData(res.data?.findSeriesByModalityNameAndDate);
  }

  let filterResult = useQuery<QueryFilterData>(filterSeries, {
    variables: { name: "", startedDate: "", endDate: "" },
  });

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
        <h1>Series</h1>
      </div>
      <div>
        <div className={classes.divFlexFloatRight}>
          <Button
            variant="contained"
            color="success"
            style={{marginRight:10}}
            onClick={() => HandleFilterChanged()}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={async () => {
              let res = await refetch();
              setRenderData(res.data.seriesQuery);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <div className={classes.seriesInputes}>
          <TextFormField
            id="Modality"
            label="Modality"
            type="text"
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
            {getData()?.map((series) => (
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

export default SeriesFunction;
