const drawerWidth = 240;
const styles = (theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    backgroundColor: "#e7e7e7",
  },
  wrapperContent: {
    width : '100%',
    padding: 10,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  shiftLeft: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});
export default styles;
