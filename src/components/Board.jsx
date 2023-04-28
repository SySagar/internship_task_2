import { Grid, Stack} from "@mui/material"
import MCard from "./MCard"
import db from '../db.json'

export default function Board() {
  return (
    <div>
        <Grid container  sx={{padding:'40px'}} direction={'row'}  gap='30px'>
            {
                db.values.map((item) => {
                    return <MCard key={item.title} title={item.title} number={item.amount} percentage={item.percentage}></MCard>
                })
            }
        </Grid>

        <Stack direction={'row'}>
            
        </Stack>
    </div>
  )
}
