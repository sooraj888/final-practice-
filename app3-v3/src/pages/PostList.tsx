import {
  Box,
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
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import NavBar from "../Componets/NavBar";
import ShowError from "./../utility/ShowError";

type PostListType = {
  page: number;
  data: any[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  error: boolean;
};

const PostList = ({ page, data, setPage, error }: PostListType) => {
  const navigate: NavigateFunction = useNavigate();
  const handldeOnClickSelect = (item: string): void => {
    navigate("/rawJson", { state: item });
  };
  const handlePagination = (e: any, value: number): void => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {error ? (
        <ShowError></ShowError>
      ) : data.length === 0 ? (
        <>
          <CircularProgress></CircularProgress>
          <p>Loading...</p>
        </>
      ) : (
        <Box
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <NavBar />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Created-At</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Select</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.length > 0 &&
                  data[page - 1].map((item: any, key: number): JSX.Element => {
                    return (
                      <TableRow key={key}>
                        <TableCell>{item?.created_at}</TableCell>
                        <TableCell>{item?.title}</TableCell>
                        <TableCell>{item?.url}</TableCell>
                        <TableCell>{item?.author}</TableCell>
                        <TableCell>
                          <Button onClick={() => handldeOnClickSelect(item)}>
                            select
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      {!error && data.length !== 0 && (
        <Pagination
          page={page}
          count={data.length}
          onChange={handlePagination}
        ></Pagination>
      )}
    </Box>
  );
};

export default PostList;
