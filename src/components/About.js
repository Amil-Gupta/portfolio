import { Box, Card, Paper, Typography } from "@mui/material";
import AboutTile from "./AboutTile";
import styles from "../styles/aboutStyles";

export default function About(){
    const data = [
        {
            key: 'Name',
            value: 'Amil Utkarsh Gupta'
        },
        {
            key: 'Age',
            value: 21,
        },
        {
            key: 'Occupation',
            value: 'College Student'
        }
    ]

    return(
        <Paper
        sx = {{...styles.about}}
        elevation = {10}
        >
            {
                data.map((row)=>(
                    <AboutTile key={row.key} name={row.key} value={row.value} styles={styles} />
                ))
            }
        </Paper>
    )
}