import React from "react";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./PageTurner.scss";

const PageTurner = ({ pagination, page, setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event, value) => {
    setPage(value);
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };

  // console.log(page, "currentPage");
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2DD06E",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={1}>
        <Pagination
          count={pagination?.total_pages}
          color="primary"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default PageTurner;
