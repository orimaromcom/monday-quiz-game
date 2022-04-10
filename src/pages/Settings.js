import { Button, CircularProgress } from "@mui/material";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Box } from "@mui/system";
import { useHistory, Link } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeight: "900",
  },
});

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  const history = useHistory();

  if (loading) {
    return (
      <Box mt={20} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <p variant="h6" mt={20} color="red" textAlign="center">
        Something went Wrong!
      </p>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <Fragment>
      <Helmet>Select Questions</Helmet>
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <SelectField options={response.trivia_categories} label="Category" />
          <SelectField options={difficultyOptions} label="Difficulty" />
          <SelectField options={typeOptions} label="Type" />
          <TextFieldComp />
          <Box mt={3} width="100%">
            <Link className="play-button" to="/play">
              <Button
                fullWidth
                variant="contained"
                type="submit"
                color="primary"
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </ThemeProvider>
      </form>
    </Fragment>
  );
};

export default Settings;
