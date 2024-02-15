import React, { useEffect, useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Tooltip } from "antd";
import "./MainLayout.css";
import { RiFileCopy2Line } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [getMenu, setMenu] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    useEffect(() => {
        // (() => {
        //       axios
        //         .get("company-details")
        //         .then((res) => {
        //             setCompanyDetails(res.data.company_info);
        //         });

        //     const getMenuList = localStorage.getItem("user");

        //     if (getMenuList !== null) {
        //         const getUserInfo = JSON.parse(getMenuList);
        //         setUser({
        //             mail: getUserInfo.email,
        //             name: getUserInfo.name,
        //             package_name: getUserInfo.package_name,
        //         });
        //         const list = getUserInfo.package_permission;
        //         // TODO: Marge Menu List
        //         setMenu([
        //             {
        //                 bn_name: "dashboard",
        //                 created_at: "2023-03-12T06:26:10.000000Z",
        //                 deleted_at: null,
        //                 en_name: "Dashboard",
        //                 id: 9,
        //                 position: 0,
        //                 url: "/dashboard",
        //                 updated_at: "2023-07-20T00:26:54.000000Z",
        //             },
        //             ...list,
        //         ]);
        //     }
        // })();
    

        setMenu([
            {
                created_at: "2023-03-12T06:26:10.000000Z",
                deleted_at: null,
                en_name: "Dashboard",
                id: 9,
                position: 0,
                url: "/dashboard",
                updated_at: "2023-07-20T00:26:54.000000Z",
            },
            {
                created_at: "2023-03-12T06:26:10.00000kl;0Z",
                deleted_at: null,
                en_name: "Employee",
                id: 9,
                position: 0,
                // url: "/dashboard",
                updated_at: "2023-07-20T00:26:54.00gjkhj0000Z",
                sub_menu: [
                    {
                        created_at: "2023-03-12T06:26:10.00sdfsdf0000Z",
                        deleted_at: null,
                        en_name: "Employee List",
                        id: 9,
                        position: 0,
                        url: "/employee-list",
                        updated_at: "2023-07-20T00:26:54.000000Z",
                    },
                    {
                        created_at: "2023-03-12T06:26:10.00fghf00xcvxc00Z",
                        deleted_at: null,
                        en_name: "Designation List",
                        id: 9,
                        position: 0,
                        url: "/dashboard",
                        updated_at: "2023-07-20T00:26:54.000000Z",
                    },
                    {
                        created_at: "2023-03-12T06:26:10.00jhkl00xcvxc00Z",
                        deleted_at: null,
                        en_name: "Department List",
                        id: 9,
                        position: 0,
                        url: "/dashboard",
                        updated_at: "2023-07-20T00:26:54.000000Z",
                    },
                    {
                        created_at: "2023-03-12T06:26:10.0asdasd000xcvxc00Z",
                        deleted_at: null,
                        en_name: "Employment Type",
                        id: 9,
                        position: 0,
                        url: "/dashboard",
                        updated_at: "2023-07-20T00:26:54.000000Z",
                    },
                    {
                        created_at: "2023-03-12T06:26:10.0000Z",
                        deleted_at: null,
                        en_name: "Pending Employee",
                        id: 9,
                        position: 0,
                        url: "/dashboard",
                        updated_at: "2023-07-20T00:26:54.000000Z",
                    },
                ],
            },
        ]);
    }, []);

    function getItem(label, key, icon, children, url, tooltip) {
        return {
            key,
            icon,
            children,
            label,
            url,
            tooltip, // New tooltip property
        };
    }
    const items = getMenu.map((menuItem) => {
        const { en_name, created_at, icon, sub_menu, url } = menuItem;
        if (sub_menu && sub_menu.length > 0) {
            // If sub-menu exists, create a new item with children
            const children = sub_menu.map((child) => ({
                ...getItem(
                    <Tooltip title={child.en_name} placement="right" key={child.created_at}>
                        <div className="-mr-3">{child.en_name}</div>
                    </Tooltip>,
                    child.created_at,
                    null,
                    null,
                    child.url
                ),
                onClick: () => navigate(child.url),
            }));

            return getItem(
                //en_name,
                en_name,
                created_at,
                <RiFileCopy2Line className="fileIcon" />,
                children,
                url
            );
        } else {
            const item = getItem(en_name, created_at, <AiFillHome className="fileIcon" />, null, url);
            item.onClick = () => navigate(url);
            return item;
        }
    });

    return (
        <Layout className="h-screen">
            <div className="hidden md:block">
                <Sider trigger={null} collapsible collapsed={collapsed} width={260} className="">
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        className="h-screen bg-primary-color text-white px-3 pt-[86px] "
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={items}
                    />
                </Sider>
            </div>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: "#FFFFFF",
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    className=" bg-[#EFF2F9]"
                    style={{
                        padding: "14px 16px ",
                        minHeight: 280,
                        // background: colorBgContainer,
                        // borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;
