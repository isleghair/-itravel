import React from "react";
import { useEffect, useState } from "react";
import { Header, Footer, ActivityCard } from "../../components";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from 'react-redux';
import { getActivityList } from '../../redux/activities/slice';
import { Spin } from "antd";
import styles from "./ActivityPage.module.css";

export const ActivityPage: React.FC = () => {

    const loading = useSelector(state => state.activityList.loading)
    const error = useSelector(state => state.activityList.error)
    const activities = useSelector(state => state.activityList.data)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivityList());
    }, [])

    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <div>网站出错：{error}</div>;
    }

    return <>
        <Header />
        {/* 活动卡片组件 */}
        <div className={styles.activityList}>
            {activities.map((r: any) => (
                <ActivityCard id={r.id} title={r.title} image={r.image} author={r.author} introduce={r.introduce} />
            ))}
        </div>
        <Footer />
    </>
}