import { Card, Grid, Stack, Typography} from "@mui/material"
import MCard from "./MCard"
import db from '../db.json'
import CircularGraph from "./CircularGraph"
import { BarGraph } from "./BarGraph"

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

        <Stack direction={'row'} paddingX={'40px'} gap={'20px'}>

        <Card className="card" sx={{flexGrow:1, height:'282px' , borderRadius:'14px', padding:'40px' , gap:'8px'}} variant="outlined">
        <Typography color={'#5F6980'} fontFamily={'Inter'} fontWeight={'600'} variant="h6" sx={{width:'100%', minHeight:'26px'}}>Top emissions by type</Typography>
            <Stack alignItems={'center'} width={'100%'}>
           <BarGraph></BarGraph>
            </Stack>
        </Card >
        

            <Card className="card" sx={{width:'fit-content', height:'282px' , borderRadius:'14px', padding:'40px' , gap:'8px'}} variant="outlined">
        <Typography color={'#5F6980'} fontFamily={'Inter'} fontWeight={'600'} variant="h6" sx={{width:'100%', minHeight:'26px'}}>Top emissions by type</Typography>
            <Stack alignItems={'center'} width={'100%'} justifyContent={'start'}>
            <CircularGraph ></CircularGraph>
            </Stack>
        </Card >
        </Stack>
    </div>
  )
}
