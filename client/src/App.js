import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import MainRouter from './MainRouter';
import Menu from "./core/Menu";

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <ThemeProvider theme={theme}>
                <MainRouter />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;