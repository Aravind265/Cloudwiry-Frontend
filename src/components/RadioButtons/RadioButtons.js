import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { StyledEngineProvider } from '@mui/material';
import { useState } from 'react';
import { useStyles } from './StyleRadioButton'
import ActionButtons from '../ActionButtons/ActionButtons';

function RadioButtons(){
    const classes = useStyles();

    const [option, setOption] = useState('even')

    return(
        <div className={classes.menu}>
            <StyledEngineProvider injectFirst>
                {
                    <FormControl>
                        <FormLabel className={classes.fnt} id='radio-buttons'>Type:</FormLabel>
                        <RadioGroup value={option} onChange={(e) => setOption(e.target.value) } name='radio-buttons-group'>
                            <FormControlLabel className={classes.fnt} value='even' control={<Radio />} label='Even Distribution' />
                            <FormControlLabel className={classes.fnt} value='actual' control={<Radio />} label='Actual Distribution' />
                        </RadioGroup>
                    </FormControl>
                }
            </StyledEngineProvider>
            <ActionButtons option={option}/>
        </div>
    );
}

export default RadioButtons;