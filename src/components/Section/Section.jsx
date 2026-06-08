import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Section({ title, data, type, genres = [] }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Filter songs dynamically if type is song
  const filteredData = (data || []).filter((item) => {
    if (type !== "song" || selectedTab === 0) return true;
    
    // selectedTab: 0 is "All", 1..N correspond to the genres array
    const genreKey = genres[selectedTab - 1]?.key;
    return item.genre?.key === genreKey;
  });

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type === "album" && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show all" : "Collapse"}
          </h4>
        )}
      </div>

      {type === "song" && genres.length > 0 && (
        <Box sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0.1)", margin: "10px 0 25px 0" }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="songs genre tabs"
            TabIndicatorProps={{
              style: { backgroundColor: "var(--color-primary)", height: "4px", borderRadius: "2px" }
            }}
            className={styles.tabs}
          >
            <Tab label="All" {...a11yProps(0)} className={styles.tab} />
            {genres.map((genre, index) => (
              <Tab
                key={genre.key}
                label={genre.label}
                {...a11yProps(index + 1)}
                className={styles.tab}
              />
            ))}
          </Tabs>
        </Box>
      )}

      {data.length === 0 ? (
        <div className={styles.loading}>Loading...</div>
      ) : carouselToggle ? (
        <Carousel
          data={filteredData}
          renderComponent={(item) => <Card data={item} type={type} />}
        />
      ) : (
        <Grid container spacing={2}>
          {filteredData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
              <Card data={item} type={type} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
