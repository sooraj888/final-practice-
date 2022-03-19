import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

const PostList = ({ postData, page, setPage }: any) => {
  return (
    <Box>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postData.length > 0 &&
              postData?.[0].map((item: any, id: number) => {
                return (
                  <TableRow key={id}>
                    <TableCell align="left">{item?.author}</TableCell>
                    <TableCell align="left">{item?.created_at}</TableCell>
                    <TableCell align="left">{item?.title}</TableCell>
                    <TableCell align="left">{item?.url}</TableCell>
                    <TableCell align="left">{item?.points}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PostList;
