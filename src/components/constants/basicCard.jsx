import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function BasicCard({header, content, sx}){

    return(
        <Card sx={{
            width:'1500px',
            position:'absolute',
            borderRadius:'8px',
            left:'55%',
            transform:'translateX(-30%)',
            top:'160px',
            elevate:0.9, ...sx
        }}>
            {header}
            <CardContent>
                {content}
                
            </CardContent>
        </Card>
    )
}export default BasicCard