export interface navItem {
    id: number,
    name: string,
    route: string,
}

export const navItems: navItem[] = [
    {
        id:1,
        name:'Home',
        route:'',
    },
    {
        id:2,
        name:'About',
        route:'about',
    },
    {
        id:3,
        name:'Instructor',
        route:'instructor',
    },
];
