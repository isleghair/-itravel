import React, { useEffect } from "react";
import styles from "./SearchPage.module.css";
import { Header, Footer, ProductList } from "../../components";
import { useParams, useLocation } from "react-router-dom";
import { Spin, Button } from "antd";
import { searchProduct } from "../../redux/productSearch/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import ButtonGroup from "antd/lib/button/button-group";

interface MatchParms {
    keywords: string
}

export const SearchPage: React.FC = () => {

    const { keywords } = useParams<MatchParms>()
    const loading = useSelector((state) => state.productSearch.loading)
    const error = useSelector((s) => s.productSearch.error)
    const pagination = useSelector((s) => s.productSearch.pagination)
    const productList = useSelector((s) => s.productSearch.data)

    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
    }, [location])

    const onPageChange = (nextPage: any, pageSize: any) => {
        dispatch(searchProduct({ nextPage, pageSize, keywords }))
    }

    const findData = () => {
        console.log(productList)
        console.log(pagination)
    }

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
            {/* 分类过滤器 */}
            {/* <div className={styles["product-list-container"]}>
                <FilterArea />
            </div> */}

            {/* 产品列表 */}
            <div className={styles["product-list-container"]}>
                {/* <ProductList
                    data={productList}
                    paging={pagination}
                    onPageChange={onPageChange}
                /> */}

                {/* <h1>Hello World!{productList[0].}</h1> */}
                {productList.map((p: { description: any; }) => <h1>{p.description}</h1>)}
                <ButtonGroup>
                    <Button onClick={findData}>忘写字了</Button>
                </ButtonGroup>
            </div>
        </div>
        <Footer />
    </>
}