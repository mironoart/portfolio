const homeRu = {
	h1: 'Привет!',
	h3: 'Меня зовут Андрей',
	p1:
		'Я full-stack веб-разработчик! Для меня программирование уже давно является неотъемлемой частью жизни. И моя цель это постоянное совершенствованние своих способностей и поиска новых технологий и возможностей.',
	p2:
		'Создавать интерективные сайты, веб-интерфейсы, архитектуры - это то, что меня захватывает. Я всегда в поисках креативных решений и новых подходов, как для простых лендингов так и для масштабных проектов. И не смотря на возникающие сложности в процессе, всегда можно найти решение и не одно!',
	p3:
		'А в свободное время, всегда можно найти меня в спортзале или на активном отдыхе.',
	contactMe: 'Если есть вопросы или предложения используй ',
	menu: 'Меню',
	contacts: 'Контакты',
	projects: 'Проекты',
	styles: {
		backgroundColor: '#00fb00'
	},
	active: 'ru'
}
const homeEn = {
	h1: 'Hello!',
	h3: 'My name is Andry',
	p1:
		'I am a full-stack web developer! For me, programming has been part of my life for a long time. And my goal is continuous improvement of my abilities and the discovering for new technologies and capabilities.',
	p2:
		"I'm passionate about interactive websites, web interfaces, architectures. I am always in search of creative solutions and new approaches, both for simple landing pages and for large-scale projects. And despite the difficulties encountered in the process, I'm always come to solution and not just one!",
	p3: 'In my free time, you can always find me in the gym or on active rest.',
	contactMe: 'If you want to contact me, please use',
	menu: 'Menu',
	contacts: 'Contacts',
	projects: 'Projects',
	styles: {
		backgroundColor: '#00fb00'
	},
	active: 'en'
}

const changeLanguage = function changeLanguage(state = [], action) {
	switch (action.type) {
		case 'CHANGE_LANGUAGE_TO_EN': {
			const newState = homeEn
			return newState
		}
		case 'CHANGE_LANGUAGE_TO_RU': {
			const newState = homeRu
			return newState
		}
		default: {
			const state = homeEn
			return state
		}
	}
}

export default changeLanguage
