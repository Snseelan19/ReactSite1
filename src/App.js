import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1D9A6C",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typograpy: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles ({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
})

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme} className={classes.wrapper}>
        <NavBar />
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: '#23242C', height: '125', width: '125'}}/>} title="Secure" btnTitle="Show More" />
          <Grid icon={<EventNoteIcon style={{fill: '#F7760F', height: '125', width: '125'}}/>} title="Reliable" btnTitle="Show More" />
          <Grid icon={<TrendingUpIcon style={{fill: '#268D70', height: '125', width: '125'}}/>} title="Performance" btnTitle="Show More" />
        </div>
        
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{fill: '#C3DA37', height: '125', width: '125'}}/>} title="Secure" btnTitle="Show More" />
          <Grid icon={<ComputerIcon style={{fill: '#0E4157', height: '125', width: '125'}}/>} title="Reliable" btnTitle="Show More" />
          <Grid icon={<HttpIcon style={{fill: '#F4BE43', height: '125', width: '125'}}/>} title="Performance" btnTitle="Show More" />
        </div>

        </ThemeProvider>
    </div>
  );
}

export default App;
