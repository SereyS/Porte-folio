import React from "react";
import { Github, Linkedin, Mail, Globe, Download } from "lucide-react";
import { motion } from "framer-motion";
import { createBrowserRouter, NavLink } from "react-router-dom";
import Capture from "./assets/Capture.PNG";
import Hutchinson from "./assets/Hutchinson.jpeg";
import virtuel from "./assets/virtuel.png";


// ===
// Mini Portfolio (React + Tailwind)
// - Remplis les TODO ci-dessous (nom, rôle, liens, projets).
// - Déploie facilement sur Vercel/Netlify/GitHub Pages.
// ===
// === Projets — à personnaliser ===
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Outley</div>,
    children: [
          {
            path : 'snd Page',
            element: <div>snd Page </div>
          }
        ]
      },
    ]
  )

const projects = [
  {
    title: "Broker API Rest",
    description:
      "Projet de fin d'étude Broket API Rest, application mobile permettant d'afficher les actuallité du Lycée La tourelle de Sarcelles.",
    tech: ["NodeRED", "Android Studio C/C++", "Json"],
    demo: "https://www.notion.so/Projet-1-25ee820598078000afd9fc6b44cf8714",
    
    image: Capture,
  },
  {
    title: "site carrière Hutchinson ",
    description:
      "Réalisation le front-end d'un site carrière pour Hutchinson (Groupe TotalEnergies). de la page d'accueil aux pages de détails des offres d'emploi.",
    tech: ["HTML", "Javascript", "CSS/Bootstrap"],
    demo: "https://fa-eocc-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/fr/sites/CX_1007", 
    image: Hutchinson,
  },
  {
    title: "Réalité Virtuelle avec Vuforia",
    description:
      "Création d'un jeu Catcha game pour faire avoir une expérience plus accru de la ville de Paris en découvrant des oeuvres en pixel art.",
    tech: ["C#", "unity", "Vuforia"],
    demo: "https://www.notion.so/R-alit-Augmenter-25ee8205980780e18b53e516fb8b9714?source=copy_link",
    image: virtuel,
  },
  
];

export default function Portfolio() {
  // === Profil — à personnaliser ===
  const profile = {
    name: "Serey SENG", 
    role: "DevOps Junior (CDD/CDI)", 
    location: "Paris, Île‑de‑France",
    about:
      "Diplômé d'un RNCP niveau 7 (équivalent Master bac +5) avec 3 ans d'alternance en environnement DevOps, je me spécialise dans la conception et le déploiement d'infrastructures Cloud AWS, l'orchestration via Kubernetes et l'automatisation avec Terraform. Motivé à intégrer une équipe où je pourrai contribuer à des projets innovants tout en développant mon expertise cloud." ,
    email: "serey.seng@hotmail.fr",

    linkedin: "https://www.linkedin.com/in/serey-seng-0272a4243",
    cv: "/Serey-SENG-Devops.pdf", 
    
    skills: [
      "AWS",
      "Node.js",
      "REST APIs",
      "SQL / MongoDB",
      "Docker",
      "Python",
      "Docker ",
      "jenkins",
      "CI/CD piepelines",
      "Linux ",
      "Ansible",
      "Terraform ",

    ],
  } 

  const fade = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  } 
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold">{profile.name}</a>
          <nav className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="#projects">Projets</a>
            <a className="hover:underline" href="#skills">Compétences</a>
            <a className="hover:underline" href="#contact">Contact</a>
            
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 hover:shadow"
            >
              <Download size={16} /> CV
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16">
        <motion.div initial="hidden" animate="show" variants={fade}>
          <p className="text-sm uppercase tracking-wider text-slate-500">Disponible — CDD / CDI</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
            {profile.role} à {profile.location}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            {profile.about}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
            >
              <Mail size={18} /> Me contacter
            </a>
            <a
              href={profile.linkedin}
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            {profile.site && (
              <a
                href={profile.site}
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
              >
                <Globe size={18} /> Site
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
        >
          Projets sélectionnés
        </motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img src={p.image} alt={p.title} className="w-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border px-2 py-0.5">{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <a className="text-sm underline" href={p.demo}>
                    Voir Projet
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
        >
          Compétences clés
        </motion.h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profile.skills.map((s) => (
            <div
              key={s}
              className="rounded-2xl border bg-white px-4 py-3 text-sm hover:shadow"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          className="rounded-3xl border bg-white p-6 md:p-10 shadow-sm"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-600">
            Intéressé par mon profil pour un CDD/CDI ? Discutons de vos besoins et de ce que je peux apporter.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
            >
              <Mail size={18} /> {profile.email}
            </a>
            
            <a
              href={profile.linkedin}
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow"
            >
              <Download size={18} /> Télécharger mon CV
            </a>
          </div>
        </motion.div>

        <footer className="mt-12 py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name} • Construit avec React + Tailwind
        </footer>
      </section>
    </div>
  );
}
