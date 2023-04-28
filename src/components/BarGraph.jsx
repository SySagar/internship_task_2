import { Card, Stack, Typography } from '@mui/material'

export default function BarGraph() {
  return (
    <div>
       <Card className="card" sx={{width:'262px', height:'184px' , borderRadius:'12px', padding:'20px' , gap:'8px'}} variant="outlined">
        <Typography color={'#5F6980'} fontFamily={'Inter'} fontWeight={'400'} variant="h6" sx={{width:'100%', minHeight:'26px'}}>{title}</Typography>

      </Card>
    </div>
  )
}
