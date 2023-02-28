import React from "react";
import { Menu } from "antd";
import { GiftOutlined } from "@ant-design/icons";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";

export const SideMenu: React.FC = () => {
    return (
        <Menu mode="vertical" className={styles["side-menu"]}>
            {sideMenuList.map((m, index) => (
                <Menu.SubMenu
                    key={`side-menu-${index}`}
                    title={
                        <span>
                            <GiftOutlined />
                            {m.title}
                        </span>
                    }
                >
                    {m.subMenu.map((sm, smindex) => (
                        <Menu.SubMenu
                            key={`sub-menu-${smindex}`}
                            title={
                                <span>
                                    <GiftOutlined />
                                    {sm.title}
                                </span>
                            }
                        >
                            {sm.subMenu.map((sms, smsindex) => (
                                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                                    <span>
                                        <GiftOutlined />
                                        {sms}
                                    </span>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    )
}