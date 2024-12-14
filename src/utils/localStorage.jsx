const employees = [
  {
    Id: 1,
    firstName: "John",
    email: "john@employee.com",
    password: "123",
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Quarterly Report",
        taskDate: "15 Dec 2022",
        taskDescription: "Compile financial data for Q4 report.",
        taskCategory: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting",
        taskDate: "16 Dec 2024",
        taskDescription: "Discuss project updates and team progress.",
        taskCategory: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Timesheet",
        taskDate: "12 Dec 2024",
        taskDescription: "Ensure accurate entry of work hours.",
        taskCategory: "HR",
      },
    ],
  },
  {
    Id: 2,
    firstName: "Jane",
    email: "jane@example.com",
    password: "123",
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Marketing Poster",
        taskDate: "18 Dec 2024",
        taskDescription: "Create a poster for the upcoming campaign.",
        taskCategory: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback Meeting",
        taskDate: "17 Dec 2024",
        taskDescription: "Gather feedback from the client on the prototype.",
        taskCategory: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Research Competitors",
        taskDate: "10 Dec 2024",
        taskDescription: "Analyze competitor strategies.",
        taskCategory: "Research",
      },
    ],
  },
  {
    Id: 3,
    firstName: "Bob",
    email: "bob@smith.com",
    password: "123",
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDate: "15 Dec 2024",
        taskDescription: "Review code submitted by developers.",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDate: "14 Dec 2024",
        taskDescription: "Resolve issues reported by QA team.",
        taskCategory: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Documentation",
        taskDate: "13 Dec 2024",
        taskDescription: "Add recent updates to the project docs.",
        taskCategory: "Documentation",
      },
    ],
  },
  {
    Id: 4,
    firstName: "Alice",
    email: "alice@johnson.com",
    password: "123",
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDate: "16 Dec 2024",
        taskDescription: "Create slides for the investor meeting.",
        taskCategory: "Management",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Product Launch Event",
        taskDate: "19 Dec 2024",
        taskDescription: "Plan the product launch event schedule.",
        taskCategory: "Event Planning",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Survey Analysis",
        taskDate: "11 Dec 2024",
        taskDescription: "Analyze data from customer surveys.",
        taskCategory: "Analytics",
      },
    ],
  },
  {
    Id: 5,
    firstName: "Mike",
    email: "mike@example.com",
    password: "123",
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize Files",
        taskDate: "10 Dec 2024",
        taskDescription: "Reorganize project files in shared drive.",
        taskCategory: "Operations",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Training Plan",
        taskDate: "20 Dec 2024",
        taskDescription: "Develop a plan for employee training sessions.",
        taskCategory: "HR",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "System Upgrade",
        taskDate: "18 Dec 2024",
        taskDescription: "Upgrade the operating system on office PCs.",
        taskCategory: "IT Support",
      },
    ],
  },
];


const admin = [
  {
    Id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
setLocalStorage()

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees'))
    const adminData = JSON.parse(localStorage.getItem('admin'))

    return {employeesData, adminData}
}