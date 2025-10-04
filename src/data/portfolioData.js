// Portfolio data structure - easily expandable for new sections
export const portfolioSections = [
  {
    id: 'about',
    title: 'About',
    icon: '👨‍💻',
    description: 'Learn about my journey, passion, and expertise in software development.',
    color: '#00ff00',
    terminalCommand: 'about'
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: '🚀',
    description: 'Explore my portfolio of innovative projects and technical achievements.',
    color: '#00aaff',
    terminalCommand: 'projects'
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: '⚡',
    description: 'Discover my technical skills and expertise across various technologies.',
    color: '#ff6600',
    terminalCommand: 'skills'
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: '📧',
    description: 'Get in touch and connect with me for opportunities and collaborations.',
    color: '#ff0066',
    terminalCommand: 'contact'
  }
];

// Detailed content for each portfolio section
export const portfolioContent = {
  about: {
    title: 'About Me',
    content: (
      <div className="about-content">
        <div className="about-header">
          <div className="profile-photo">
            <img 
              src="/images/nishanth-reddy.jpg" 
              alt="Nishanth Reddy - Software Developer"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="photo-placeholder" style={{display: 'none'}}>
              <div className="placeholder-icon">👨‍💻</div>
              <p>Add your photo here</p>
            </div>
          </div>
          <div className="profile-info">
            <h3>Hello, I'm G NISHANTH REDDY</h3>
            <p className="profile-title">B.Tech Information Technology Student</p>
            <p className="profile-location">📍 Vasavi College of Engineering, Hyderabad</p>
          </div>
        </div>
        
        <div className="about-body">
          <p>
            A motivated Information Technology student pursuing a B.Tech degree at Vasavi College of Engineering 
            with strong skills in full-stack web development. I'm passionate about designing and implementing 
            scalable web applications using React and Node.js.
          </p>
          
          <h3>My Journey</h3>
          <p>
            Currently in my 2nd year of B.Tech with a GPA of 8.49/10.0, I've gained practical industry exposure 
            through an internship at Nirvaha, where I collaborated with a dynamic team to implement innovative 
            solutions and enhance website functionality. My journey includes developing web applications that 
            promote mental and emotional well-being.
          </p>
          
          <h3>Education</h3>
          <div className="education-grid">
            <div className="education-item">
              <strong>Vasavi College of Engineering</strong><br/>
              B.Tech in Information Technology - GPA: 8.49/10.0<br/>
              <span className="duration">Sept 2023 – Present</span><br/>
              <span className="coursework">Coursework: Comparison of Learning Algorithms, Computational Theory</span>
            </div>
            <div className="education-item">
              <strong>Sri Chaitanya Junior College</strong><br/>
              Board of Intermediate - 96.6/100.0<br/>
              <span className="duration">Sept 2021 – May 2023</span>
            </div>
            <div className="education-item">
              <strong>Sri Chaitanya Techno Curriculum</strong><br/>
              Boards - GPA: 10/10<br/>
              <span className="duration">Sept 2020 – May 2021</span>
            </div>
          </div>
          
          <h3>Career Objective</h3>
          <p>
            Seeking an internship opportunity to apply technical knowledge, collaborate with teams, 
            and contribute to innovative software solutions. I'm eager to gain more hands-on experience 
            in full-stack development and contribute to meaningful projects.
          </p>
        </div>
      </div>
    )
  },
  projects: {
    title: 'Featured Projects',
    content: (
      <div>
        <h3>🚦 EZ-TOLL - Traffic Management System</h3>
        <p>
          Designed a traffic management system to prioritize emergency vehicles and optimize toll calculations. 
          This project demonstrates advanced algorithmic thinking and real-world problem-solving skills.
        </p>
        <ul>
          <li>Implemented Merge Sort and Dijkstra's algorithm for efficient routing and vehicle prioritization</li>
          <li>Engineered a real-time lane allocation algorithm using C and graph theory</li>
          <li>Achieved 15% reduction in average vehicle commute times during peak hours</li>
          <li>Significantly reduced traffic congestion through optimized routing</li>
        </ul>
        <p><strong>Tech Stack:</strong> C, Data Structures, Algorithms, Graph Theory</p>
        
        <h3>🌾 FarmFlow - Agricultural Marketplace</h3>
        <p>
          Built an online marketplace enabling farmers to directly sell milk and livestock products to consumers. 
          This full-stack application connects agricultural producers with end consumers efficiently.
        </p>
        <ul>
          <li>Developed user-friendly registration module for dairy producers</li>
          <li>Created platform for farmers to showcase their offerings</li>
          <li>Integrated secure e-commerce functionality with fair-trade payment systems</li>
          <li>Built complete marketplace ecosystem for agricultural products</li>
        </ul>
        <p><strong>Tech Stack:</strong> JavaScript, MongoDB, Node.js, React</p>
        
        <h3>💻 Web Development Internship Projects</h3>
        <p>
          During my internship at Nirvaha, I collaborated with a dynamic team of six to implement 
          innovative solutions and enhance website functionality.
        </p>
        <ul>
          <li>Developed and optimized web applications promoting mental and emotional well-being</li>
          <li>Gained practical experience in both front-end and back-end development</li>
          <li>Worked with React and Node.js in a professional environment</li>
          <li>Contributed to team-based software development processes</li>
        </ul>
        <p><strong>Tech Stack:</strong> React, Node.js</p>
      </div>
    )
  },
  skills: {
    title: 'Technical Skills',
    content: (
      <div>
        <h3>Programming Languages</h3>
        <p>
          <strong>C:</strong> Advanced proficiency in system programming, data structures, 
          and algorithm implementation. Used extensively in EZ-TOLL project for real-time processing.
        </p>
        <p>
          <strong>C++:</strong> Object-oriented programming concepts and advanced data structures.
        </p>
        <p>
          <strong>JavaScript:</strong> Full-stack development with modern ES6+ features, 
          async programming, and DOM manipulation.
        </p>
        <p>
          <strong>HTML:</strong> Semantic markup, accessibility, and modern web standards.
        </p>
        
        <h3>Frameworks & Libraries</h3>
        <p>
          <strong>React:</strong> Component-based architecture, hooks, state management, 
          and building interactive user interfaces. Used in FarmFlow and internship projects.
        </p>
        <p>
          <strong>Node.js:</strong> Server-side JavaScript development, RESTful API creation, 
          and backend application development.
        </p>
        
        <h3>Databases</h3>
        <p>
          <strong>MongoDB:</strong> NoSQL database design, document modeling, and data management. 
          Used in FarmFlow project for storing agricultural product data.
        </p>
        <p>
          <strong>SQL:</strong> Relational database design, query optimization, and data relationships.
        </p>
        
        <h3>Core Concepts</h3>
        <p>
          <strong>Data Structures & Algorithms:</strong> Deep understanding of sorting algorithms 
          (Merge Sort), graph algorithms (Dijkstra's), and optimization techniques.
        </p>
        <p>
          <strong>Graph Theory:</strong> Applied in EZ-TOLL for traffic routing and optimization.
        </p>
        <p>
          <strong>Sorting Algorithms:</strong> Implemented Merge Sort for efficient data processing 
          in traffic management system.
        </p>
        
        <h3>Additional Technologies</h3>
        <p>
          <strong>Cybersecurity:</strong> Introduction to security concepts and best practices.
        </p>
        <p>
          <strong>Networking:</strong> Understanding of network protocols and communication systems.
        </p>
      </div>
    )
  },
  contact: {
    title: 'Get In Touch',
    content: (
      <div>
        <h3>Let's Connect</h3>
        <p>
          I'm always excited to discuss new opportunities, collaborate on interesting 
          projects, or simply chat about technology and innovation. Currently seeking 
          internship opportunities to further develop my skills.
        </p>
        
        <h3>Contact Information</h3>
        <p>
          <strong>📧 Email:</strong> gnishanthreddy0513@gmail.com<br/>
          <strong>📱 Phone:</strong> +91 9392970938<br/>
          <strong>💼 LinkedIn:</strong> <a href="https://linkedin.com/in/nishanth-reddy" target="_blank" rel="noopener noreferrer" style={{color: '#00ff00'}}>linkedin.com/in/nishanth-reddy</a><br/>
          <strong>🐙 GitHub:</strong> <a href="https://github.com/nishanthreddy" target="_blank" rel="noopener noreferrer" style={{color: '#00ff00'}}>github.com/nishanthreddy</a>
        </p>
        
        <h3>Education & Location</h3>
        <p>
          <strong>Current Institution:</strong> Vasavi College of Engineering<br/>
          <strong>Course:</strong> B.Tech in Information Technology (2nd Year)<br/>
          <strong>GPA:</strong> 8.49/10.0<br/>
          <strong>Location:</strong> Hyderabad, India
        </p>
        
        <h3>What I'm Looking For</h3>
        <p>
          I'm particularly interested in internship opportunities that involve:
        </p>
        <ul>
          <li>Full-stack web development with React and Node.js</li>
          <li>Algorithm implementation and optimization</li>
          <li>Database design and management</li>
          <li>Team collaboration and software development processes</li>
          <li>Real-world problem solving and innovation</li>
        </ul>
        
        <h3>Availability</h3>
        <p>
          Available for internships during summer breaks and part-time opportunities 
          during academic sessions. Open to both remote and on-site opportunities 
          in Hyderabad and surrounding areas.
        </p>
        
        <h3>Response Time</h3>
        <p>
          I typically respond to emails within 24 hours. For urgent matters, 
          feel free to reach out via phone or LinkedIn.
        </p>
      </div>
    )
  }
};

// Configuration for easy customization
export const config = {
  terminal: {
    title: 'NISHANTH REDDY PORTFOLIO',
    subtitle: 'Interactive Developer Portfolio Interface',
    prompt: 'nishanth@portfolio:~$',
    welcomeMessage: [
      '> NISHANTH REDDY PORTFOLIO v2.0',
      '> Initializing secure connection...',
      '> System ready.',
      '',
      'Welcome to the interactive portfolio terminal.',
      'Type "help" for available commands or "start" to begin.',
      '',
      '👨‍💻 G NISHANTH REDDY - B.Tech IT Student',
      '🚀 Full-Stack Developer | React & Node.js',
      '📍 Vasavi College of Engineering, Hyderabad',
      ''
    ]
  },
  gameWorld: {
    title: 'NISHANTH REDDY NEXUS',
    subtitle: 'Interactive Developer Experience'
  }
};

