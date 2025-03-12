import Text from "./components/shared/Text";

export default function Home() {

  return (
    <main>
      <Text type={'h1'} style={{ width: '100%', textAlign: 'center' }}>alex ivy-townley</Text>
      {/* <div id='home-container'>
      
      </div> */}
      <div id='home-container'>
        <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent">i am a full stack engineer with a love for react.</Text>
        <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent">i have been building for the web for over 20 years,</Text>
        <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent"> and have worked as a software engineer for the last 5.</Text>
        <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent">my favorite projects are those that involve music, art, and technology.</Text>
        <br /><br />
        <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent fw-600">i am currently looking for work!</Text>
        <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent">get my <a style={{ textDecoration: 'underline' }} className={''} href="/alex-ivy-townley-full-stack-engineer-resume.pdf" target="_blank">resume</a></Text>
        <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent"><a style={{ textDecoration: 'underline' }} className={''} href="/contact">reach out</a></Text>
      </div>
      <br /><br />
      <Text type={'p'} style={{ width: '100%', textAlign: 'center' }} className="color-dark-1 dark:color-light-1 bg-color-light-1-transparent dark:bg-color-dark-1-transparent">this site is a wip; projects and blog coming next</Text>
    </main>
  );
}
