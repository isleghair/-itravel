import React from "react";
import { Header, Footer, ActivityCard } from "../../components";
import { useSelector } from "../../redux/hooks";
import { Button, Typography } from "antd";
import { Link, RouteComponentProps, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivityDetail } from "../../redux/activityDetail/slice";
import styles from "./ActivityDetailPage.module.css";

interface MatchParams {
    activityId: string
}

export const ActivityDetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {

    const { activityId } = useParams<MatchParams>();
    const activity = useSelector(state => state.activityDetail.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivityDetail(activityId));
    }, []);

    return <>
        <Header />
        <div className={styles["detail-back"]}>
            <div className={styles["joinactivity"]}>
                <Typography.Title>活动详情</Typography.Title>
                <Typography.Text>{activity.title}</Typography.Text>
                <div className={styles.cardContainer}>
                    <img src={activity.image} width={220} height={260}></img>
                    <div className={styles.cardTitle}>
                        <text >{activity.image.slice(0, 20)}</text>
                    </div>
                    <div className={styles.cardAuthor}>
                        <img src={activity.image} width={25} height={25} className={styles.author}></img>
                        <text className={styles.neckName}>{activity.author}</text>
                    </div>
                </div>
                <Typography.Text>时间：{activity.time} </Typography.Text>
                <Typography.Text>地点：{activity.address}</Typography.Text>
                <Link to={`/groupChat`}>
                    <Button>进入活动群聊</Button>
                </Link>
            </div>
        </div>
        <Footer />
    </>
}