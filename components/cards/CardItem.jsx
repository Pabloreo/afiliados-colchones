import React from 'react';
import Rating from '@mui/material/Rating';
import styles from './card.module.css'

const CarItem = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_item}>
        <div className={styles.card_ratings}>
          <h2>{props.rating}</h2>
          <Rating
            name="read-only"
            value={props.rating}
            precision={0.1}
            readOnly
            style={{ fontSize: `2em` }}
          />
          <h3>
            {props.rating >= 4.5
              ? 'Excelente'
              : props.rating >= 4 && props.rating < 4.5
              ? 'Muy bueno'
              : props.rating >= 3 && props.rating < 4
              ? 'Bueno'
              : props.rating >= 2 && props.rating < 3
              ? 'Regular'
              : props.rating >= 1 && props.rating < 2
              ? 'Malo'
              : 'Muy malo'}
          </h3>
        </div>
        <div className={styles.card_image}>
          <img src={props.image} width={400} alt={props.title} />
        </div>

        <div className={styles.card_attributes}>
          <h4>{props.title}</h4>
          <p>{`${props.description.substring(0, 60)}...`}</p>
        </div>
        <div className={styles.card_url}>
          <a href={props.link} target="_blank">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
