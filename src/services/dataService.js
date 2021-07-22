export default class DataService {
  _data = {
    projectRepo: 'https://github.com/InsafKhamzin/portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! I am a Software Developer based in Toronto. For the last several years I've been working as a Full Stack developer in big FinTech companies.",
            "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and database design, I think I would be a valuable asset to your project.",
            'The main technology I have been using is C# .NET. But a few years ago I fell in love with Node.js and I use it for most of my side projects. Moreover, I am in a good relationship with React (this website runs on React btw) and fascinated by Big Data and Blockchain.',
            'When I am not in front of the computer, I usually do yoga, drink a specialty coffee and go on hikes (lake Yoho in Alberta is my favorite trail so far).',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://docs.google.com/document/d/1c_fPwOf4zo-vkSWJiCkSyiH2SZECb6JSeOSmgniaeQY/export?format=pdf',
          workExperience: [
            {
              jobTitle: 'Software Developer',
              company: 'Ceridian - Dayforce Wallet',
              location: 'Toronto',
              period: 'AUG 2020 – PRESENT',
              accomplishments: [
                'Building a unique on-demand pay application',
                'Developed a gateway from scratch between the app and the bank for Canadian users',
                'Brought Canadian part of application to general availability in 6 months',
                'Increased the performance of existing app by applying code and database design best practices',
                'Expanded the overall project’s unit tests coverage from 30% to 80%. Started applying integration tests',
                'Technologies used: C#, JS, ASP.NET, SQL Server, Redis, Kafka, Azure',
              ],
            },
            {
              jobTitle: 'Software Developer',
              company: 'Webmoney',
              location: 'Russia',
              period: 'MAY 2017 – AUG 2019',
              accomplishments: [
                'Developed and maintained financial technology applications',
                'Planned and executed a full software development life cycle (SDLC) for each assigned project',
                'Successfully integrated virtual and prepaid card issuance which brought to the company more than 100000 users and increased revenue by 5%',
                'Planned tasks for 5 developers for future sprints according to Scrum methodology',
                'Technologies used: C#, ASP.NET Core, SQL Server, React.js, RESTful Web services, Docker, Redis',
              ],
            },
            {
              jobTitle: '.NET Developer',
              company: 'Soft Universe Labs',
              location: 'Russia',
              period: 'MAY 2016 – MAR 2017',
              accomplishments: [
                'Developed CRM systems for different small-medium businesses',
                'Reviewed applications in progress of development to ensure corporate development standards',
                'Successfully planned, developed and tested modules for agricultural CRM which are used by 80% of farmers in Kazan, Russia',
                'Technologies used: C#, ASP.NET, SQL Server, JQuery, Semantic UI',
              ],
            },
          ],
          education: [
            {
              credit: 'Post-Graduate Database Application Development',
              place: 'Seneca College, Canada, Toronto',
              gpa: '3.9/4.0 GPA',
              period: 'SEPT 2019 – APR 2020',
            },
            {
              credit: 'Bachelor in Software Engineering',
              place: 'Kazan National Research Technical University, Russia',
              gpa: '3.8/4.0 GPA',
              period: 'SEPT 2014 – AUG 2018',
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
              title: 'Dayforce Wallet',
              description:
                'Dayforce Wallet is a modern way to pay employees that gives them access to their earned wages on demand. With Dayforce Wallet, you can collect your pay when you want, even the day of your shift.',
              myRole:
                'building a gateway between the app and the Canadian bank. Applying best code and database design practices to achieve high performance. Planning and implementing unit/integration tests.',
              techStack:
                'C#, ASP.NET Core, SQL Server, JS, Azure, Redis, Kafka',
              url: 'https://www.dayforcewallet.com/',
            },
            {
              title: 'Cryptowealth',
              description:
                'Cryptowealth is an information site that tells the user how to invest in crypto with the lowest risks and the highest profit. You can choose the amount that you are ready to allocate per month, the level of risk - and you will be shown how much and what coin invest to. The whole purpose of this project is to show people that crypto is although an aggressive investment tool, but quite profitable if you have a clear strategy and a diversified portfolio.',
              myRole: 'Co-Creator',
              techStack: 'React',
              url: 'https://cryptowealth.app/',
              repo: 'https://github.com/dsych/crypto-advisor',
            },
            {
              title: 'Cards.Webmoney',
              description:
                "Cards.Webmoney is a system for issuing and managing prepaid and virtual payment cards. Users can issue a payment card within few minutes, after that the card will be delivered on an address or provided right away if it's virtual. Cards.Webmoney is integrated with different payment processing systems such as WaveCrest, PaySpark, IntraPay.",
              myRole:
                "creating gateways between Cards.Webmoney and processing systems, developing and testing new features in the user's dashboard, maintaining and refactoring the existing functionality.",
              techStack: 'C#, ASP.NET, SQL Server, JavaScript, TeamCity CI',
              url: 'https://cards.web.money/en',
            },
            {
              title: 'Guarantee.Money',
              description:
                'Guarantee.money is an escrow system that helps people to safely make a deal on the internet. The service acts as a trusted party in the transaction between the seller and the buyer. During the transaction period, the service expects confirmation from both participants about the completion or violation of conditions.',
              myRole:
                "designing, developing and testing core project's functions. Assigning tasks and planning future sprints for other developers. Integrating different payment methods such as payment cards, e-wallets, crypto.",
              techStack:
                'C#, ASP.NET, React/Redux, SQL Server, Dapper ORM, TeamCity CI',
              url: 'https://guarantee.money/',
            },
            {
              title: 'Platron.Pro',
              description:
                'Platron.Pro is a mass payout service for organizations. It provides a full range of direct gateways to integrated money transfer systems, credit organizations, mobile operators, etc.',
              myRole: 'Integrating mass payouts to mobile operators.',
              techStack: 'C#, ASP.NET, SQL Server, Entity Framework',
              url: 'https://www.platron.pro',
            },
            {
              title: 'JustOne Game',
              description:
                'JustOne is a word guessing game that is essentially a clone of the real JustOne game with the same ruleset and also has login/signup and real-time video chat features.',
              techStack: 'MERN WebRTC Socket.io',
              myRole:
                'Implementing the Peer To Peer video conferencing using WebRTC and Socket.io. Building React UI components. Planning the gaming engine.',
              url: 'https://play-just-one.herokuapp.com/',
              repo: 'https://github.com/hatchways/team-coconut',
            },
            {
              title: 'App Factory',
              description:
                "This project is supposed to be a constructor for building iOS/Android apps. Unfortunately, it didn't make it to MVP but you still could check the git repo. Be careful, it's not the prettiest code I've written...",
              techStack: 'MERN',
              myRole: 'Co-Creator. Implementing backend part.',
              repo: 'https://github.com/InsafKhamzin/app-builder',
            },
            {
              title: 'CryptoBot',
              description:
                'CryptoBot is a Telegram chatbot that provides updated info about every existing cryptocurrency.',
              techStack: 'Node.js, Serverless, AWS S3, Telegram API',
              myRole: 'Creator',
              url: 'https://t.me/crypto_info1_bot',
              repo: 'https://github.com/InsafKhamzin/crypto-info-bot',
            },
            {
              title: 'My Portfolio Site',
              description:
                'My personal website in old-school Windows95 design.',
              techStack: 'React, GitHub pages',
              repo: 'https://github.com/InsafKhamzin/portfolio',
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
              name: 'C# .NET',
              progress: 100,
            },
            {
              name: 'SQL Server',
              progress: 100,
            },
            {
              name: 'React/Redux',
              progress: 90,
            },
            {
              name: 'Node.js',
              progress: 90,
            },
            {
              name: 'Docker',
              progress: 90,
            },
            {
              name: 'MongoDB',
              progress: 80,
            },
            {
              name: 'Typescript',
              progress: 70,
            },
            {
              name: 'AWS/Azure',
              progress: 70,
            },
            {
              name: 'Kubernetes',
              progress: 60,
            },
            {
              name: 'Hadoop',
              progress: 50,
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
          email: 'khamzin.insaf@gmail.com',
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/insaf-khamzin-915237129/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/InsafKhamzin',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/insafikus/',
            },
            {
              name: 'FaTwitter',
              link: 'https://twitter.com/InsafKhamzin',
            },
            {
              name: 'FaMedium',
              link: 'https://medium.com/@hamzin730insaf',
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
