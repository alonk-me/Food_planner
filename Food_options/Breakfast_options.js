import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Banana-Apple-Mango"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="yogurt with fruit nuts and maple"
      />
            <FormControlLabel
        control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
        label="Cereal"
      />
            <FormControlLabel
        control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Gainer"
      />
      








    </FormGroup>
  );
}
