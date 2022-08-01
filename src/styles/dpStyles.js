import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    dpContainer: {
        width: '100%',
        display: 'flex',
        margin: '3rem 1rem',
        maxWidth: '90vw'
    },
    dp: {
        height: '17rem',
        width: '17rem',
        maxHeight: '100vh',
        maxWidth: '100vh',
        borderRadius: '50%',
        margin: 'auto',
    }
})

export default useStyles;