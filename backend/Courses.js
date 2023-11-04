const Courses = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "https://miro.medium.com/max/1400/1*QY5S4senfFh-mIViSi5A_Q.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Web Development Fundamentals",
    instructor: "Jane Smith",
    description: "Explore the foundational concepts of web development.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://th.bing.com/th/id/OIP.q0QYGaYXyhB1pmrG5Ow9zgAAAA?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Basics",
        content: "Introduction to HTML and CSS, creating web pages.",
      },
      {
        week: 2,
        topic: "JavaScript Fundamentals",
        content: "Learn the basics of JavaScript programming.",
      },
    ],
    students: [
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Diana Johnson",
        email: "diana@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Python for Data Science",
    instructor: "Eleanor Adams",
    description:
      "Learn Python programming for data analysis and visualization.",
    enrollmentStatus: "Closed",
    thumbnail: "https://pluspng.com/img-png/python-logo-png-open-2000.png",
    duration: "12 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "In-Person",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Python Basics",
        content: "Introduction to Python, variables, and data types.",
      },
      {
        week: 2,
        topic: "Data Analysis with Pandas",
        content: "Exploring and manipulating data with Pandas.",
      },
    ],
    students: [
      {
        id: 105,
        name: "Ethan Johnson",
        email: "ethan@example.com",
      },
      {
        id: 106,
        name: "Fiona Brown",
        email: "fiona@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Mobile App Design",
    instructor: "Michael Turner",
    description:
      "Design mobile apps with a focus on user experience and interface design.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://i.pinimg.com/originals/cf/7d/41/cf7d41514c50506da96e4d0d378a975c.jpg",
    duration: "10 weeks",
    schedule: "Fridays, 2:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: ["Basic design skills"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Mobile App Design",
        content: "Overview of mobile app design principles.",
      },
      {
        week: 2,
        topic: "User Interface Design",
        content: "Designing effective user interfaces.",
      },
    ],
    students: [
      {
        id: 107,
        name: "Grace Smith",
        email: "grace@example.com",
      },
      {
        id: 108,
        name: "Henry Davis",
        email: "henry@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "JavaScript for Beginners",
    instructor: "Olivia Turner",
    description: "Learn the basics of JavaScript programming.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://th.bing.com/th/id/OIP.Oag0dh4MINdG_qxOzJMoiwHaIB?pid=ImgDet&rs=1",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to JavaScript",
        content: "Getting started with JavaScript.",
      },
      {
        week: 2,
        topic: "Functions and Variables",
        content: "Working with functions and variables in JavaScript.",
      },
    ],
    students: [
      {
        id: 109,
        name: "Isabella Wilson",
        email: "isabella@example.com",
      },
      {
        id: 110,
        name: "Jack Lewis",
        email: "jack@example.com",
      },
    ],
  },
  {
    id: 6,
    name: "Data Science with Python",
    instructor: "David Adams",
    description: "Explore data analysis and machine learning with Python.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
    duration: "14 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Python Basics"],
    syllabus: [
      {
        week: 1,
        topic: "Data Analysis with Python",
        content: "Introduction to data analysis with Python.",
      },
      {
        week: 2,
        topic: "Machine Learning Fundamentals",
        content: "Basics of machine learning and algorithms.",
      },
    ],
    students: [
      {
        id: 111,
        name: "Katie Martin",
        email: "katie@example.com",
      },
      {
        id: 112,
        name: "Liam Brown",
        email: "liam@example.com",
      },
    ],
  },
  {
    id: 7,
    name: "Front-End Web Development",
    instructor: "Ella Turner",
    description: "Learn HTML, CSS, and JavaScript to build modern websites.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://phantomlandscapes.files.wordpress.com/2021/04/html-css-javascript.jpg",
    duration: "12 weeks",
    schedule: "Saturdays, 9:00 AM - 11:00 AM",
    location: "In-Person",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "HTML Fundamentals",
        content: "Introduction to HTML and web structure.",
      },
      {
        week: 2,
        topic: "CSS Styling",
        content: "Styling web pages with CSS.",
      },
    ],
    students: [
      {
        id: 113,
        name: "Mia Johnson",
        email: "mia@example.com",
      },
      {
        id: 114,
        name: "Noah Smith",
        email: "noah@example.com",
      },
    ],
  },
  {
    id: 8,
    name: "Full-Stack Web Development",
    instructor: "William Adams",
    description:
      "Learn both front-end and back-end development for web applications.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://th.bing.com/th/id/OIP.4W1AQGSrds4Fa63nNPzVFwAAAA?pid=ImgDet&rs=1",
    duration: "16 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["HTML, CSS, JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Front-End Basics",
        content: "Introduction to front-end technologies.",
      },
      {
        week: 2,
        topic: "Back-End Development",
        content: "Working with server-side technologies.",
      },
    ],
    students: [
      {
        id: 115,
        name: "Oliver Brown",
        email: "oliver@example.com",
      },
      {
        id: 116,
        name: "Olivia Martin",
        email: "olivia@example.com",
      },
    ],
  },
  {
    id: 9,
    name: "Mobile App Development with Swift",
    instructor: "Aiden Turner",
    description: "Learn iOS app development with Swift programming language.",
    enrollmentStatus: "Open",
    thumbnail:
      "data:image/jpeg;base64,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",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "In-Person",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to iOS Development",
        content: "Getting started with iOS app development.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating your first iOS app with Swift.",
      },
    ],
    students: [
      {
        id: 117,
        name: "Sophia Davis",
        email: "sophia@example.com",
      },
      {
        id: 118,
        name: "William Martin",
        email: "william@example.com",
      },
    ],
  },
  {
    id: 10,
    name: "Data Visualization with D3.js",
    instructor: "Liam Adams",
    description: "Create interactive data visualizations using D3.js.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://cdn-images-1.medium.com/max/1600/0*t2oqf-YQ9wdRZ8My",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "HTML, CSS"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Visualization",
        content: "Overview of data visualization concepts.",
      },
      {
        week: 2,
        topic: "D3.js Fundamentals",
        content: "Introduction to D3.js library.",
      },
    ],
    students: [
      {
        id: 119,
        name: "Sophia Smith",
        email: "sophia@example.com",
      },
      {
        id: 120,
        name: "Ella Davis",
        email: "ella@example.com",
      },
    ],
  },
  {
    id: 11,
    name: "Advanced Python Programming",
    instructor: "Ethan Martin",
    description:
      "Deepen your Python programming skills and work on complex projects.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://th.bing.com/th/id/R.eef98d145db9624051f3205edca2ba62?rik=O%2f%2fpYuRbT14tMw&riu=http%3a%2f%2fshop.techno.academy%2fweb%2fimage%2fproduct.template%2f14%2fimage_1024%3funique%3da6dbabc&ehk=LP1V141pLybEdsVrU3IeuRB4FArk0EdRX9spbh5lA5A%3d&risl=&pid=ImgRaw&r=0",
    duration: "12 weeks",
    schedule: "Fridays, 3:00 PM - 5:00 PM",
    location: "In-Person",
    prerequisites: ["Python Basics", "Data Structures"],
    syllabus: [
      {
        week: 1,
        topic: "Advanced Data Structures",
        content: "Working with complex data structures in Python.",
      },
      {
        week: 2,
        topic: "Project Work",
        content: "Collaborative project development in Python.",
      },
    ],
    students: [
      {
        id: 121,
        name: "Somya",
        email: "somy@example.com",
      },
      {
        id: 122,
        name: "Elli",
        email: "elli@example.com",
      },
    ],
  },
];

module.exports = Courses;
