import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import axios from "axios";


export const TestPage: React.FC = () => {

    const [product, setProduct] = useState<any>(null);

    const a1 = [
        { id: 123, url: "asdasda" }, { id: 234, url: "jkagsfjka" }, { id: 345, url: "mbzxcy" }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const { data } = await axios.get(`http://localhost:3001/touristRoutes/${touristRouteId}`);
                const { data } = await axios.get(`http://localhost:3001/touristRoutes`);
                setProduct(data)
            } catch (error: any) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [])

    const FindData = () => {
        console.log(product)
        console.log(product[0].title)
        console.log(product[0].touristRoutePictures.map((p: { url: any; }) => p.url))
    }

    return <div>
        <Typography.Title level={5} type={"success"}>测试专用</Typography.Title>
        <Button size="middle" onClick={FindData}>查看数据</Button>
    </div>
}