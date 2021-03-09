import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    header: {
        backgroundColor: theme.palette.info.light
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer',
        textDecoration: 'none'
    },

  }));
