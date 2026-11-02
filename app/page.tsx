"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaTelegram, FaPhone, FaDownload, FaLink } from "react-icons/fa"
import { useEffect, useState } from "react"

const skills = [
  "SQL",
  "Python (aiogram)",
  "Git",
  "HTML / CSS / JS (базово)",
  "C++ / C# (учебные проекты)",
  "Chrome Extension API (MV3)",
  "Базы данных и серверы",
  "1С (изучаю, к сертификации «1С:Профессионал»)",
  "Windows / MS Office",
]

const projects = [
  {
    title: "Telegram-бот для приёма заказов",
    stack: "Python, aiogram — продакшен",
    description:
      "Разработал бота с нуля: меню заказов, корзина, система оплаты. Работал в продакшене с реальными пользователями.",
  },
  {
    title: "QR-Share — расширение Chrome",
    stack: "JavaScript, Chrome Extension API (MV3)",
    description:
      "Плавающая кнопка на любой странице открывает панель с QR-кодом текущего URL: перенос страницы на телефон за секунду. Content script, инъекция DOM, поддержка SPA-навигации.",
    link: "https://github.com/BlackPawn-pt/qr-share-extension",
  },
  {
    title: "Дипломный проект — аналитическая система",
    stack: "SQL, проектирование ИС",
    description:
      "Система для оценки эффективности работы компаний на основе аналитических данных (на примере АО «Международный аэропорт Сочи»). Оценка «отлично».",
  },
  {
    title: "РКИС — учебный проект на C++",
    stack: "C++, командная разработка",
    description:
      "Консольное приложение по техническому заданию: работа в команде с одногруппниками, следование ТЗ и ревью преподавателя.",
    link: "https://github.com/BlackPawn-pt",
  },
  {
    title: "Сайт-портфолио",
    stack: "Next.js, Tailwind CSS, Netlify",
    description:
      "Вы смотрите на него: одностраничный сайт с адаптивной вёрсткой и анимациями. Разработан и задеплоен самостоятельно.",
  },
]

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <main className="relative z-10 min-h-screen">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <Header />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <About />
            <Skills />
          </div>
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}

function ParticleBackground() {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(71,85,105,0.18),transparent_55%)]" />
      {[...Array(35)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-slate-300/20"
          initial={{ x: Math.random() * windowSize.width, y: Math.random() * windowSize.height }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 8 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <div className="mx-auto mb-7 h-36 w-36 overflow-hidden rounded-full border border-white/15 shadow-xl sm:h-44 sm:w-44">
        <img src="/dima-profile.jpg" alt="Dmitry Zhidkov" className="h-full w-full object-cover" />
      </div>
      <h1 className="mb-3 text-4xl font-semibold tracking-tight text-slate-100 sm:text-6xl">Dmitry Zhidkov</h1>
      <p className="text-xl text-slate-300 sm:text-2xl">
        Специалист по информационным системам · Python · SQL · 1С
      </p>
      <p className="mt-4 text-sm text-slate-400 sm:text-base">
        Диплом СПО 09.02.07 (ГМУ им. адм. Ф.&nbsp;Ф.&nbsp;Ушакова, 2026). Ищу первую работу: техподдержка ИС, стажёр 1С,
        junior Python.
      </p>
      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500"
      >
        <FaDownload /> Скачать резюме (PDF)
      </a>
    </motion.header>
  )
}

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card"
    >
      <h2 className="section-title">О себе</h2>
      <p className="leading-relaxed text-slate-300">
        Учился 3 курса на «Разработке и эксплуатации углеводородных месторождений шельфа» (СПб горный), понял, что моё —
        ИТ, и довёл обучение по специальности «Информационные системы и программирование» до диплома. Есть практический
        опыт: Telegram-бот на aiogram с реальными пользователями, расширение Chrome, учебные проекты на C++/C#.
        Рассказываю о себе без «идеального фасада» — просто задачи, решения и результат.
      </p>
    </motion.section>
  )
}

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="glass-card"
    >
      <h2 className="section-title">Навыки</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  )
}

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-6"
    >
      <h2 className="section-title mb-5">Проекты</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="text-lg font-medium text-slate-100">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{project.stack}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                <FaLink /> Открыть проект
              </a>
            )}
          </article>
        ))}
      </div>
    </motion.section>
  )
}

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card mt-6"
    >
      <h2 className="section-title">Контакты</h2>
      <div className="grid gap-3 text-sm sm:grid-cols-3">
        <a className="contact-link" href="https://t.me/BlackPawnZ" target="_blank" rel="noopener noreferrer">
          <FaTelegram /> Telegram
        </a>
        <a className="contact-link" href="mailto:a.m.s_1@mail.ru">
          <FaEnvelope /> a.m.s_1@mail.ru
        </a>
        <a className="contact-link" href="https://github.com/BlackPawn-pt" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
      </div>
      <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 text-sm sm:grid-cols-3">
        <p className="text-slate-300">
          <span className="text-slate-500">Статус: </span>Открыт для предложений (стажировка / junior-позиция)
        </p>
        <p className="text-slate-300">
          <span className="text-slate-500">Телефон: </span>
          <a href="tel:+79118264225" className="hover:text-white">
            +7 911 826-42-25
          </a>
        </p>
        <p className="text-slate-300 sm:text-right">
          <span className="text-slate-500">Локация: </span>Краснодар / Россия
        </p>
      </div>
    </motion.section>
  )
}
