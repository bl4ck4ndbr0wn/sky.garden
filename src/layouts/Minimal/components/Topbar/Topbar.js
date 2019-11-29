import React from 'react';
import theme from "../../../../theme";

const styles = {
  header: {
    width: "100%",
    height: "4rem",
    top: 0,
    left: 0,
    backgroundColor: theme.black
  }
};

const Topbar = () => {

  return (
    <header style={styles.header}>
      <div className="container-fluid">
      </div>
    </header>
  )
};

export default Topbar;

