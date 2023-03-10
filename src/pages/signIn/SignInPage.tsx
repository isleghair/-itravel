import React from "react";
import styles from "./SignInPage.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
import { SignInForm } from "./SignInForm";
const { Header, Footer, Content } = Layout;


export const SignInPage: React.FC = (props) => {
    const menu = (
        <Menu>
            <Menu.Item>中文</Menu.Item>
            <Menu.Item>English</Menu.Item>
        </Menu>
    );
    return (
        <Layout className={styles["user-layout-container"]}>
            <Header className={styles["header"]}>
                <div className={styles["lang"]}>
                    <Dropdown overlay={menu}>
                        <Button>
                            {" "}
                            选择语言 <CaretDownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </Header>
            <Content className={styles["content"]}>
                <div className={styles["top"]}>
                    <div className={styles["content-header"]}>
                        <Link to="/">
                            <img alt="logo" className={styles["logo"]} src={logo} />
                            <span className={styles["title"]}>React 旅游网</span>
                        </Link>
                    </div>
                    <div className={styles["desc"]}>
                        欢迎来到Leghair旅游网
                    </div>
                </div>
                <SignInForm />
            </Content>
            <Footer style={{ textAlign: "center" }}>Footer就不写了，太累了</Footer>
        </Layout>
    )
}