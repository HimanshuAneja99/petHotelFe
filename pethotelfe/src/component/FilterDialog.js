import React from 'react'
import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

export default function FilterDialog(){
    return(
        <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <h4>Pet Type Accepted</h4>
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h4>Price</h4>
                        <Slider valueLabelDisplay="auto" aria-labelledby="range-slider"/>
                        <Grid item sm={12}>From <TextField id="standard-basic" label="Rs. 450" /></Grid>
                        <Grid item sm={12}>Upto <TextField id="standard-basic" label="Rs. 950" /></Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h4>More Filters </h4>
                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Verified Hosts Only"
                        />

                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Hosts Without Pets"
                        />

                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Having Open Play Area"
                        />

                        <FormControlLabel
                        control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Professional Trainers"
                        />

                        <FormControlLabel
                          control={
                           <Checkbox
                         // checked={state.checkedB}
                         // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                           />
                        }
                        label="Show Pet Hotels Only"
                        />

                    </Grid>
                </Grid>
    );
}