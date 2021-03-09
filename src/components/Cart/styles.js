import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        margin: '60px 0px 60px 0px'
    },
    table: {
        minWidth: 650,
      },
    total: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px 20px 10px 20px',
        fontSize: '30px'
    },
    pay: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    head: {
      color: theme.palette.primary.light,
    },
    button: {
      float: "right",
      margin: "20px"
    },
    cell: {
      fontWeight: 600
    },
    row: {
      height: '60px'
    },
    empty: {
      display: 'flex',
      justifyContent: 'center',
      padding: '60px',
      fontSize: '30px'
    }
  }));
