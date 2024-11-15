import React from "react";
import {
  TextField,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./address.css";
export default function Address() {
  return (
    <div>
      <div className="address-container">
        <React.Fragment>
          <Grid container spacing={5}>
            <Grid
              textAlign={"center"}
              fontSize={"23px"}
              fontWeight={"600"}
              fontFamily={"Hawaii 2-0, sans-serif"}
              textShadow={"0 0 3px #FF0000"}
              item
              xs={12}
            >
              My Address
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
            <Button
              variant="contained"
              sx={{
                justifyContent: "center",
                height: "38px",
                width: "252px",
                margin: "15px auto 0 auto",
                alignContent: "center",
                justifyItems: "center",
                justifySelf: "center",
              }} /*onClick={login}*/
            >
              Save
            </Button>
          </Grid>
        </React.Fragment>
      </div>
    </div>
  );
}
