import p1 from "./assets/shop.jpg";
import p2 from "./assets/crud.jpg";
import p3 from "./assets/rat.jpg";
import p4 from "./assets/tour.jpg";
import p5 from "./assets/full.jpg";
import p6 from "./assets/project-6.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    // {
    //     name: "Dashboard",
    //     id: "dashboard",
    // },
    // {
    //     name: "Mobile App",
    //     id: "mobile-app",
    // },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "Shoping Cart",
        image: p1,
        tags: ["dashboard", "mobile-app"],
    },
    {
        name: "CRUD Operation",
        image: p2,
        tags: ["dashboard", "website"],
    },
    {
        name: "Backtracking",
        image: p3,
        tags: ["mobile-app"],
    },
    {
        name: "Tourist World",
        image: p4,
        tags: ["mobile-app"],
    },
    {
        name: "Book Store By MERN",
        image: p5,
        tags: ["website", "dashboard"],
    },
    {
        name: "Saving Photo Memories",
        image: p6,
        tags: ["website"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 20,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 0,
        description: "YEARS OF<br />EXPERIENCE <br/> FRESHER",
    },
    {
        id: 3,
        year: 10,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 8,
        description: "COMMUNITY<br />POSTS",
    },
];
