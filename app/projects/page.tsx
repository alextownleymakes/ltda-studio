import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Projects · Alex Ivy-Townley',
};

// Games with their own site link there; the rest are their own deployments,
// shown under /games/<name> (next.config.ts).
const PROJECTS = [
  {
    name: 'Verse vs Verse',
    href: 'https://versevsverse.app',
    image: '/projects/verse-vs-verse.jpg',
    about: 'A multiplayer freestyle rap battle game. Rap over a beat, land on the rhyming words, and battle your friends online.',
    tech: [
      'React, TypeScript, Vite, Material UI',
      'Web Audio API, AudioWorklet, Tone.js, WebRTC',
      'Node.js WebSocket server on Railway',
      'Supabase: auth, Postgres, edge functions',
      'Stripe and Apple in-app purchases',
      'Twitch chat voting, PostHog analytics',
      'Vercel web, Electron desktop, Capacitor iOS with AdMob',
    ],
  },
  {
    name: 'Bubbles',
    href: '/games/bubbles',
    image: '/projects/bubbles.jpg',
    about: 'Pop bubbles alone or with up to 8 friends. Every bubble is simulated and drawn on your GPU.',
    tech: [
      'WebGPU with WGSL compute shaders',
      'Vanilla JavaScript, no framework',
      'Node.js WebSocket server on Railway',
      'Vercel',
    ],
  },
];

export default function Projects() {
  return (
    <main className={styles.page}>
      <Link className={styles.home} href="/">&larr; Alex Ivy-Townley</Link>
      <h1 className={styles.title}>Projects</h1>
      <ul className={styles.grid}>
        {PROJECTS.map((project) => (
          <li key={project.name}>
            {/* a plain link: /games/* is another deployment, not a page of this site */}
            <a className={styles.card} href={project.href}>
              <Image className={styles.shot} src={project.image} alt={`${project.name} screenshot`} width={800} height={500} />
              <p className={styles.name}>
                {project.name} <span aria-hidden="true">&rarr;</span>
              </p>
              <p className={styles.about}>{project.about}</p>
              <ul className={styles.tech} aria-label="Built with">
                {project.tech.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
