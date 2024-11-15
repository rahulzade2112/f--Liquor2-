import React from "react";
import { Button } from "@mui/material";
import {
  Grid,
  IconButton,
  OutlinedInput,
  InputAdornment,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./password.css";
export default function Change() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Grid
        textAlign={"center"}
        fontSize={"23px"}
        fontWeight={"600"}
        fontFamily={"Hawaii 2-0, sans-serif"}
        textShadow={"0 0 3px #FF0000"}
        item
        xs={12}
      >
        Password
      </Grid>
      <Box
        sx={{
          marginBottom: "auto",
          marginTop: "45px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          Current Password :
          <FormControl
            sx={{
              "& .MuiInputBase-root": { height: 42 },
              m: 1,
              width: "55ch",
              marginLeft: "40px",
            }}
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <br />
        <div
          style={{
            marginLeft: "25px",
            display: "inline-flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          New Password :
          <FormControl
            sx={{
              "& .MuiInputBase-root": { height: 42 },
              m: 1,
              width: "55ch",
              marginLeft: "40px",
            }}
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          Confirm Password :
          <FormControl
            sx={{
              "& .MuiInputBase-root": { height: 42 },
              m: 1,
              width: "55ch",
              marginLeft: "40px",
            }}
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <Button
          variant="contained"
          sx={{
            justifyContent: "center",
            height: "38px",
            width: "252px",
            bottom: "10px",
            margin: "20px auto auto auto",
            alignContent: "center",
            justifyItems: "center",
            justifySelf: "center",
          }} /*onClick={login}*/
        >
          Save
        </Button>
      </Box>

      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );
}
