import axios from "axios";
import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "./login.css";
import bgimg from "../../assets/woman-enjoying-glass-wine-beautiful-sunset_986484-345.jpg";
import LogSticker from "../../assets/avatar7.png";
import { InputLabel, Input, Card, Link, Stack, Divider, Typography } from "@mui/material";
import GoogleSign from "../../assets/google.png";
import { isExpired, decodeToken } from "react-jwt";
export default function Login(props) {
  const [loginData, setLoginData] = useState({});
  // Handle changes in input fields
  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const login = async () => {
    var response = await axios.post("http://localhost:8080/login", loginData);
    var decodedData = decodeToken(response.data);
    console.log(decodedData);
    localStorage.setItem("token", response.data);
    console.log(props.state)

    props.state(response.data)
    navigate("/");
  };
  return (
    <div>
      {/* Sign In page component with background image and "Sign In" text */}
      <img className="bg-img" src={bgimg} alt="rfgttdfgv" />
      <div className="Sign-name-content">
        <span> Sign In</span>
      </div>
      <Box>
        <div className="login-container">
          <div className="login-content">
            <div>
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="display_picture"
              >
                <img className="login_avatar box" src={LogSticker} />
              </div>
              <br></br>
              <br></br>
              <TextField
                sx={{
                  input: {
                    color: "white",
                    background: "rgba(255, 255, 255,0.2)",
                    fontSize: "larger",
                  },

                  borderBottom: "2px solid rgb(255, 255, 255)",
                  width: "330px",
                }}
                id="standard"
                label="UserName"
                type="success"
                name="username"
                className="TFiled"
                onChange={handleChange}
                autoComplete="current-text"
                variant="standard"
                InputLabelProps={{ className: "textfield" }}
              />
              <br></br>
              <br></br>

              <TextField
                sx={{
                  input: {
                    color: "white",
                    background: "rgba(255, 255, 255,0.2)",
                    fontSize: "larger",
                  },
                  borderBottom: "2px solid rgb(255, 255, 255)",
                  width: "330px",
                }}
                id="outlined-password-input"
                label="Password"
                type="Password"
                name="password"
                className="TFiled"
                autoComplete="current-password"
                onChange={handleChange}
                variant="standard"
                InputLabelProps={{ className: "textfield" }}
              />
              <br></br>
              <br></br>
              <div
                style={{
                  display: "flex",
                  padding: "10px",
                  flexDirection: "inline",
                }}
              >
                <Link
                  sx={{
                    color: "#3e4fda",
                    textDecoration: "none",
                    fontWeight: "bold",
                    alignSelf: "center",
                    cursor: "pointer",
                  }}
                >
                  Forgot your password?
                </Link>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />
              </div>

              <Button
                onClick={login}
                variant="contained"
                sx={{
                  height: "38px",
                  width: "252px",
                  marginTop: "15px",
                  alignContent: "center",
                  marginLeft: "38px",

                }}
              >
                Log in
              </Button>
              <br></br>
              <span
                style={{
                  fontWeight: "100",
                  fontSize: "medium",
                  marginTop: "25px",
                  paddingLeft: "57px",
                  alignItems: "cetrer",
                }}
              >
                <Stack
                  sx={{ alignSelf: "center", alignItems: "center" }}
                  spacing="10px"
                  direction="row"
                >
                  <Typography variant="subtitle1" sx={{ color: "#8F8F94" }}>
                    Don't have an account?
                  </Typography>
                  <Link
                    sx={{
                      color: "#3e4fda",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Sign up
                  </Link>
                </Stack>
              </span>
            </div>
          </div>
          <Divider>CENTER</Divider>
          <br></br>
          <Stack sx={{ alignItems: 'flex-start', width: '100%' }} spacing="20px">
            <Stack sx={{ alignItems: 'center', width: '100%' }} spacing="10px">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#111827',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 16px',
                  columnGap: '7px',
                  border: '1px solid rgb(230,230,230)',
                  textTransform: 'none',
                }}>
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxNjdFRTY7IiBkPSJNNDkyLjY2OCwyMTEuNDg5bC0yMDguODQtMC4wMWMtOS4yMjIsMC0xNi42OTcsNy40NzQtMTYuNjk3LDE2LjY5NnY2Ni43MTUNCgljMCw5LjIyLDcuNDc1LDE2LjY5NiwxNi42OTYsMTYuNjk2aDExNy42MDZjLTEyLjg3OCwzMy40MjEtMzYuOTE0LDYxLjQxLTY3LjU4LDc5LjE5NEwzODQsNDc3LjU4OQ0KCWM4MC40NDItNDYuNTIzLDEyOC0xMjguMTUyLDEyOC0yMTkuNTNjMC0xMy4wMTEtMC45NTktMjIuMzEyLTIuODc3LTMyLjc4NUM1MDcuNjY1LDIxNy4zMTcsNTAwLjc1NywyMTEuNDg5LDQ5Mi42NjgsMjExLjQ4OXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxMkIzNDc7IiBkPSJNMjU2LDQxMS44MjZjLTU3LjU1NCwwLTEwNy43OTgtMzEuNDQ2LTEzNC43ODMtNzcuOTc5bC04Ni44MDYsNTAuMDM0DQoJQzc4LjU4Niw0NjAuNDQzLDE2MS4zNCw1MTIsMjU2LDUxMmM0Ni40MzcsMCw5MC4yNTQtMTIuNTAzLDEyOC0zNC4yOTJ2LTAuMTE5bC01MC4xNDctODYuODENCglDMzEwLjkxNSw0MDQuMDgzLDI4NC4zNzEsNDExLjgyNiwyNTYsNDExLjgyNnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwRjk5M0U7IiBkPSJNMzg0LDQ3Ny43MDh2LTAuMTE5bC01MC4xNDctODYuODFjLTIyLjkzOCwxMy4zMDMtNDkuNDgsMjEuMDQ3LTc3Ljg1MywyMS4wNDdWNTEyDQoJQzMwMi40MzcsNTEyLDM0Ni4yNTYsNDk5LjQ5NywzODQsNDc3LjcwOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQ1MDA7IiBkPSJNMTAwLjE3NCwyNTZjMC0yOC4zNjksNy43NDItNTQuOTEsMjEuMDQzLTc3Ljg0N2wtODYuODA2LTUwLjAzNEMxMi41MDIsMTY1Ljc0NiwwLDIwOS40NDQsMCwyNTYNCglzMTIuNTAyLDkwLjI1NCwzNC40MTEsMTI3Ljg4MWw4Ni44MDYtNTAuMDM0QzEwNy45MTYsMzEwLjkxLDEwMC4xNzQsMjg0LjM2OSwxMDAuMTc0LDI1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjRCMjY7IiBkPSJNMjU2LDEwMC4xNzRjMzcuNTMxLDAsNzIuMDA1LDEzLjMzNiw5OC45MzIsMzUuNTE5YzYuNjQzLDUuNDcyLDE2LjI5OCw1LjA3NywyMi4zODMtMS4wMDgNCglsNDcuMjctNDcuMjdjNi45MDQtNi45MDQsNi40MTItMTguMjA1LTAuOTYzLTI0LjYwM0MzNzguNTA3LDIzLjY3MywzMTkuODA3LDAsMjU2LDBDMTYxLjM0LDAsNzguNTg2LDUxLjU1NywzNC40MTEsMTI4LjExOQ0KCWw4Ni44MDYsNTAuMDM0QzE0OC4yMDIsMTMxLjYyLDE5OC40NDYsMTAwLjE3NCwyNTYsMTAwLjE3NHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEOTNGMjE7IiBkPSJNMzU0LjkzMiwxMzUuNjkzYzYuNjQzLDUuNDcyLDE2LjI5OSw1LjA3NywyMi4zODMtMS4wMDhsNDcuMjctNDcuMjcNCgljNi45MDMtNi45MDQsNi40MTEtMTguMjA1LTAuOTYzLTI0LjYwM0MzNzguNTA3LDIzLjY3MiwzMTkuODA3LDAsMjU2LDB2MTAwLjE3NEMyOTMuNTMsMTAwLjE3NCwzMjguMDA1LDExMy41MSwzNTQuOTMyLDEzNS42OTN6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                  width="20px"
                  height="20px"
                />
                <Typography variant="subtitle1" sx={{ color: '#000' }}>
                  Sign in with Google
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#111827',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 16px',
                  columnGap: '7px',
                  border: '1px solid rgb(230,230,230)',
                  textTransform: 'none',
                }}>
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzRDQUY1MDsiIGQ9Ik0yNzIsMjQwaDI0MFYxNmMwLTguODMyLTcuMTY4LTE2LTE2LTE2SDI3MlYyNDB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjQ0MzM2OyIgZD0iTTI0MCwyNDBWMEgxNkM3LjE2OCwwLDAsNy4xNjgsMCwxNnYyMjRIMjQweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzIxOTZGMzsiIGQ9Ik0yNDAsMjcySDB2MjI0YzAsOC44MzIsNy4xNjgsMTYsMTYsMTZoMjI0VjI3MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkMxMDc7IiBkPSJNMjcyLDI3MnYyNDBoMjI0YzguODMyLDAsMTYtNy4xNjgsMTYtMTZWMjcySDI3MnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                  width="20px"
                  height="20px"
                />
                <Typography variant="subtitle1" sx={{ color: '#000' }}>
                  Sign in with Microsoft
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </div>
      </Box>

    </div>
  );
}


/* <button class="signin">
  <svg
    viewBox="0 0 256 262"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    ></path>
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    ></path>
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    ></path>
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    ></path>
  </svg>
  Sign in with Google
</button>




.signin {
  float: right;
  max-width: 320px;
  display: flex;
  padding: 0.5rem 1.4rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  gap: 0.75rem;
  color: #c4d2dc;
  background-color: #19242b;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0, 0.87, 0.12, 1);
}

.signin:hover {
  transform: scale(1.025);
}

.signin:active {
  transform: scale(0.975);
}

button svg {
  height: 24px;
  width: auto;
}


*/