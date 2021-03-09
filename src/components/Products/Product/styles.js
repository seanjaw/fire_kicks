  
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2)
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  height: {
    minHeight: '100px'
  }
}));