// import './App.css';
import styled from "styled-components";
import {NavigationBar} from "./components/NavigationBar";
import {BrowserRouter} from "react-router-dom";

const StyledApp = styled.div`
  margin-top: 0;
  padding-top: 0;
`;

const App = () => {
    return (
        <BrowserRouter>
            <StyledApp>
                <NavigationBar/>
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;
