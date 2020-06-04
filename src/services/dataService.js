export default class DataService {
    _data = {
        projectRepo: "https://github.com/InsafKhamzin/portfolio",
        react95Repo: "https://github.com/React95/React95",
        items: [
            {
                id: 'about',
                name: 'About.txt',
                icon: 'info_bubble',
                content: {
                    paragraphs: [
                        "Hi! I am a Software Developer based in Toronto, just graduated from Seneca College and I am very excited to start my career in Canada. For the last several years I've been working as a Full Stack developer in a big FinTech company.",
                        "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and database design, I think I would be a valuable asset to your project.",
                        "The main technology I have been using is C# .NET. But recently I fell in love with Node.js and I use it for most of my side projects. Moreover, I am in a good relationship with React (this web-site runs on React btw) and really fascinated by Machine Learning and Big Data.",
                        "When I am not in front of the computer, I usually do yoga, drink a specialty coffee and take quick walks in beatiful High Park."
                    ]
                }
            },
            {
                id: 'resume',
                name: 'Resume.txt',
                icon: 'notepad_2',
                content: {
                    workExperience: [
                        {
                            jobTitle: "Software Developer",
                            company: "Webmoney",
                            location: "Russia",
                            period: "MAY 2017 – AUG 2019",
                            accomplishments: [
                                "Developed and maintained financial technology applications",
                                "Planned and executed a full software development life cycle (SDLC) for each assigned project",
                                "Successfully integrated virtual and prepaid card issuance which brought to the company more than 100000 users and increased revenue by 5%",
                                "Planned tasks for 5 developers for future sprints according to Scrum methodology",
                                "Technologies used: C#, ASP.NET Core, SQL Server, React.js, RESTful Web services, Docker, Redis"
                            ]
                        },
                        {
                            jobTitle: ".NET Developer",
                            company: "Soft Universe Labs",
                            location: "Russia",
                            period: "MAY 2016 – MAR 2017",
                            accomplishments: [
                                "Developed CRM systems for different small-medium businesses",
                                "Reviewed applications in progress of development to ensure corporate development standards",
                                "Successfully planned, developed and tested modules for agricultural CRM which are used by 80% of farmers in Kazan, Russia",
                                "Technologies used: C#, ASP.NET, SQL Server, JQuery, Semantic UI"
                            ]

                        }
                    ],
                    education: [
                        {
                            credit: "Post-Graduate Database Application Development",
                            place: "Seneca College, Canada, Toronto",
                            gpa: "3.9/4.0 GPA",
                            period: "SEPT 2019 – APR 2020"
                        },
                        {
                            credit: "Bachelor in Software Engineering",
                            place: "Kazan National Research Technical University, Russia",
                            gpa: "3.8/4.0 GPA",
                            period: "SEPT 2014 – AUG 2018"
                        }
                    ]
                }
            },
            {
                id: 'skills',
                name: 'Skills.txt',
                icon: 'progman_11',
                content: {
                    hard: [
                        {
                            name: "C# .NET",
                            progress: 100
                        },
                        {
                            name: "SQL Server",
                            progress: 100
                        },
                        {
                            name: "React/Redux",
                            progress: 90
                        },
                        {
                            name: "Node.js",
                            progress: 90
                        },
                        {
                            name: "Docker",
                            progress: 90
                        },
                        {
                            name: "MongoDB",
                            progress: 80
                        },
                        {
                            name: "AWS",
                            progress: 70
                        },
                        {
                            name: "Kubernetes",
                            progress: 60
                        },
                        {
                            name: "Hadoop",
                            progress: 50
                        }
                    ],
                    soft: "Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship"
                }
            },
            {
                id: 'contact',
                name: 'Contact.txt',
                icon: 'inetcfg_2301',
                content: {
                    emailText: "If you want to hire me or invite to a project, just email me on ",
                    email: "khamzin.insaf@gmail.com",
                    socialText: "Or you can reach me out through social media:",
                    social: [
                        {
                            name: "FaLinkedin",
                            link: "https://www.linkedin.com/in/insaf-khamzin-915237129/"
                        },
                        {
                            name: "FaGithub",
                            link: "https://github.com/InsafKhamzin"
                        },
                        {
                            name: "FaInstagram",
                            link: "https://www.instagram.com/insafikus/"
                        },
                        {
                            name: "FaTwitter",
                            link: "https://twitter.com/InsafKhamzin"
                        },
                        {
                            name: "FaMedium",
                            link: "https://medium.com/@hamzin730insaf"
                        }
                    ]
                }
            }

        ]
    }

    getItems() {
        return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
    }

    getItem(id) {
        return this._data.items.find(x => x.id === id);
    }

    getProjectInfo() {
        return {
            projectRepo: this._data.projectRepo,
            react95Repo: this._data.react95Repo
        };
    }
}