import React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { Spin, Row, Col, DatePicker, Divider, Typography, Anchor, Menu } from "antd";
import axios from "axios";
import { Header, Footer, ProductIntro, ProductComments } from "../../components";
import styles from "./DetailPage.module.css";
import { commentMockData } from "../detail/mockup";
import { getProductDetail } from "../../redux/productDetail/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { Dispatch } from 'redux';

const { RangePicker } = DatePicker;

interface MatchParams {
    touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {
    const { touristRouteId } = useParams<MatchParams>();

    // 连接store的数据
    const loading = useSelector(state => state.productDetail.loading);
    const error = useSelector(state => state.productDetail.error);
    const product = useSelector(state => state.productDetail.data)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetail(touristRouteId))
    }, []);

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
        <div className={styles["page-content"]}>
            {/* 产品介绍 与 日期选择 */}
            <div className={styles["product-intro-container"]}>
                <Row>
                    <Col span={13}>
                        <ProductIntro
                            title={product.title}
                            shortDescription={product.description}
                            price={product.originalPrice}
                            coupons={product.coupons}
                            points={product.points}
                            discount={product.price}
                            rating={product.rating}
                            pictures={product.touristRoutePictures.map((p: { url: any; }) => p.url)}
                        />
                    </Col>
                    <Col span={11}>
                        <RangePicker open={true} style={{ marginTop: 20 }} />
                    </Col>
                </Row>
            </div>
            {/* 锚点菜单 */}
            <Anchor className={styles["product-detail-anchor"]}>
                <Menu mode="horizontal">
                    <Menu.Item key={1} >
                        <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key={2} >
                        <Anchor.Link href="#fees" title="费用"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key={3} >
                        <Anchor.Link href="#notes" title="预定须知"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key={4} >
                        <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
                    </Menu.Item>
                </Menu>
            </Anchor>
            {/* 产品特色 */}
            <div id="feature" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>产品特色</Typography.Title>
                </Divider>
                <div className={styles["product-detail-features"]}>
                    <Typography.Text strong >{product.features.description}</Typography.Text>
                </div>
                <div className={styles["product-detail-pictures"]} >
                    {/* {product[0].features.pictures.map((p: string | undefined) => {
                        <Image height={500} src={p} />
                    })} */}
                    <img src="https://dimg04.c-ctrip.com/images/03013120009ggn8498D20.png"></img>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: product[0].features.text }} style={{ margin: 50 }}></div> */}
            </div>
            {/* 费用 */}
            <div id="fees" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>费用</Typography.Title>
                </Divider>
                {/* <div dangerouslySetInnerHTML={{ __html: product[0].features.text }} style={{ margin: 50 }}></div> */}
                <div className={styles["product-detail-notes"]}>
                    <img style={{ width: 1200 }} src="https://s3.bmp.ovh/imgs/2022/06/19/e67709bf31d768a4.jpg"></img>
                </div>
            </div>
            {/* 预定须知 */}
            <div id="notes" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>预定须知</Typography.Title>
                </Divider>
                {/* <div dangerouslySetInnerHTML={{ __html: product[0].features.text }} style={{ margin: 50 }}></div> */}
                <div className={styles["product-detail-notes"]}>
                    <img style={{ width: 1200 }} src="https://s3.bmp.ovh/imgs/2022/06/19/0c0a3c88152b7f28.jpg"></img>
                </div>
            </div>
            {/* 商品评价 */}
            <div id="comments" className={styles["product-detail-container"]}>
                <Divider orientation="center">
                    <Typography.Title level={3}>用户评价</Typography.Title>
                </Divider>
                <div style={{ margin: 40 }}>
                    <ProductComments data={commentMockData}></ProductComments>
                </div>
            </div>
        </div>
        <Footer />
    </>
};
