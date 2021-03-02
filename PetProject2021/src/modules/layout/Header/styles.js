const styles = {
  header: {
    display: "flex",
    backgoundColor: "black",
    flexDirection: "column",
  },
  headerLogo: {
    backgroundColor: "black",
    width: "100%",
    "&::before": {
      content: `''`,
      position: "absolute",
      left: "-50px",
      top: "50px",
      width: "110px",
      height: "110px",
      border: "50px solid transparent",
      borderTopColor: "red",
    },
  },
  inviteBlock: {
    width: "200px",
    height: "30px",
    position: "absolute",
    border: "2px solid white",
    borderRadius: "4%",
    marginTop: "20px",
    marginLeft: "5px",
  },
  inviteBlockText: {
    fontSize: "23px",
    color: "white",
    margin: "0",
    cursor: "pointer",
  },
  addPostButton: {
    fontSize: "20px",
    position: "absolute",
    color: "white",
    right: 0,
    marginRight: "50px",
    marginTop: "20px",
  },
};

export { styles };
