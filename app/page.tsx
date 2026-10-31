import styles from './page.module.scss';

// Where the two links go. The résumé is a file in public/.
const PROJECTS_HREF = '/projects';
const RESUME_HREF = '/alex-ivy-townley-full-stack-engineer-resume.pdf';

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.name}>
        Alex<br />Ivy-Townley
      </h1>
      <div className={styles.about}>
        <p className={styles.blurb}>
          i&rsquo;m a full stack software engineer, career musician, theoretical physics researcher, serial hobbyist,
          i&rsquo;m an adept learner and am excited by projects that improve the loves of other humans and challenge me to push beyond my current skillset.
        </p>
        <nav className={styles.links}>
          <a className={styles.link} href={PROJECTS_HREF}>
            Projects <span aria-hidden="true">&rarr;</span>
          </a>
          <a className={styles.link} href={RESUME_HREF} download>
            Download résumé <span aria-hidden="true">&darr;</span>
          </a>
        </nav>
      </div>
    </main>
  );
}
