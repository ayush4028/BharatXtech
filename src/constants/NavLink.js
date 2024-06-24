const NavLink = [
    {
        title: "Home",
        link: "#",
        subMenu: [
            {
                title: "Home 1",
                link: "#",
            },
            {
                title: "Home 2",
                link: "#",
            },
            {
                title: "Home 3",
                link: "#",
            },
        ],
        
        additionClassNames: "grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px]"

    },
    {
        title: "About Us",
        link: "#",
    },
    {
        title: "Solutions",
        link: "#",
    },
    {
        title: "Projects",
        link: "#",
        subMenu: [
            {
                title: "Project 1",
                link: "#",
            },
            {
                title: "Project 2",
                link: "#",
            },
            {
                title: "Project 3",
                link: "#",
            },
        ],
        additionClassNames: "grid w-[400px] gap-3 md:w-[200px] md:grid-cols-1",
        navMenu:[
            {
                title: "Project1",
                link: "#",
            },
            {
                title: "Project2",
                link: "#",
            },
            {
                title: "Project3",
                link: "#",
            },
        ],
        mobNavClassNames: "grid w-[230px] gap-3  md:grid-cols-1"
    },
    {
        title: "Blogs",
        link: "#",
    },
    {
        title: "Contact Us",
        link: "#",
    },
];

export default NavLink;