import { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function InputGender({ gender, setGender }) {
  useEffect(() => {
    localStorage.setItem("gender", gender);
  }, [gender]);
  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="gender">Je suis ...</FormLabel>
      <RadioGroup
        row
        aria-labelledby="gender"
        name="gender"
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel
          value={"female"}
          control={<Radio />}
          label="une Femme"
          checked={gender === "female"}
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="un Homme"
          checked={gender === "male"}
        />
      </RadioGroup>
    </FormControl>
  );
}
