const initionState = {
    projects: [
        {name: 'task-manager',
            description: 'SPA для планирования рабочего дня, основная задача заключалась в написании полноценного приложения с front-end и back-end, а так же в закреплении знаний о JavaScript библиотеке react.js и первом внедрении серверной части в проект.',
            color: '#2B2B2B',
            stack: [['react', 'https://reactjs.org'], ['redux', 'https://redux.js.org'], ['html', 'https://ru.wikipedia.org/wiki/HTML5'], ['css', 'https://ru.wikipedia.org/wiki/CSS'], ['node', 'https://nodejs.org/en/'], ['express', 'https://expressjs.com'], ['mongodb', 'https://www.mongodb.com'], ['mongoose', 'https://mongoosejs.com']],
            siteLink: null,
            githubLink: 'https://github.com/nivanavi/task-manager',
            id: '1'},

        {name: 'rustrush',
            description: 'Заказ на верстку сайта по PSD макету, основной задачей было осуществить верстку с использованием генератора статичных сайтов jekyll и css фреймворка bootstrap.',
            color: '#2B2B2B',
            stack: [['html', 'https://ru.wikipedia.org/wiki/HTML5'], ['css', 'https://ru.wikipedia.org/wiki/CSS'], ['less', 'http://lesscss.org'], ['jekyll', 'https://jekyllrb.com'], ['js', 'https://ru.wikipedia.org/wiki/JavaScript'], ['bootstrap', 'https://getbootstrap.com']],
            siteLink: 'https://rustrush.ru',
            githubLink: 'https://github.com/nivanavi/rustrush',
            id: '2'},
        {name: 'g.l.a.z.',
            description: 'Этот проект задумывался как приложение для упрощения коммуникации менеджера с подчиненными, а также для закрепления знаний о фреймворке vue.js. Пока приложение не доделано, но будет дорабатываться в будущем.',
            color: '#2B2B2B',
            stack: [['vue', 'https://ru.vuejs.org'], ['vuex', 'https://vuex.vuejs.org'], ['vuetify', 'https://vuetifyjs.com/ru/'], ['html', 'https://ru.wikipedia.org/wiki/HTML5'], ['css', 'https://ru.wikipedia.org/wiki/CSS']],
            siteLink: null,
            githubLink: 'https://github.com/nivanavi/glaz',
            id: '3'},
        {name: 'noqus',
            description: 'Моим первым проектом стал лендинг для бота. По ходу его выполнения столкнулся с трудностями позиционирования элементов и осуществления адаптивности верстки. В итоге получилось сверстать адаптивный для всех устройств лендинг',
            color: '#2B2B2B',
            stack: [['html', 'https://ru.wikipedia.org/wiki/HTML5'], ['css', 'https://ru.wikipedia.org/wiki/CSS']],
            siteLink: 'https://noqus.ru',
            githubLink: null,
            id: '4'}
    ],

    reviews: [{id: '11',
        avatar: 'turok',
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
