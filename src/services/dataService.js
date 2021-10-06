export default class DataService {
  _data = {
    projectRepo: 'https://github.com/arjun1194/portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! I am a Software Developer based in Delhi, India. For the last several years I've been working as a Android developer in many product based companies.",
            "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and database design, I think I would be a valuable asset to your project.",
            'The main technology I have been using is Android using Java. But a few years ago I fell in love with Kotlin and I use it for most of projects. Moreover, I am in a good relationship with React (this website runs on React btw) and fascinated by AI and Machine Learning.',
            'When I am not in front of the computer, I usually read books, play chess and explore different genres of music.',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://drive.google.com/file/d/1l_dzzxB8bSfSWe9nV6gEoQY--t63xHvk/',
          workExperience: [

            {
              jobTitle: 'Android Developer',
              company: 'BankaktoGoods Groups S.L.',
              location: 'India (Remote)',
              period: 'MAY 2017 – AUG 2019',
              accomplishments: [
                'developed a library using Bluetooth Classic RFCOMM Sockets for ESC/POS compatible POS Thermal Printers. Used kotlin-coroutines and android architecture components.',
                'developed a library to render Realtime Clusters on MapView in android, and syncing realtime location with Servers. used FusedLocationProviders and Google Maps SDK',
                'Performance improvements in All 3 Apps, Fixed Memory leaks and Bugs leading to 35% growth in the Order completion Metric.',
                'Complete Redesign of all 3 Apps using Material Design Guidelines and Constraint Layout'
              ],
            },
            {
              jobTitle: 'Software Development Engineer',
              company: 'Zaya Learning Labs pvt. ltd.',
              location: 'Mumbai, India',
              period: 'AUGUST 2020 – MAR 2021',
              accomplishments: [
                'Made Native Modules for React Native codebase for background tasks using Foreground Services.',
                'Contributed to Several Modules in the react native project.',
                'Worked on 3 Native apps using Google\'s Best Practices for Android, used MVVM architecture and Android Jetpack Libraries like - Lifecycle, ViewModel, Room db, Paging Library, Fragment-KTX ,Hilt Dependency Injection Kotlin Coroutines, Flow and Retrofit',
                'Worked with 3rd Party Libraries like, Firebase Push Notifications, Firebase DeepLinks, Oauth Social Login using Google and Facebook , Firebase Crashlytics, Facebook Marketing Events and Analytics',
              ],
            },
            {
              jobTitle: 'Software Intern',
              company: 'PPS Project Striker pvt. ltd.',
              location: 'Noida, India',
              period: 'FEB 2020 – AUGUST 2020',
              accomplishments: [
                'Learned About WebRTC - Learned Web RTC - a free, open-source project providing web browsers and mobile applications with real-time communication via simple APIs.',
                'Implemented a Prototype of the Video conferencing platform Inogit.com using peer.js a implementation of WebRTC including setting up and configuration of STUN and TURN servers manually',
                'Learned the Progressive Web Framework Vue.js and Material UI Library materialize.css',
                'Technologies used: Vue.js, Spring boot, Java, SQL, Neo4j, Elastic Search',
              ],
            },
          ],
          education: [
            {
              credit: 'Bachelor of Technology - Computer Science Engineering',
              place: 'Amity University, Noida',
              gpa: '7.0 GPA',
              period: 'AUG 2016 - JULY 2020',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Amihub - Amity Attendance Tracker',
              description:
                  'Offline first Attendance tracker for Amity University',
              techStack: 'Flutter, Spring, AWS- EC2, RDS, Firebase - Messaging, Crashlytics',
              repo: 'https://github.com/arjun1194/Amihub',
            },
            {
              title: 'Ekta Films Website',
              description:
                  'Website for Ekta Films pvt. ltd. ',
              techStack: 'Vue.js, Quasar Framework, Firebase hosting',
              repo: 'https://github.com/arjun1194/Film-gallery-frontend-vue',
            },
              {
              title: 'My Portfolio Site',
              description:
                'My personal website in old-school Windows95 design.',
              techStack: 'React, GitHub pages',
              repo: 'https://github.com/arjun1194/portfolio',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Android',
              progress: 100,
            },
            {
              name: 'Kotlin',
              progress: 100,
            },
            {
              name: 'Jetpack',
              progress: 90,
            },
            {
              name: 'SQLite',
              progress: 90,
            },
            {
              name: 'JS / TS',
              progress: 80,
            },
            {
              name: 'React.js',
              progress: 70,
            },
          ],
          soft: 'Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or invite to a project, just email me on ',
          email: 'arjun1194@gmail.com',
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/arjun1194/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/arjun1194',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
