import $ from 'jquery';

const api = {
    categories: [{
            url: "websites",
            name: "websites"
        },
        {
            url: "designsystems",
            name: "designsystems"
        },
        {
            url: "webapplications",
            name: "webapplications"
        }
    ],
    projects: [{
            url: 'sait',
            title: 'SAIT',
            text: 'SAIT is Alberta’s third-largest post-secondary institution, educating approximately 50,000 students per year globally with an emphasis on applied education and research.',
            image: 'img/work/sait/1.png',
            prototype: 'sait/youth/style-guide',
            case: 'https://res.im/work/sait/',
            role: 'Front-end development',
            websites: true,
            styleguides: true,
            images: [{
                    src: 'img/work/sait/1.png'
                },
                {
                    src: 'img/work/sait/2.png'
                },
                {
                    src: 'img/work/sait/3.png'
                },
                {
                    src: 'img/work/sait/4.png'
                },
                {
                    src: 'img/work/sait/5.png'
                },
                {
                    src: 'img/work/sait/6.png'
                },
                {
                    src: 'img/work/sait/7.png'
                },
                {
                    src: 'img/work/sait/8.png'
                },
                {
                    src: 'img/work/sait/9.png'
                },
                {
                    src: 'img/work/sait/10.png'
                },
                {
                    src: 'img/work/sait/11.png'
                },
                {
                    src: 'img/work/sait/12.png'
                },
                {
                    src: 'img/work/sait/13.png'
                },
                {
                    src: 'img/work/sait/14.png'
                },
                {
                    src: 'img/work/sait/15.png'
                }
            ]
        },
        {
            url: '3m-personal-safety-division',
            title: '3M Personal Safety Division',
            text: 'Find 3M Personal Safety Division products easier with 3M\'s Product Selector and Help Me Choose web application.',
            image: 'img/work/safety/4.png',
            role: 'Development',
            webapplications: true,
            designsystems: true,
            images: [{
                    src: 'img/work/safety/4.png'
                },
                {
                    src: 'img/work/safety/5.png'
                },
                {
                    src: 'img/work/safety/6.png'
                },
                {
                    src: 'img/work/safety/7.png'
                },
                {
                    src: 'img/work/safety/1.png'
                },
                {
                    src: 'img/work/safety/2.png'
                },
                {
                    src: 'img/work/safety/3.png'
                }
            ]
        },
        {
            url: '3m-select-showcase',
            title: '3M Select Showcase',
            text: '3M Select Showcase, a gallery of projects featuring 3M Graphics Products and Architectural Finishes masterfully executed by our partners.',
            image: 'img/work/jaws/1.png',
            role: 'Development',
            websites: true,
            images: [{
                    src: 'img/work/jaws/1.png'
                },
                {
                    src: 'img/work/jaws/2.png'
                },
                {
                    src: 'img/work/jaws/3.png'
                },
                {
                    src: 'img/work/jaws/4.png'
                },
                {
                    src: 'img/work/jaws/5.png'
                },
                {
                    src: 'img/work/jaws/6.png'
                },
                {
                    src: 'img/work/jaws/7.png'
                },
                {
                    src: 'img/work/jaws/8.png'
                },
                {
                    src: 'img/work/jaws/9.png'
                },
            ]
        },
        {
            url: 'res-im',
            title: 'Res.im',
            text: 'UX research, usability testing, and digital product design to help clients discover and capitalize on new ideas.',
            image: 'img/work/resim/1.png',
            role: 'Development',
            url: 'https://res.im',
            websites: true,
            images: [{
                    src: 'img/work/resim/1.png'
                },
                {
                    src: 'img/work/resim/2.png'
                },
                {
                    src: 'img/work/resim/3.png'
                },
                {
                    src: 'img/work/resim/4.png'
                },
                {
                    src: 'img/work/resim/5.png'
                },
                {
                    src: 'img/work/resim/6.png'
                },
                {
                    src: 'img/work/resim/7.png'
                },
                {
                    src: 'img/work/resim/8.png'
                }
            ]
        },
        {
            url: 'precedent-jd',
            title: 'PrecedentJD',
            text: 'PrecedentJD is home to everything law students to kick-start their legal careers — from how to ace their interviews, dress the part and get hired back.',
            image: 'img/work/student/1.png',
            role: 'Development',
            url: 'https://precedentjd.com/',
            websites: true,
            images: [{
                    src: 'img/work/student/1.png'
                },
                {
                    src: 'img/work/student/2.png'
                },
                {
                    src: 'img/work/student/3.png'
                },
                {
                    src: 'img/work/student/4.png'
                },
                {
                    src: 'img/work/student/5.png'
                }
            ]
        },
        {
            url: 'durham-college',
            title: 'Durham College',
            text: 'Durham College is a post-secondary institution east of Toronto, with 30,000 students and campuses in Oshawa and Whitby, Ontario, and a learning site in Pickering.',
            image: 'img/work/durham/1.png',
            case: 'https://res.im/work/durham-college/',
            role: 'Front-end development',
            url: 'https://durhamcollege.ca/',
            websites: true,
            designsystems: true,
            images: [{
                    src: 'img/work/durham/1.png'
                },
                {
                    src: 'img/work/durham/2.png'
                },
                {
                    src: 'img/work/durham/3.png'
                },
                {
                    src: 'img/work/durham/4.png'
                },
                {
                    src: 'img/work/durham/5.png'
                },
                {
                    src: 'img/work/durham/6.png'
                },
                {
                    src: 'img/work/durham/7.png'
                },
                {
                    src: 'img/work/durham/8.png'
                },
                {
                    src: 'img/work/durham/9.png'
                }
            ]
        },
        {
            url: '3m-safety-admin-panel',
            title: '3M Safety Admin Panel',
            text: 'Find and edit product data, add products to your custom catalogues to create a professional PDF to share with clients.',
            image: 'img/work/admin/1.png',
            role: 'Development',
            webapplications: true,
            designsystems: true,
            images: [{
                    src: 'img/work/admin/1.png'
                },
                {
                    src: 'img/work/admin/2.png'
                },
                {
                    src: 'img/work/admin/3.png'
                },
                {
                    src: 'img/work/admin/4.png'
                },
                {
                    src: 'img/work/admin/5.png'
                }
            ]
        }
    ],
    allCategories: function() {
        return this.categories
    },
    getProjects: function(cat) {
        if (cat) {
            return this.projects.filter(item => item[cat] == true);
        } else {
            return this.projects;
        }
    },
    getProject: function(id) {

    },


}

export default api