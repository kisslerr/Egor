import { useState, useEffect } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'skills', label: 'Навыки' },
    { id: 'projects', label: 'Проекты' },
    { id: 'contact', label: 'Контакты' },
  ]

  const skills = [
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'Python', level: 70, icon: '🐍' },
  ]

  const projects = [
    {
      title: 'Веб-приложение',
      description: 'Современное SPA на React с адаптивным дизайном и анимациями',
      tags: ['React', 'TypeScript', 'Tailwind'],
      emoji: '🚀',
    },
    {
      title: 'Telegram Бот',
      description: 'Бот для автоматизации задач с интеграцией API',
      tags: ['Python', 'AI', 'API'],
      emoji: '🤖',
    },
    {
      title: 'Мобильное приложение',
      description: 'Кроссплатформенное приложение для управления задачами',
      tags: ['React Native', 'Firebase'],
      emoji: '📱',
    },
    {
      title: 'Интернет-магазин',
      description: 'E-commerce платформа с корзиной и оплатой',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      emoji: '🛒',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-950/90 backdrop-blur-lg shadow-lg shadow-purple-500/5' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            eGor
          </button>
          
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm transition-colors duration-300 ${activeSection === item.id ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-6 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative text-center px-6">
          <div className="mb-6 text-6xl animate-bounce" style={{ animationDuration: '2s' }}>
            👋
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Привет, я Егор
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Веб-разработчик • Создатель цифровых решений • Люблю чистый код
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Мои проекты
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 border border-gray-600 rounded-full font-medium hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
            >
              Связаться
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Обо мне</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-8xl shadow-2xl shadow-purple-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                🧑‍💻
              </div>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Я — веб-разработчик с страстью к созданию красивых и функциональных приложений. 
                Люблю решать сложные задачи и превращать идеи в реальность.
              </p>
              <p className="text-lg leading-relaxed">
                Работаю с современным стеком технологий и постоянно изучаю новое. 
                Верю, что хороший код — это искусство.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">3+</div>
                  <div className="text-sm text-gray-500">Года опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">20+</div>
                  <div className="text-sm text-gray-500">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">∞</div>
                  <div className="text-sm text-gray-500">Мотивация</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Навыки</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-2 font-medium">
                    <span className="text-xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-sm text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Проекты</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{project.emoji}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Связаться со мной</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Есть идея для проекта? Хотите сотрудничать? Напишите мне!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:egor@example.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              <span>✉️</span> Email
            </a>
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 rounded-full font-medium hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
              <span>💬</span> Telegram
            </a>
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 rounded-full font-medium hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
              <span>🐙</span> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500">
          <p>© 2024 eGor. Создано с 💜 и чистым кодом</p>
        </div>
      </footer>
    </div>
  )
}

export default App
