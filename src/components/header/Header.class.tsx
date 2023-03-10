import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {
    withRouter, RouteComponentProps
} from "react-router-dom";
import store from "../../redux/store";
import { LanguageState } from "../../redux/language/languageReducer";
// import { useSelector } from "../../redux/hooks";
// import { useDispatch } from "react-redux";
// import { Dispatch } from "redux";
// import {
//   LanguageActionTypes,
//   addLanguageActionCreator,
//   changeLanguageActionCreator,
// } from "../../redux/language/languageActions";
// import { useTranslation } from "react-i18next";

interface State extends LanguageState { }

// class HeaderComponent extends React.Component<RouteComponentProps, State>  {
//     constructor(props: any) {
//         super(props);
//         const storeState = store.getState();
//         this.state = {
//             language: storeState.language,
//             languageList: storeState.languageList
//         }
//         store.subscribe(this.handleStoreChange)
//     }

//     handleStoreChange = () => {
//         const storeState = store.getState();
//         this.setState({
//             language: storeState.language
//         })
//     }

//     render() {
//         const { history } = this.props
//         return (
//             <div className={styles["app-header"]} >
//                 {/* top-header */}
//                 < div className={styles["top-header"]} >
//                     <div className={styles.inner}>
//                         <Typography.Text>让旅游更幸福</Typography.Text>
//                         <Dropdown.Button
//                             style={{ marginLeft: 15 }}
//                             overlay={
//                                 <Menu>
//                                     {this.state.languageList.map(l => {
//                                         return <Menu.Item key={l.code}>{l.name}</Menu.Item>
//                                     })}
//                                 </Menu>
//                             }
//                             icon={<GlobalOutlined />}
//                         >
//                             {this.state.language === "zh" ? "中文" : "English"}
//                         </Dropdown.Button>
//                         <Button.Group className={styles["button-group"]}>
//                             <Button >注册</Button>
//                             <Button >登陆</Button>
//                         </Button.Group>
//                     </div>
//                 </div>
//                 <Layout.Header className={styles["main-header"]}>
//                     <span>
//                         <img src={logo} alt="logo" className={styles["App-logo"]} />
//                         <Typography.Title level={3} className={styles.title}>
//                             React旅游网
//                         </Typography.Title>
//                     </span>
//                     <Input.Search
//                         placeholder={"请输入旅游目的地、主题、或关键字"}
//                         className={styles["search-input"]}
//                     />
//                 </Layout.Header>
//                 <Menu mode={"horizontal"} className={styles["main-menu"]}>
//                     <Menu.Item key={1}> 旅游首页</Menu.Item>
//                     <Menu.Item key={2}> 周末游</Menu.Item>
//                     <Menu.Item key={3}> 跟团游</Menu.Item>
//                     <Menu.Item key={4}> 自由行 </Menu.Item>
//                     <Menu.Item key={5}> 私家团 </Menu.Item>
//                     <Menu.Item key={6}> 邮轮 </Menu.Item>
//                     <Menu.Item key={7}> 酒店+景点 </Menu.Item>
//                     <Menu.Item key={8}> 当地玩乐 </Menu.Item>
//                     <Menu.Item key={9}> 主题游 </Menu.Item>
//                     <Menu.Item key={10}> 定制游 </Menu.Item>
//                     <Menu.Item key={11}> 游学 </Menu.Item>
//                     <Menu.Item key={12}> 签证 </Menu.Item>
//                     <Menu.Item key={13}> 企业游 </Menu.Item>
//                     <Menu.Item key={14}> 高端游 </Menu.Item>
//                     <Menu.Item key={15}> 爱玩户外 </Menu.Item>
//                     <Menu.Item key={16}> 保险 </Menu.Item>
//                 </Menu>
//             </div >
//         )
//     }
// };

// export const Header = withRouter(HeaderComponent);

class HeaderComponent extends React.Component<RouteComponentProps, State>  {
    render() {
        return <><h1>Hello World!</h1></>
    }
}

export const Header = withRouter(HeaderComponent);
