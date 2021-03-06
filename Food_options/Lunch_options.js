import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Tuna with salad"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="Chicken with vegetables"
      />
            <FormControlLabel
        control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
        label="lentils and burgul"
      />
            <FormControlLabel
        control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Humaus"
      />
      








    </FormGroup>
  );
}
