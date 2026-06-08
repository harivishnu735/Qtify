import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MovieCard from '../MovieCard/MovieCard';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ data }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const genres = ["All", "Drama", "Thriller", "Horror", "Adventure"];
    const activeGenre = genres[value];

    // Filter movies dynamically based on the selected tab
    const filteredMovies = (data || []).filter((movie) => {
        if (activeGenre === "All") return true;
        return movie.genres && movie.genres.includes(activeGenre);
    });

    const tabStyle = {
        color: "var(--color-white) !important",
        textTransform: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "16px",
        "&.Mui-selected": {
            color: "var(--color-primary) !important"
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0.1)", margin: "10px 0 25px 0" }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        style: { backgroundColor: "var(--color-primary)", height: "4px", borderRadius: "2px" }
                    }}
                >
                    <Tab label="All" sx={tabStyle} {...a11yProps(0)} />
                    <Tab label="Drama" sx={tabStyle} {...a11yProps(1)} />
                    <Tab label="Thriller" sx={tabStyle} {...a11yProps(2)} />
                    <Tab label="Horror" sx={tabStyle} {...a11yProps(3)} />
                    <Tab label="Adventure" sx={tabStyle} {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container spacing={2}>
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container spacing={2}>
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Grid container spacing={2}>
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Grid container spacing={2}>
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Grid container spacing={2}>
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </Grid>
            </CustomTabPanel>
        </Box>
    );
}
