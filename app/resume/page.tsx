"use client";

import React from "react";
import { Chip,  Grid2, Paper } from "@mui/material";
import Text from "../components/shared/Text";

export default function Resume() {

  const [type, setType] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [project, setProject] = React.useState('');

  const resume = {
    name: "alex ivy-townley",
    email: "alextownleymakes@gmail.com",
    location: "birmingham, al",
    phone: 2562396908,
    bio: "i am a full stack engineer with 5+ years of experience across a broad set of disciplines. with a penchant for working with react, i am driven by an eagerness to contribute meaningful progress to a team or a product in well-established often-refined team norms and practices, eloquent reusable code, and creative solutions to unique problems. i am an adept and lifelong learner, drawn to the unfamiliar as opportunity to strengthen my skills while thriving in what i already know, seeking new ways to utilize my current skillsets, and eager to encounter opportunities to help others do the same. i am seeking a role that will allow me to strongly utilize my current skills and challenge me to adopt new ones. my ideal position is fully remote, working in a team dynamic, in a company working in a people-oriented or arts-connected space, but i am open to any work that sounds interesting. ",
    employment: [
      {
        company: "stellasource",
        location: "birmingham, al (remote)",
        positions: [
          {
            title: "full stack engineer",
            start: "jun 2024",
            end: "sept 2024",
            notes: [
              'Promoted for outstanding accomplishment and leadership after intensive mentorship.',
              'Proactively engaged in shaping team norms, developing complex solutions that improved team performance and product quality.',
              'Ensured polished product delivery by identifying and addressing engineering practice weaknesses.',
              'Facilitated cross-team collaboration and effective communication to unify understanding and promote a positive, collaborative work environment.',
              'Facilitated workshops to encourage best practices for ADA compliance and accessibility in web development, cleaning up MVP remnants and overhauling our component library and implementation to use proper components.',
              'Gained cross-team experience by working with our HI-CHEW team for six weeks to help deliver their product goals, contributing to the shaping of team directives in refinement.',
              'Facilitated knowledge share on Jest and TDD, leading to a 50% increase in test coverage for new work and a 30% decrease in backflow through the development cycle.',
            ],
            skills: ['React', 'Redux', 'Typescript', 'Formik', 'ESLint', 'MUI', 'Jest', 'TDD', 'C#', 'SQL', 'ADO', 'Leadership', 'Mentorship', 'Communication', 'Team Building', 'Conflict Resolution', 'Complex Problem-Solving', 'Process Improvement', 'Cross-Team Collaboration', 'Proactive Engagement', 'Team Norm Development'],
          },
          {
            title: "associate full stack engineer",
            start: "july 2023",
            end: "june 2024",
            skills: ['React', 'Redux', 'Typescript', 'Formik', 'ESLint', 'Jest', 'TDD', 'C#', 'SQL', 'ADO', 'Code Review', 'Complex Problem-Solving', 'Product Quality Assurance', 'Continuous Integration/Delivery (CI/CD)', 'Testing and Debugging'],
            notes: [
              'Recruited from SecturaFab Integrations to StellaSource FE for unique experience and expertise with React.',
              'Refactored and simplified complex code, unified Redux implementations, and built comprehensive component and hooks libraries.',
              'Accelerated development for MVP launch, leading to over 1,200 waitlist sign-ups, exceeding target by 600%.',
              'Conducted weekly Redux training sessions, significantly enhancing team knowledge and performance.',
              'Engineered key form-oriented features targeting primary business bets that reduced development time from weeks to hours, leading to timely and successful feature releases.',
            ]
          },
          {
            title: 'integration engineer associate',
            start: 'may 2023',
            end: 'july 2023',
            skills: ['C#', 'Visual Studio', 'Communication', 'Customer Focus', 'Adaptability', 'Project Management'],
            notes: [
              'Engineered custom data syncing tools for diverse customer needs, both on-prem and cloud-based.',
              'Facilitated customer integration setups, ensuring tailored and automated use of syncing tools.',
              'Translated customer requirements into actionable engineering tasks, delivering custom solutions efficiently.'
            ]
          }
        ]
      },
      {
        company: "symplr",
        positions: [
          {
            title: "web developer, custom services team lead",
            start: "aug 2021",
            end: "apr 2023",
            skills: ['React', 'Redux', 'Typescript', 'Formik', 'ESLint', 'Jest', 'TDD', 'C#', 'SQL'],
            notes: [
              'Customized SAAS applicant tracking systems for over 100 clients, enhancing client satisfaction.',
              'Developed custom reports and managed SFTP accounts, ensuring secure and efficient data handling.',
              'Led training for new hires and cross-departmental staff, resolving blockages and troubleshooting issues effectively.',
              'Collaborated with the support team to tailor solutions to meet specific customer needs.'
            ]
          }
        ]
      },
      {
        company: "flex digital",
        positions: [
          {
            title: "software engineer",
            start: "sep 2020",
            end: "jul 2021",
            skills: ['C#', 'Visual Studio', 'WordPress', 'PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
            notes: [
              'Developed and maintained software applications, including a WordPress plugin and new features for print-ordering software.',
              'Managed WordPress website updates and customizations, ensuring content accuracy and adherence to QA protocols.',
              'Created HTML and CSS-compliant email campaigns for marketing clients, including thorough testing phases.',
              'Participated in weekly code reviews and QA processes, enhancing code quality and personal knowledge.'
            ]
          }
        ]
      },
      {
        company: "conserv",
        positions: [
          {
            title: "front end developer",
            start: "dec 2019",
            end: "jun 2020",
            skills: ['React', 'Express', 'Node.js', 'JavaScript', 'RESTful APIs', 'Communication', 'User Empathy', 'User-Centered Design', 'Collaboration', 'Strategic Planning', 'Feature Development', 'Customer Feedback Analysis', 'Persona Creation', 'Goal Setting', 'Wireframing', 'Prototyping'],
            notes: [
              'Developed new features and fixed critical bugs using ReactJS, HTML, and CSS, ensuring application stability.',
              'Conducted customer feedback sessions to gather insights and influence feature development.',
              'Participated in feature planning and development sessions, creating customer personas and setting development goals.',
              'Maintained comprehensive documentation in Jira and Confluence for all developed features and resolved bugs.'
            ]
          }
        ]
      }
    ],
    skills: [
      {
        title: "front-end development",
        skills: ['React', 'Next.js', 'Redux (with sagas)', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'MUI', 'Bootstrap', 'Formik', 'Jest', 'ESLint', 'Accessibility Compliance (ADA)']
      },
      {
        title: "back-end development",
        skills: ['Node.js', 'Express.js', 'C#/.NET', 'RESTful APIs', 'SQL', 'AWS Lambda', 'Azure']
      },
      {
        title: "testing & development tools",
        skills: ['Test-Driven Development (TDD)', 'Unit Testing', 'Continuous Integration/Continuous Delivery (CI/CD)']
      },
      {
        title: "version control & collaboration",
        skills: ['Git', 'GitHub', 'ADO (Azure DevOps)']
      },
      {
        title: "devops & hosting",
        skills: ['Vercel', 'AWS', 'Azure']
      },
      {
        title: "cms & tools",
        skills: ['WordPress', 'Salesforce', 'Jira', 'Confluence']
      },
      {
        title: "database management",
        skills: ['MongoDB', 'SQL Server', 'LocalStorage']
      },
      {
        title: "soft skills",
        skills: ['Problem Solving', 'Team Leadership', 'Cross-team Collaboration', 'Code Review', 'Unit Testing', 'Form Flow', 'Component Refactoring & Reusability']
      }
    ],
    notes: [
      'brainstormed, developed, and shipped new features in environmental monitoring',
      'delivered precision custom database-driven reporting, created custom branded landing pages, and customized templated application and reporting systems to healthcare hiring professionals',
      'updated and maintained software systems for food commerce organizations',
      'built and maintained wordpress sites and plugins, both to-spec and fully customized, for multiple clients across multiple industries requiring industry-specific knowledge',
      'built a reusable schema-driven dynamic form-generation tool, spearheading primary business bets and reducing engineering time per feature from weeks to hours for cutting-edge software for the metal fabrication industry',
      'planned, engineered, and delivered a custom video training and certification portal with video training content, testing, and PDF certificate delivery for a 700+ contractor multi-state electrical company',
      'revived an anonymous submission platform, enhancing content filtering, enhancing advert delivery, implementing submission rate limiting and and admin panel for flagged submission reviews',
      'created a redux training program to upscale team knowledge and unify a rapidly-scaling redux implementation'
    ],
    education: [{
      school: "innovate birmingham",
      program: "full stack web developer",
      start: "sep 2019",
      end: "dec 2024",
      location: "birmingham, al",
      notes: [
        'Displayed proficiency in the MERN stack with a notable project (Bander) using React Native, ExpressJs, and MongoDB.',
        'First in cohort to receive a job offer, accepted days prior to graduation.'
      ]
    }],
    projects: [
      {
        title: "the unsent project",
        role: "lead developer",
        start: "apr 2022",
        end: "feb 2024",
        location: "remote",
        notes: [
          'Restored site functionality and added new features using NextJS, Node Serverless backend, AWS Lambda, Vercel.',
          'Enhanced filtering, content approval, and implemented new advertisement practices to improve site performance and user experience.'
        ]
      },
      {
        title: "marathon safety training",
        role: "lead developer",
        start: "mar 2022",
        end: "mar 2023",
        location: "remote",
        notes: [
          'Developed full stack training software for Marathon Electric with ReactJS frontend and Node/Express backend.',
          'Created RESTful APIs, an admin panel, and oversaw deployment to Azure, ensuring compliance with safety training practices for 700+ employees.',
          'Established emailing service and PDF generation for certification delivery, ensuring compliance with state and federal safety training regulations.'
        ]
      }
    ]

  }

  return (
    <main>
      <Grid2 container spacing={6}>

        <Grid2 className={'resume-header'} size={8}>
          <Grid2 size={12} className={"mb-30"}>
            <Text type={'h1'} className="fw-300">{resume.name}</Text>
            <Text type={'p'} className="color-dark-4 fs-14 fw-300 dark:color-light-4">{resume.location}</Text>
            <Text type={'p'} className="color-dark-4 fs-14 fw-300 dark:color-light-4"><a href={`mailto:${resume.email}`}>{resume.email}</a></Text>
            <Text type={'p'} className="color-dark-4 fs-14 fw-300 dark:color-light-4"><a href={`phone:${resume.phone}`}>{resume.phone}</a></Text>
            <Text type={'p'} className="color-dark-1 fs-16 fw-300 dark:color-light-1 mb-30">{resume.bio}</Text>
          </Grid2>
          <Grid2 size={12} sx={{
            // margin: '0 0 30px'
          }}>
            {type === '' && <Text type={'p'} className="color-dark-1 fs-14 fw-500 dark:color-light-4 mb-[41px]">click the chips below to navigate my resume</Text>}
            {type !== '' && <Chip label={'x ' + type} className="color-dark-1 dark:color-light-1 crumb-on" onClick={() => { setType(''); setCompany(''); setPosition(''); setProject(''); setSchool('') }} />}
            {company !== '' && <Chip label={'x ' + company} className="color-dark-1 dark:color-light-1 crumb-on" onClick={() => { setCompany(''); setPosition('') }} />}
            {position !== '' && <Chip label={'x ' + position} className="color-dark-1 dark:color-light-1 crumb-on" onClick={() => setPosition('')} />}
            {project !== '' && <Chip label={'x ' + project} className="color-dark-1 dark:color-light-1 crumb-on" onClick={() => setProject('')} />}
            {school !== '' && <Chip label={'x ' + school} className="color-dark-1 dark:color-light-1 crumb-on" onClick={() => setSchool('')} />}
          </Grid2>
          <Grid2 size={12} style={{ minHeight: '40px' }}>
            {type === '' && ['employment', 'projects', 'education'].map((type) => <Chip key={type} label={type} className="bg-light-2 color-dark-1 dark:bg-dark-2 dark:color-light-2 chipcrumb" style={{ margin: '0 5px 5px 0' }} onClick={() => setType(type)} />)}
            {type === 'employment' && company === '' && resume.employment.map((job) => <Chip key={job.company} label={job.company} className="bg-light-3 color-dark-1 dark:bg-dark-3 dark:color-light-3 chipcrumb" style={{ margin: '0 5px 5px 0' }} onClick={() => setCompany(job.company)} />)}
            {company !== '' && position === '' && resume.employment.map((job) => {
              if (job.company === company) {
                return job.positions.map((position) => <Chip key={position.title} label={position.title} className="bg-light-4 color-dark-1 dark:bg-dark-4 dark:color-light-2 chipcrumb" style={{ margin: '0 5px 5px 0' }} onClick={() => setPosition(position.title)} />)
              }
            })}
            {project === '' && type === 'projects' && resume.projects.map((proj) => <Chip key={proj.title} label={proj.title} className="bg-light-3 color-dark-1 dark:bg-dark-3 dark:color-light-2 chipcrumb" style={{ margin: '0 5px 5px 0' }} onClick={() => setProject(proj.title)} />)}
            {school === '' && type === 'education' && resume.education.map((edu) => <Chip key={edu.school} label={edu.school} className="bg-light-3 color-dark-1 dark:bg-dark-3 dark:color-light-3 chipcrumb" style={{ margin: '0 5px 5px 0' }} onClick={() => setSchool(edu.school)} />)}
          </Grid2>
          <Grid2 size={12}>
            {/* // <Chip label={`${type === 'employment' ? 'x ' : ''}employment`} className="bg-light-2 color-dark-1 dark:bg-light-2 dark:color-dark-3" style={{ margin: '0 5px 5px 0' }} onClick={() => { setType(type === 'employment' ? '' : 'employment'); setCompany(''); setPosition(''); }} />} */}
            {company !== '' && resume.employment.map((job) => {
              if (job.company === company) {
                return <Text type={'p'} key={job.company} className="color-dark-4 fs-18 dark:color-light-1 ">{company}</Text>
              }
            })}
            {position !== '' && resume.employment.map((job) => {
              if (job.company === company) {
                return job.positions.map((pos) => {
                  if (pos.title === position) {
                    return (
                      <Paper elevation={0} key={pos.title} className='resume-paper bg-light-1 dark:bg-dark-1 dark:text-light-1'>
                        <Text type={'p'} className="color-dark-4 fs-1 dark:color-light-2 fs-14">{pos.title} ({pos.start} - {pos.end})</Text><br />
                        {pos.skills?.map((skill) => {
                          return (
                            <Chip key={skill} label={skill} className="dark:bg-light-2" style={{ margin: '0 5px 5px 0' }} />
                          )
                        })}
                        <ul>
                          {pos.notes.map((note) => (
                            <>
                              {/* {i !== 0 && (<li style={{padding: '3px'}} className="dark:text-light" key={note}>-</li>)} */}
                              <li style={{ padding: '3px' }} className="dark:text-light" key={note}>- {note}</li>
                            </>
                          ))}
                        </ul>
                      </Paper>
                    )
                  }
                })
              }
            })}
            {school !== '' && resume.education.map((edu) => {
              if (edu.school === school) {
                return (
                  <Paper elevation={0} key={edu.school} className='resume-paper bg-light-1 dark:bg-dark-1 dark:text-light-1'>
                    <Text type={'h3'} key={edu.school} className="color-dark-4 fs-18 dark:color-light-1">{edu.school}</Text>
                    <Text type={'p'} className="color-dark-4 fs-1 dark:color-light-2 fs-14">{edu.program} ({edu.start} - {edu.end})</Text><br />
                    <ul>
                      {edu.notes.map((note) => (
                        <>
                          <li style={{ padding: '3px' }} className="dark:text-light" key={note}>- {note}</li>
                        </>
                      ))}
                    </ul>
                  </Paper>
                )
              }
            })}
            {project !== '' && resume.projects.map((proj) => {
              if (proj.title === project) {
                return (
                  <Paper elevation={0} key={proj.title} className='resume-paper bg-light-1 dark:bg-dark-1 dark:text-light-1'>
                    <Text type={'h3'} key={proj.title} className="color-dark-4 fs-18 dark:color-light-1">{proj.title}</Text>
                    <Text type={'p'} className="color-dark-4 fs-1 dark:color-light-2 fs-14">{proj.role} ({proj.start} - {proj.end})</Text><br />
                    <ul>
                      {proj.notes.map((note) => (
                        <>
                          <li style={{ padding: '3px' }} className="dark:text-light" key={note}>- {note}</li>
                        </>
                      ))}
                    </ul>
                  </Paper>
                )
              }
            })}
          </Grid2>
        </Grid2>
        <Grid2 size={4}>
          <h3>skills</h3>
          <Grid2 container spacing={2}>
            {resume.skills.map((skill) => {
              return (
                <Grid2 key={skill.title} size={12}>
                  <Text type={'h4'}>{skill.title}</Text>
                  {skill.skills.map((skill) => {
                    return (
                      <Chip key={skill} label={skill} className="bg-light-2 dark:bg-dark-4 dark:color-light-1" style={{ margin: '0 5px 5px 0' }} />
                    )
                  })}
                <hr style={{marginTop:'15px'}} className="color-light-4"/>
                </Grid2>
              )
            })}
          </Grid2>
        </Grid2>
      </Grid2>
    </main>
  );
}
