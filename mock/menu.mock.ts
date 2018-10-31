import { Menu } from "src/app/core/menu.model";

export const SIDEBAR_MENUS: Menu[] = [
    {
        id: "1", parentId: null, type: "sidebar", name: "总览", iconType: "dashboard", link: null, children: null
    },
    {
        id: "2", parentId: null, type: "sidebar", name: "系统设置", iconType: "setting", link: null, children: [
            { id: "3", parentId: "2", type: "sidebar", name: "数据字典", iconType: null, link: null, children: null },
            {
                id: "4", parentId: "2", type: "sidebar", name: "定时调度", iconType: null, link: null, children: [
                    { id: "5", parentId: "4", type: "sidebar", name: "调度配置", iconType: null, link: null, children: null },
                    { id: "6", parentId: "4", type: "sidebar", name: "调度日志", iconType: null, link: null, children: null },
                ]
            },
        ]
    },
    {
        id: "7", parentId: null, type: "sidebar", name: "订单", iconType: "dollar", link: null, children: [
            { id: "8", parentId: "7", type: "sidebar", name: "订单配置", iconType: null, link: null, children: null },
            { id: "9", parentId: "7", type: "sidebar", name: "订单管理", iconType: null, link: null, children: null },
        ]
    },
]

export const HEADER_MENUS: Menu[] = [
    {
        id: "1", parentId: null, type: "sidebar", name: "首页", iconType: "home", link: null, children: null
    },
    {
        id: "2", parentId: null, type: "sidebar", name: "后台", iconType: null, link: null, children: null
    },
    {
        id: "3", parentId: null, type: "sidebar", name: "项目", iconType: null, link: null, children: [
            { id: "4", parentId: "3", type: "sidebar", name: "需求", iconType: null, link: null, children: null },
            { id: "5", parentId: "3", type: "sidebar", name: "计划", iconType: null, link: null, children: null },
        ]
    },
]