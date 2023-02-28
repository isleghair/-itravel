import React from "react";
import { Header, Footer } from "../../components";
import { useSelector } from "../../redux/hooks";
import { Typography } from "antd";
import { RouteComponentProps, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivityDetail } from "../../redux/activityDetail/slice";

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
        <div>
            <Typography.Title>活动的详情页面{activityId}</Typography.Title>
            <Typography.Text>详细内容</Typography.Text>
            <img src={activity.image}></img>
        </div>
        <Footer />
    </>
}