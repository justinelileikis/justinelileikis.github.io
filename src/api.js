const api = {
    categories: [{
            url: "websites",
            name: "Websites"
        },
        {
            url: "designsystems",
            name: "Design systems"
        },
        {
            url: "webapplications",
            name: "Web applications"
        }
    ],
    projects: [{
            id: 1,
            url: 'sait',
            title: 'The Southern Alberta Institute of Technology',
            text: 'SAIT is Alberta’s third-largest post-secondary institution, educating approximately 50,000 students per year globally with an emphasis on applied education and research.',
            class: 'sait',
            role: 'Front-end development',
            live: 'https://www.sait.ca/',
            websites: true,
            images: 13,
            color: '#0b1730',
            theme: 'dark',
            toolkit: [{
                    name: 'Motion UI',
                    url: 'https://zurb.com/playground/motion-ui'
                },
                {
                    name: 'Slick slider',
                    url: 'http://kenwheeler.github.io/slick/'
                },
                {
                    name: 'Tooltipster',
                    url: 'http://iamceege.github.io/tooltipster/'
                },
                {
                    name: 'Swipebox',
                    url: 'http://brutaldesign.github.io/swipebox/'
                },
                {
                    name: 'Remodal',
                    url: 'http://vodkabears.github.io/remodal/'
                }
            ]
        },
        {
            id: 2,
            url: '3m-personal-safety-division',
            title: '3M Personal Safety Division',
            text: 'Find 3M Personal Safety Division products easier with 3M\'s Product Selector and Help Me Choose web application.',
            class: 'safety',
            role: 'Full stack development',
            webapplications: true,
            images: 5,
            color: '#1caabb',
            theme: 'light',
            toolkit: [{
                    name: 'React',
                    url: 'https://reactjs.org/'
                },
                {
                    name: 'Slim',
                    url: 'http://www.slimframework.com/'
                }
            ]
        },
        {
            id: 3,
            url: '3m-select-showcase',
            title: '3M Select Showcase',
            text: '3M Select Showcase, a gallery of projects featuring 3M Graphics Products and Architectural Finishes masterfully executed by our partners.',
            class: 'jaws',
            role: 'Full stack development',
            websites: true,
            images: 10,
            color: '#82b5e2',
            theme: 'light',
            toolkit: [{
                    name: 'WordPress',
                    url: 'https://wordpress.org/',
                },
                {
                    name: 'LeanModal',
                    url: 'http://leanmodal.finelysliced.com.au/',
                },
                {
                    name: 'Fancybox',
                    url: 'http://fancyapps.com/fancybox/3/',
                },
                {
                    name: 'Google Geocoding API',
                    url: 'https://developers.google.com/maps/documentation/geocoding/intro',
                },
                {
                    name: 'Google Place Autocomplete',
                    url: 'https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/places-autocomplete',
                }
            ]
        },
        {
            id: 4,
            url: 'res-im',
            title: 'Res.im',
            text: 'UX research, usability testing, and digital product design to help clients discover and capitalize on new ideas.',
            class: 'resim',
            role: 'Full stack development',
            websites: true,
            images: 6,
            color: '#ffbc2d',
            theme: 'light',
            toolkit: [{
                    name: 'Jekyll',
                    url: 'https://jekyllrb.com/',
                },
                {
                    name: 'Ruby',
                    url: 'https://www.ruby-lang.org/en/',
                },
                {
                    name: 'Liquid',
                    url: 'https://shopify.github.io/liquid/',
                },
                {
                    name: 'Algolia',
                    url: 'https://www.algolia.com/',
                }
            ]
        },
        {
            id: 5,
            url: '3M-pdf-catalogue-creator',
            title: '3M Medical Solution Division',
            text: 'Find and edit product data, add products to your custom catalogues to create a professional PDF to share with clients.',
            class: 'pdf',
            role: 'Full stack development',
            webapplications: true,
            images: 6,
            color: '#202020',
            theme: 'dark',
            toolkit: [{
                    name: 'Angular',
                    url: 'https://angular.io/'
                },
                {
                    name: 'Slim',
                    url: 'http://www.slimframework.com/'
                },
                {
                    name: 'ImageMagick',
                    url: 'https://imagemagick.org/index.php'
                },
                {
                    name: 'UI Select',
                    url: 'http://angular-ui.github.io/ui-select/'
                },
                {
                    name: 'Angular Drag & Drop',
                    url: 'http://marceljuenemann.github.io/angular-drag-and-drop-lists/demo/#/simple'
                },
                {
                    name: 'UI Bootstrap',
                    url: 'http://angular-ui.github.io/bootstrap'
                }
            ]

        },
        {
            id: 6,
            url: 'precedent-jd',
            title: 'PrecedentJD',
            text: 'PrecedentJD is home to everything law students to kick-start their legal careers — from how to ace their interviews, dress the part and get hired back.',
            class: 'student',
            role: 'Full stack development',
            live: 'https://precedentjd.com/',
            websites: true,
            images: 4,
            color: '#181b6c',
            theme: 'dark',
            toolkit: [{
                    name: 'WordPress',
                    url: 'https://wordpress.org/',
                }
            ]
        },
        {
            id: 7,
            url: 'durham-college',
            title: 'Durham College',
            text: 'Durham College is a post-secondary institution east of Toronto, with 30,000 students and campuses in Oshawa and Whitby, Ontario, and a learning site in Pickering.',
            class: 'durham',
            role: 'Front-end development',
            live: 'https://durhamcollege.ca/',
            websites: true,
            designsystems: true,
            images: 8,
            color: '#455560',
            theme: 'dark',
            toolkit: [{
                    name: 'Foundation',
                    url: 'https://foundation.zurb.com/sites/docs/',
                },
                {
                    name: 'Motion UI',
                    url: 'https://foundation.zurb.com/sites/docs/motion-ui.html',
                }
            ]
        },
        {
            id: 8,
            url: 'city-of-winnipeg',
            title: 'Confluence',
            text: 'Confluence is the City of Winnipeg’s digital visual language presented as accessible UI components combined with UX and accessibility guidelines.',
            class: 'cw',
            role: 'Full stack development',
            websites: true,
            designsystems: true,
            images: 7,
            color: '#00669b',
            theme: 'dark',
            toolkit: [{
                    name: 'Bootstrap',
                    url: 'https://getbootstrap.com/',
                },
                {
                    name: 'Jekyll',
                    url: 'https://jekyllrb.com/',
                },
                {
                    name: 'Ruby',
                    url: 'https://www.ruby-lang.org/en/',
                },
                {
                    name: 'Liquid',
                    url: 'https://shopify.github.io/liquid/',
                }
            ]
        }
    ],
    allCategories: function() {
        return this.categories
    },
    getProjects: function(cat) {
        if (cat) {
            return this.projects.filter(item => item[cat] === true);
        } else {
            return this.projects;
        }
    },
    getProject: function(url) {
        return this.projects.filter(item => item['url'] === url);
    },
    getNextProjectUrl(id) {
        let next = this.projects.filter(item => item['id'] === id + 1);
        if (!next[0]) {
            next = this.projects.filter(item => item['id'] === 1);
        }
        return next[0].url;
    },
    getPreviousProjectUrl(id) {
        let prev = this.projects.filter(item => item['id'] === id - 1);
        if (!prev[0]) {
            prev = this.projects.filter(item => item['id'] === this.projects.length);
        }
        return prev[0].url;
    },
}

export default api