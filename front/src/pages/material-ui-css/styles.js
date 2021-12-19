import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  divFlexFloatLeft: {
    display: "flex",
    float: "left",
  },
  divFlexFloatRight: {
    display: "flex",
    float: "right",
  },
  buttonCreateMargin : {
    marginRight: "14px"
  },
  seriesInputes: {
    display: "flex",
  }

}));

export { useStyles };
