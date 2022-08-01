import { Box } from "@mui/material"
import dp from '../assets/profile_picture.jpg';
import styles from '../styles/dpStyles';

export default function ProfilePic(){
    const classes = styles();

    return(
        <Box
            className={classes.dpContainer}
        >
            <Box
            className={classes.dp}
            component = 'img'
            src = {dp}
            />
        </Box>
    )
}