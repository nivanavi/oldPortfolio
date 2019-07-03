const initionState = {
    projects: [
        {name: 'task-manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum iusto labore mollitia non repudiandae. Accusantium molestiae quasi repellat suscipit totam. Adipisci architecto aut, consectetur laudantium neque quaequaerat quam?',
            leftRight: 1,
            color: ['#2B2B2B', 'red'],
            stack: ['react', 'redux', 'html', 'css', 'node', 'express', 'mongodb', 'mongoose'],
            demo: 'task-manager',
            siteLink: null,
            githubLink: 'https://github.com/nivanavi/task-manager',
            id: '1'},

        {name: 'RustRush',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum iusto labore mollitia non repudiandae. Accusantium molestiae quasi repellat suscipit totam. Adipisci architecto aut, consectetur laudantium neque quaequaerat quam?',
            leftRight: 0,
            color: ['red', 'purple'],
            stack: ['html', 'css', 'less', 'jekyll', 'js', 'bootstrap'],
            demo: 'rustrush',
            siteLink: 'https://rustrush.ru',
            githubLink: 'https://github.com/nivanavi/rustrush',
            id: '2'},
        {name: 'G.L.A.Z.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum iusto labore mollitia non repudiandae. Accusantium molestiae quasi repellat suscipit totam. Adipisci architecto aut, consectetur laudantium neque quaequaerat quam?',
            leftRight: 1,
            color: ['purple', 'orange'],
            stack: ['vue', 'vuex', 'vuetify', 'html', 'css'],
            demo: 'glaz',
            siteLink: null,
            githubLink: 'https://github.com/nivanavi/glaz',
            id: '3'},
        {name: 'Nocus',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum iusto labore mollitia non repudiandae. Accusantium molestiae quasi repellat suscipit totam. Adipisci architecto aut, consectetur laudantium neque quaequaerat quam?',
            leftRight: 0,
            color: ['orange', 'green'],
            stack: ['html', 'css'],
            demo: 'nocus',
            siteLink: 'https://noqus.ru',
            githubLink: null,
            id: '4'}
    ],

    reviews: [{avatar: 'turok',
        customer: 'александр турок',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum iusto labore mollitia non repudiandae. Accusantium molestiae quasi repellat suscipit totam. Adipisci architecto aut, consectetur laudantium neque quaequaerat quam?',
    }
    ]
};

export default function allTasks(state = initionState, action) {
    switch (action.type) {
        default:
            return state
    }
}
