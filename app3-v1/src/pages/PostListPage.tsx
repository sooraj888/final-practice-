import {
  Button,
  CircularProgress,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { postDataType } from "../App";

type postListPageType = {
  postData: postDataType;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PostListPage = ({ postData, page, setPage }: postListPageType) => {
  const navigate = useNavigate();
  const handleOnSelect = (item: any) => {
    navigate("/rawJson", { state: item });
  };

  const handleOnPageChange = (e: any, value: number) => {
    setPage(value);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {postData.length == 0 ? (
        <>
          <CircularProgress></CircularProgress>
          <h5>Loddig..</h5>
        </>
      ) : (
        <TableContainer sx={{ maxHeight: "440px" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <h3>Author</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>Title</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>URL</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>Careated-At</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>RawData</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postData &&
                postData?.[page - 1].map((item: any, key: number) => {
                  return (
                    <TableRow key={key}>
                      <TableCell>{item?.author}</TableCell>
                      <TableCell>{item?.title}</TableCell>
                      <TableCell sx={{ maxWidth: "200px", overflow: "hidden" }}>
                        {item?.url}
                      </TableCell>
                      <TableCell>{item?.created_at}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            handleOnSelect(item);
                          }}
                        >
                          select
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Pagination
        page={page}
        count={postData.length}
        onChange={handleOnPageChange}
      ></Pagination>
    </Box>
  );
};

export default PostListPage;
