export const portfolioData = {
  personalInfo: {
    name: "Asadulla Khan",
    title: "Final Year B.Tech Student | MERN Stack Developer",
    email: "asadullak2226@gmail.com",
    phone: "+91 7985366192",
    location: "Prayagraj, India",
    about: "B.Tech in Electrical Engineering at Motilal Nehru National Institute of Technology Allahabad. Passionate full-stack developer with expertise in MERN stack and competitive programming. Solved 900+ DSA problems across various platforms.",
    education: [
      {
        institution: "Motilal Nehru National Institute of Technology",
        degree: "B.Tech in Electrical Engineering",
        period: "2022-2026"
      },
      {
        institution: "Central Hindu Boys School", 
        degree: "Class XII, CBSE",
        period: ""
      },
      {
        institution: "Central Hindu Boys School",
        degree: "Class X, CBSE", 
        period: ""
      }
    ],
    socialLinks: {
      github: "https://github.com/Khanasad2026",
      linkedin: "https://www.linkedin.com/in/asadulla-khan-808a2626a/",
      leetcode: "https://leetcode.com/u/asad__2226/",
      codeforces: "https://codeforces.com/profile/auk__2226",
      codechef: "https://www.codechef.com/users/asadulla_22"
    },
    achievements: [
      "Specialist on Codeforces (Max. Rating 1474)",
      "Knight on Leetcode (Max. Rating 1863)", 
      "3★ on CodeChef (Max. Rating 1701)",
      "Global rank 199 in CodeChef Starters 144 Division 2",
      "Global rank 2614 in Codeforces Round 912 (Div. 2)",
      "Solved over 500 DSA Problems on Leetcode"
    ]
  },

  skills: {
    technical: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "React.js", level: 70 },
      { name: "Node.js", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "SQL", level: 80 }
    ],
    frameworks: ["ReactJS", "ExpressJS"],
    databases: ["MongoDB", "MySQL"],
    tools: ["VS Code", "Git", "Clerk", "Stripe"],
    interests: ["DSA", "Problem Solving", "Competitive Programming", "Web Development"]
  },

  projects: [
    {
      id: 1,
      title: "LearnEzy-Edeny",
      description: "A scalable Learning Management System (LMS) empowering educators to create and publish online courses.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Clerk", "Stripe"],
      features: [
        "Integrated Clerk for secure Google Authentication",
        "Role-based access (educator vs student)", 
        "Stripe payments for course enrollment",
        "Protected routes and conditional content rendering",
        "Educator dashboard for course management",
        "REST APIs for course handling and payments"
      ],
      image: "/images/learnezy.jpg",
      liveLink: "https://lms-frontend-git-main-asadullas-projects.vercel.app/",
      githubLink: "https://github.com/Khanasad2026/LMS",
      featured: true
    },
    {
      id: 2, 
      title: "MediFlow Manager",
      description: "A full-featured hospital management system for streamlined healthcare workflows and data management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Dual portal for patients and administrators",
        "Online appointment booking system",
        "Admin dashboard for patient records",
        "Secure data protection measures",
        "Digital workflow management"
      ],
      image: "/images/mediflow.jpg",
      liveLink: "https://github.com/Khanasad2026/MEDIFLOW-DEPLOY",
      githubLink: "https://github.com/Khanasad2026/MEDIFLOW-DEPLOY",
      featured: true
    }
  ],

  experience: [
    {
      id: 1,
      role: "Student Mentor", 
      organization: "Student Mentorship Program",
      period: "2023-Present",
      description: "Mentoring juniors and counselling them on academics and career guidance."
    }
  ]
};