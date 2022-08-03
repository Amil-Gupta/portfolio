import { Box } from "@mui/material"
import dp from '../assets/profile_picture.jpg';
import styles from '../styles/dpStyles';

export default function ProfilePic(){
    return(
        <Box
            sx = {{...styles.dpContainer}}
        >
            <Box
            sx = {{...styles.dp}}
            component = 'img'
            src = {dp}
            />
        </Box>
    )
}