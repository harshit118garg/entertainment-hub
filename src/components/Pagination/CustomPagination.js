import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});

function CustomPagination(props) {
  const { setPage, numOfPages = 10 } = props;

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Pagination
            count={numOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)}
            color="secondary"
            hidePrevButton
            hideNextButton
          />
        </ThemeProvider>
      </div>
    </>
  );
}

export default CustomPagination;
