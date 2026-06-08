import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

export default function Card({ data, type }) {
  const getCardRender = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, songs } = data;
        return (
          <Tooltip title={`${songs?.length || 0} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt={title} className={styles.image} loading="lazy" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p className={styles.title}>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, title, likes } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt={title} className={styles.image} loading="lazy" />
              <div className={styles.banner}>
                <Chip
                  label={`${likes} Likes`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p className={styles.title}>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return getCardRender(type);
}
