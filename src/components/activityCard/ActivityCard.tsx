import React from "react";
import styles from "./ActivityCard.module.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";

interface PropsType {
    id: string;
    title: string;
    author: string;
    introduce: string;
    image: string;
}

export const ActivityCard: React.FC<PropsType> = ({ id, title, author, introduce, image }) => {
    return (
        <Link to={`activityDetail/${id}`}>
            <div className={styles.cardContainer}>
                <img src={image} width={220} height={260}></img>
                <div className={styles.cardTitle}>
                    <text >{title.slice(0, 20)}</text>
                </div>
                <div className={styles.cardAuthor}>
                    <img src={image} width={25} height={25} className={styles.author}></img>
                    <text className={styles.neckName}>{author}</text>
                </div>
            </div>
        </Link>
    )
}