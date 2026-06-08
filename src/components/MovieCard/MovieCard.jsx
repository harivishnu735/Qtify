import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Grid } from '@mui/system';
import { truncate } from "../../helpers/helpers";

function stripHtml(html) {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
}

export default function ActionAreaCard({ data }) {
    const cleanSummary = stripHtml(data.summary);
    const truncatedSummary = truncate(cleanSummary, 150);

    return (
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ display: 'flex' }}>
            <Card sx={{ 
                maxWidth: 345, 
                width: '100%',
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%' 
            }}>
                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'stretch' }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={data.image?.medium}
                        alt={data.name}
                        style={{ objectFit: 'cover' }}
                    />
                    <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 600 }}>
                            {data.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                            {truncatedSummary}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
