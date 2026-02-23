import { Columns } from "./Columns";

export function Kanban() {
    const projects = [
        {
            id: 1,
            name: "Develop Processing Plans",
            color: "bg-[#9d7fd1]",
            tasks: [
                {
                    id: 101,
                    title: "Define business objectives",
                    description: "Identify KPIs and align stakeholders.",
                    status: "todo",
                    priority: "high",
                    createdAt: "2026-02-15",
                    dueDate: "2026-02-28"
                },
                {
                    id: 102,
                    title: "Map internal workflows",
                    description: "Document current operational processes.",
                    status: "inProgress",
                    priority: "medium",
                    createdAt: "2026-02-10",
                    dueDate: "2026-03-05"
                },
                {
                    id: 103,
                    title: "Finalize documentation",
                    description: "Review and publish final report.",
                    status: "done",
                    priority: "low",
                    createdAt: "2026-01-20",
                    dueDate: "2026-02-01"
                },
                {
                    id: 104,
                    title: "Finalize documentation",
                    description: "Review and publish final report.",
                    status: "done",
                    priority: "low",
                    createdAt: "2026-01-20",
                    dueDate: "2026-02-01"
                }
            ]
        },
        {
            id: 2,
            name: "Recruit New Talent",
            color: "bg-[#ceb0e8]",
            tasks: [
                {
                    id: 201,
                    title: "Publish job offer",
                    description: "Post job listing across platforms.",
                    status: "done",
                    priority: "medium",
                    createdAt: "2026-02-01",
                    dueDate: "2026-02-05"
                },
                {
                    id: 202,
                    title: "Screen CVs",
                    description: "Shortlist qualified candidates.",
                    status: "inProgress",
                    priority: "high",
                    createdAt: "2026-02-06",
                    dueDate: "2026-02-20"
                },
                {
                    id: 203,
                    title: "Schedule interviews",
                    description: "Coordinate interviews with managers.",
                    status: "todo",
                    priority: "medium",
                    createdAt: "2026-02-18",
                    dueDate: "2026-03-01"
                },
                {
                    id: 204,
                    title: "Schedule interviews",
                    description: "Coordinate interviews with managers.",
                    status: "todo",
                    priority: "medium",
                    createdAt: "2026-02-18",
                    dueDate: "2026-03-01"
                }
            ]
        },
        {
            id: 3,
            name: "Training Program",
            color: "bg-[#7F8AD1]",
            tasks: [
                {
                    id: 301,
                    title: "Prepare training materials",
                    description: "Create slides and documentation.",
                    status: "inProgress",
                    priority: "high",
                    createdAt: "2026-02-12",
                    dueDate: "2026-03-10"
                },
                {
                    id: 302,
                    title: "Book conference room",
                    description: "Reserve venue for training sessions.",
                    status: "todo",
                    priority: "low",
                    createdAt: "2026-02-18",
                    dueDate: "2026-02-25"
                },
                {
                    id: 303,
                    title: "Conduct first session",
                    description: "Deliver training to first group.",
                    status: "todo",
                    priority: "medium",
                    createdAt: "2026-02-20",
                    dueDate: "2026-03-15"
                },
                {
                    id: 304,
                    title: "Conduct first session",
                    description: "Deliver training to first group.",
                    status: "todo",
                    priority: "medium",
                    createdAt: "2026-02-20",
                    dueDate: "2026-03-15"
                }
            ]
        },
        {
            id: 4,
            name: "Market Expansion",
            color: "bg-[#f4d35e]",
            tasks: [
                {
                    id: 401,
                    title: "Analyze target regions",
                    description: "Research potential new markets.",
                    status: "done",
                    priority: "high",
                    createdAt: "2026-01-10",
                    dueDate: "2026-01-25"
                },
                {
                    id: 402,
                    title: "Prepare budget proposal",
                    description: "Estimate expansion costs.",
                    status: "inProgress",
                    priority: "medium",
                    createdAt: "2026-02-05",
                    dueDate: "2026-03-01"
                },
                {
                    id: 403,
                    title: "Launch campaign",
                    description: "Start marketing campaign.",
                    status: "todo",
                    priority: "high",
                    createdAt: "2026-02-19",
                    dueDate: "2026-03-20"
                }
            ]
        },
        {
            id: 5,
            name: "Product Redesign",
            color: "bg-[#8ecae6]",
            tasks: [
                {
                    id: 501,
                    title: "UX research",
                    description: "Conduct user interviews.",
                    status: "done",
                    priority: "medium",
                    createdAt: "2026-01-15",
                    dueDate: "2026-02-01"
                },
                {
                    id: 502,
                    title: "Create wireframes",
                    description: "Design new layout concepts.",
                    status: "inProgress",
                    priority: "high",
                    createdAt: "2026-02-10",
                    dueDate: "2026-03-05"
                },
                {
                    id: 503,
                    title: "Prototype testing",
                    description: "Test interactive prototype.",
                    status: "todo",
                    priority: "medium",
                    createdAt: "2026-02-20",
                    dueDate: "2026-03-18"
                }
            ]
        }
    ];
    return (
        <div>
            <Columns projects={projects} />
        </div>
    )
}