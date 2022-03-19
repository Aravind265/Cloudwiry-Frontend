import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    btn1: {
        backgroundColor: '#459bd7',
        boxShadow: 'none',
        borderRadius: '1px',
        fontFamily: 'Mulish, sans-serif',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#459bd7'
        }
    },
    btn2: {
        backgroundColor: '#e0e0e0',
        color: '#000000',
        boxShadow: 'none',
        fontFamily: 'Mulish, sans-serif',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#e0e0e0'
        }
    },
    btns: {
        paddingTop: '20px'
    }
});