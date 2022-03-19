import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import { useStyles } from './StyleActionButton';

function ActionButtons(props){
    const classes = useStyles();

    return(
        <StyledEngineProvider injectFirst>
            {
                <Stack className={classes.btns} spacing={2} direction='row'>
                    <Button className={classes.btn1} variant='contained' onClick={() => console.log(props.option)}>Update</Button>
                    <Button className={classes.btn2} variant='contained'>Download</Button>
                </Stack>
            }
        </StyledEngineProvider>
    );
}

export default ActionButtons;