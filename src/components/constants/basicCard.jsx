import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function BasicCard({header, content}){
    const cardStyles = {
        width:'1500px',
        position:'absolute',
        borderRadius:'8px',
        left:'55%',
        transform:'translateX(-30%)',
        top:'160px'
    }
    return(
        <Card sx={cardStyles}>
            {header}
            <CardContent>
                {content}
                
            </CardContent>
        </Card>
    )
}export default BasicCard