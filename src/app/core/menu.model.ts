export interface Menu {
    id: string;
    parentId: string;
    type: string;
    name: string;
    iconType: string;
    link: string;
    children: Menu[];
}