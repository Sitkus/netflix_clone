import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: 'calc(100vh - 190px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    '@media screen and (min-width: 768px)': {
      minHeight: 'calc(100vh - 140px)',
      padding: '0 40px'
    },
    '@media screen and (min-width: 1200px)': {
      //
    }
  },
  mainWithForm: {
    alignItems: 'center'
  },
  mainMovie: {
    '@media screen and (min-width: 1200px)': {
      flexWrap: 'nowrap',
      alignItems: 'center'
    }
  },

  /**
   * Home
   */
  movies: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    padding: '30px 0'
  },
  button: {
    alignSelf: 'center',
    marginBottom: '50px'
  },

  /**
   * Form
   */
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ccc',
    color: theme.palette.primary.main,
    borderRadius: '4px',
    maxWidth: '400px',
    padding: '50px'
  },
  label: {
    flex: '0 0 100%',
    marginBottom: '3px'
  },
  input: {
    flex: '0 0 100%',
    marginBottom: '20px',
    padding: '10px 15px',
    outline: 'none',
    border: 'none',
    '&:focus': {
      boxShadow: `inset 0 0 0 2px green`
    }
  },
  error: {
    flex: '0 0 100%',
    marginBottom: '20px',
    color: theme.palette.secondary.main
  },

  /**
   * Movie
   */
  movieImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    padding: '50px 50px 0',
    '@media screen and (min-width: 1200px)': {
      width: '40%',
      height: '100%',
      alignSelf: 'flex-start',
      padding: '50px'
    }
  },
  movieContent: {
    alignSelf: 'flex-start',
    padding: '50px'
  },
  movieTitle: {
    marginBottom: '5px'
  },
  movieDescription: {
    marginBottom: '15px'
  },
  movieButton: {
    marginRight: '15px'
  },
  favoriteButton: {
    //
  },
  remove: {
    //
  },
  favorite: {
    //
  }
}));

export default useStyles;
