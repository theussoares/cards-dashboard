interface Card {
    title: string;
    description: string;
    tags: string[];
    author: string;
    id: string;
    bookmarked?: boolean;
    fromUser?: boolean;
    recentOpened?: boolean;
    rate: number;
}

export const mockCards: Card[] = [
    {
        id: "1",
        title: "React Best Practices",
        description: "A comprehensive guide to writing clean and efficient React code",
        tags: ["react", "javascript", "frontend"],
        author: "John Doe",
        bookmarked: true,
        recentOpened: true,
        rate: 3
    },
    {
        id: "2",
        title: "TypeScript Advanced Types",
        description: "Deep dive into TypeScript's advanced type system and utilities",
        tags: ["typescript", "types", "programming"],
        author: "Jane Smith",
        bookmarked: false,
        recentOpened: false,
        rate: 4
    },
    {
        id: "3",
        title: "Node.js Performance Tips",
        description: "Optimize your Node.js applications for better performance",
        tags: ["nodejs", "backend", "performance"],
        author: "Mike Johnson",
        bookmarked: true,
        recentOpened: true,
        rate: 5
    },
    {
        id: "4",
        title: "CSS Grid Layout Guide",
        description: "Master CSS Grid for modern web layouts",
        tags: ["css", "layout", "grid"],
        author: "Sarah Wilson",
        bookmarked: false,
        recentOpened: false,
        rate: 2
    },
    {
        id: "5",
        title: "Database Design Patterns",
        description: "Common patterns and best practices for database design",
        tags: ["database", "sql", "design"],
        author: "Robert Brown",
        bookmarked: true,
        recentOpened: false,
        rate: 5
    }
];