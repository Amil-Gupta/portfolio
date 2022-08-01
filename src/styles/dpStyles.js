import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    dpContainer: {
        width: '100%',
        display: 'flex',
        margin: '3rem 1rem',
        maxWidth: '90vw',
        maxHeight: '50vh'
    },
    dp: {
        height: 'auto',
        width: '17rem',
        maxHeight: '50vh',
        maxWidth: '40vw',
        borderRadius: '50%',
        margin: 'auto',
    }
})

export default useStyles;