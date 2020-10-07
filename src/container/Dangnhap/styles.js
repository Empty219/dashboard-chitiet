const styles = (theme) => ({
  background: {
    // backgroundColor: theme.palette.primary.main,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flex: " 1 0 auto",
    backgroundSize : '100%',
    backgroundImage : `URL(${'https://i.imgur.com/1APtkWb.jpeg'})`,
  },
  editInput : {
    marginTop: '50px',

  },
  imglogo:{
    marginTop: '50px',
  },
  card : {
    borderRadius : (12,12,12,12),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    background  : 'WHITE',
    maxWidth : 750,
    maxHeight: 700,

  },
  typo: {
    // textAlign: "center",
    fontSize: "20px",
    // color : 'white',
  },
  root: {
    flexGrow: 1,
  },
  image: {
    marginTop : '-50px',
    display : 'block',
    marginLeft : 'auto',
    marginRight : 'auto',
    height: '70px',
    width: "70px",
  },
  set : {
    color : 'BLACK',
  },
  Fpass : {
    paddingTop : '20px',
    textAlign: "center",
    fontSize: "13px",
    color : 'grey',
    marginLeft: '115px',
  },
  a : {
    textDecoration : 'none',
  },
  button : {
    marginTop : '10px',
    borderRadius:'20px',
    position: 'relative',

    maxWidth: 400,
  },
  user : {
    marginTop : '10px',
    // color: 'white',
    marginBottom : '15px'
  },
  pass : {
    marginTop : '10px',
    // color: 'white',
    marginBottom : '20px'
  },
  Typo : {
    fontWeight : 'bold',
    textAlign: "center",
    fontSize: 20,

    maxWidth: 400,
  },
  Typobaoboc: {
    width: '200px',
    marginLeft:'60px',
  },
  buttonbaoboc:{
    width: '200px',
    marginLeft:'60px',
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(6),
      width: "37ch",
    },

  },
//   formbaoboc: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(6),
//       width: "28ch",
//     },
// width: '200px',
//   },
});
export default styles;
