'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let skillsData = []
    const skills = [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "PHP",
      "HTML",
      "CSS",
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "Spring Framework",
      "Laravel",
      "ASP.NET",
      "Swift",
      "Kotlin",
      "TypeScript",
      "SQL",
      "NoSQL",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "GraphQL",
      "RESTful API",
      "OAuth",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "Agile Methodology",
      "Scrum",
      "Kanban",
      "Test-Driven Development (TDD)",
      "Continuous Integration (CI)",
      "Continuous Deployment (CD)",
      "AWS",
      "Azure",
      "Google Cloud Platform (GCP)",
      "Microsoft Office Suite",
      "Excel",
      "PowerPoint",
      "Word",
      "Outlook",
      "Google Workspace (formerly G Suite)",
      "Data Analysis",
      "Data Visualization",
      "Tableau",
      "Power BI",
      "Data Mining",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Artificial Intelligence (AI)",
      "Big Data",
      "Hadoop",
      "Spark",
      "Kafka",
      "Nginx",
      "Apache",
      "Redis",
      "RabbitMQ",
      "DevOps",
      "Security",
      "Web Security",
      "Network Security",
      "Cryptography",
      "Penetration Testing",
      "Cybersecurity",
      "Ethical Hacking",
      "Linux",
      "Windows",
      "macOS",
      "iOS",
      "Android",
      "Flutter",
      "React Native",
      "Ionic",
      "Xamarin",
      "AR/VR Development",
      "Unity",
      "Unreal Engine",
      "Game Development",
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Adobe Premiere Pro",
      "Final Cut Pro",
      "3D Modeling",
      "Blender",
      "AutoCAD",
      "SolidWorks",
      "Mathematica",
      "MATLAB",
      "R",
      "Redux",
      "MobX",
      "Sass",
      "LESS",
      "Webpack",
      "Gulp",
      "Grunt",
      "Babel",
      "Electron",
      "Chrome Extensions",
      "RESTful API Design",
      "GraphQL API Design",
      "OAuth 2.0",
      "JWT (JSON Web Tokens)",
      "Elasticsearch",
      "Kibana",
      "Logstash",
      "Data Engineering",
      "Data Warehousing",
      "Apache Beam",
      "Google Cloud Dataflow",
      "Amazon Redshift",
      "Snowflake",
      "Microsoft SQL Server",
      "Oracle",
      "SQLite",
      "Cassandra",
      "Apache Kafka",
      "Natural Language Processing (NLP)",
      "Speech Recognition",
      "Image Processing",
      "Robotics",
      "Reinforcement Learning",
      "Genetic Algorithms",
      "Data Science",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn"
    ];
    
    
    
    for (let i = 0; i < skills.length; i++){
      skillsData.push({name: skills[i]})
    }
    
    await queryInterface.bulkInsert('Skills', skillsData, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {});
  }
};
