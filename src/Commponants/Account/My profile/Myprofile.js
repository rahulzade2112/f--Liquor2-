import React from "react";
import { Button, InputLabel } from "@mui/material";
import { TextField, Grid, FormControlLabel, Checkbox } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import "./myprofile.css";
import axios from "axios";
import "../../../Utility/Interceptors/ReqInterceptor";

export default function Myprofile(props) {
  const removeDp = () => {
    axios.post("http://localhost:8080/removedp").then((res) => {
      console.log(res);
      localStorage.removeItem("token");
      localStorage.setItem("token", res.data.token);
      window.location.reload();

    });
  };
  console.log(props);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div>   
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid
            alignContent={"center"}
            item
            style={{
              margin: "15px auto auto auto",
              width: "135px",
              borderRadius: "50%",
              height: "135px",
              border: "6px solid",
            }}
          >
            {/* <div class="checkbox-wrapper-10">
  <input checked="" type="checkbox" id="cb5" class="tgl tgl-flip">
  <label for="cb5" data-tg-on="Yeah!" data-tg-off="Nope" class="tgl-btn"></label>
</div> */}

            <img style={{ width: "100px", height: "auto" }} src={props.state.avatar}></img>
          </Grid>
        </Grid>
        <div
          style={{
            flexWrap: "nowrap",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "25px",
          }}
        >
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon style={{ borderColor: "blue" }} />}
          >
            Update
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
           onClick={removeDp}
            variant="outlined"
            sx={{ color: "red", borderColor: "red" }}
            startIcon={<DeleteIcon
          style={{ color: "red" }} />}
          >
            Remove
          </Button>
        </div>

        <Grid container marginTop={3} gap={3}>
          <Grid container style={{ flexWrap: "nowrap" }}>
            <InputLabel
              className="input-label"
              style={{ margin: "auto 0 auto 20px" }}
            >
              First Name :
            </InputLabel>
            <Grid
              sx={{ "& .MuiInputBase-root": { height: 42 } }}
              item
              xs={12}
              sm={4}
            >
              <TextField
                required
                id="firstName"
                padding="none"
                name="firstName"
                fullWidth
                autoComplete="given-name"
                border="none"
              />
            </Grid>

            <InputLabel
              className="input-label"
              style={{ margin: "auto 0 auto 20px" }}
            >
              Last name :
            </InputLabel>
            <Grid
              sx={{ "& .MuiInputBase-root": { height: 42 } }}
              item
              xs={12}
              sm={4}
            >
              <TextField    style={{ marginLeft: "0" }}
                required
                id="lastName"
                name="lastName"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
          </Grid>

          <Grid container style={{ flexWrap: "nowrap" }}>
            <InputLabel
              style={{ margin: "auto 0 auto 20px" }}
              className="input-label"
            >
              Email :
            </InputLabel>
            <Grid
              sx={{ "& .MuiInputBase-root": { height: 42 } }}
              item
              xs={12}
              sm={4}
            >
              <TextField
                required
                id="Email"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>

            <InputLabel
              style={{ margin: "auto 0 auto 20px" }}
              className="input-label"
            >
              Contact no. :
            </InputLabel>
            <Grid
              sx={{ "& .MuiInputBase-root": { height: 42 } }}
              item
              xs={12}
              sm={4}
            >
              <TextField
                required
                style={{ marginLeft: "0" }}
                id="phone"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
          </Grid>

          <Grid container style={{ flexWrap: "nowrap" }}>
            <InputLabel
              className="input-label"
              style={{ margin: "auto 0 auto 20px" }}
            >
              @Userame :
            </InputLabel>
            <Grid
              sx={{ "& .MuiInputBase-root": { height: 42 } }}
              item
              xs={12}
              sm={4}
            >
              <TextField
                required
                id="@"
                padding="none"
                name="@"
                fullWidth
                autoComplete="given-name"
                border="none"
              />
            </Grid>

            <InputLabel
              className="input-label"
              style={{ margin: "auto 0 auto 20px" }}
            >
              Birthdate :
            </InputLabel>
            <Grid
              sx={{ "& .MuiInputBase-root": { height: 42 } }}
              item
              xs={12}
              sm={4}
            >
              <TextField
                required
                id="date"
                padding="none"
                name="dob"
                fullWidth
                type="date"
                autoComplete="given-name"
                border="none"
              />
              {/* <Form.Group controlId="dob"> */}
              {/* <Form.Control type="date" name="dob" /> */}
              {/* </Form.Group> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: "20px" }} xs={10}>
          <InputLabel
            className="input-label"
            style={{ margin: "auto 0 auto 20px" }}
          >
            Gender :
          </InputLabel>
          <div className="form-check form-check-inline">
            <input
              style={{ border: "3px #efefef solid" }}
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <InputLabel className="form-check-label" for="inlineRadio1">
              Male
            </InputLabel>
          </div>

          <div className="form-check form-check-inline">
            <input
              style={{ border: "3px #efefef solid" }}
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <InputLabel className="form-check-label" for="inlineRadio2">
              Female
            </InputLabel>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              style={{ border: "3px #efefef solid" }}
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <InputLabel className="form-check-label" for="inlineRadio3">
              Other
            </InputLabel>
          </div>
        </Grid>
        <br />
        <Grid
          sx={{ "& .MuiInputBase-root": { height: 42 } }}
          item
          xs={10}
          sm={4}
        >
          <InputLabel
            className="input-label"
            style={{ margin: "auto 0 auto 20px" }}
            name="https//"
            id="https//"
          >
            Link :
          </InputLabel>
          <TextField
            required
            id="https//"
            padding="none"
            name="https//"
            fullWidth
            autoComplete="given-name"
            border="none"
          />
          <TextField
            required
            id="Link"
            padding="none"
            name="Link"
            fullWidth
            autoComplete="given-name"
            border="none"
          />
        </Grid>
      </React.Fragment>
     </div>
 
  );
}
