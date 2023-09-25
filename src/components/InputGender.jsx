import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function InputGender({ isMale, setIsMale }) {
  return (
    <FormControl>
      <FormLabel id="gender">Je suis ...</FormLabel>
      <RadioGroup row aria-labelledby="gender" name="gender">
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="une Femme"
          onInput={() => setIsMale(false)}
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="un Homme"
          onInput={() => setIsMale(true)}
        />
      </RadioGroup>
    </FormControl>
  );
}
