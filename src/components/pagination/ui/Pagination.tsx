import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { paginationStyle } from "./styles";

const PaginationComponent = ({
  currentPage,
  handleChange,
  pageCount,
}: {
  currentPage: number;
  handleChange: (event: any, value: number) => void;
  pageCount: number;
}) => {
  return (
    <section style={paginationStyle.container}>
      <Stack spacing={20}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </section>
  );
};

export default PaginationComponent;
