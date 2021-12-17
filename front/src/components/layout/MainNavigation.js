import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "./styles";


function MainNavigation() {
  const classes = useStyles();

  const MyApp = (
    <Typography variant="h6" component="h1"  button='/'>
        <RouterLink to='/' className={classes.logo}>MyApp</RouterLink>
    </Typography>
  );

  const headersData = [
    {
      label: "Patients",
      href: "/patients",
    },
    {
      label: "Studies",
      href: "/studies",
    },
    {
      label: "Modalities",
      href: "/modalities",
    },
    {
      label: "Series",
      href: "/series",
    },
  ];

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {MyApp}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={classes.header}>{displayDesktop()}</AppBar>
    </header>
  );
}

export default MainNavigation;
