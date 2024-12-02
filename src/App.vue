<template>
  <div>
    <header class="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <h1 class="text-xl font-bold text-gray-800 dark:text-white">jatinmotwani.dev</h1>
      <DarkModeToggle />
    </header>
    <main class="dark:bg-gray-900 dark:text-white pb-10">
      <div class="max-w-4xl mx-auto">
        <IntroductionSection class="text-center" />
        <WorkExperience :workExperience="workExperienceData" />
        <SkillsAndCertifications />
        <BlogsList :blogs="blogsData" />
        <ProjectsSection v-if="projectsData.length" :projects="projectsData" />
      </div>
    </main>
    <hr>
    <footer class="bg-gray-100 dark:bg-gray-900 py-4 text-center text-gray-800 dark:text-white">
      <p>&copy; 2024 Jatin Motwani. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import IntroductionSection from './components/IntroductionSection.vue';
import WorkExperience from './components/WorkExperience.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
import SkillsAndCertifications from './components/SkillsAndCertifications.vue';
import BlogsList from './components/BlogsList.vue';
import ProjectsSection from './components/ProjectsSection.vue';

export default {
  components: {
    IntroductionSection,
    WorkExperience,
    DarkModeToggle,
    SkillsAndCertifications,
    BlogsList,
    ProjectsSection
  },
  data() {
    return {
      profileData: {
        name: "Jatin Motwani",
        label: "SDE-2 @ Yocket | Node.js, Vue.js",
        summary:
          "As a Software Developer at Yocket, I have been involved in various exciting projects that aim to simplify and guide students in their study abroad plans...",
        profiles: [
          {
            network: "LinkedIn",
            username: "jatin-motwani",
            url: "https://www.linkedin.com/in/jatin-motwani/",
          },
        ],
      },
      workExperienceData: [
        {
          name: "Yocket",
          position: "SDE 2",
          startDate: "Jul 2024",
          endDate: "",
          points: [
            "Worked on database migration Yocket Finance.",
            "Enhanced Yocket Finance features to improve user experience.",
            "Implemented new features on platform to better track and manage student's fund raising journey.",
          ],
          link: "https://yocket.com"
        },
        {
          name: "MetaDesign Solutions",
          position: "Senior Software Engineer",
          startDate: "Dec 2023",
          endDate: "Jul 2024",
          points: [
            'Worked on a dynamic website generator.',
            'Added new elements like tiles so that use can generate pixel perfect websites.',
            'Enhanced existing elements by making attributes dynamic.',
            'Improved HTMl editor implementation to make sure the html generated can be further used in flows like email generation.',
            'Resolved issues to ensure bugfree experience for users.'
          ],
          link: "https://www.metadesignsolutions.com/"
        },
        {
          name: "Yocket",
          position: "SDE 1",
          startDate: "May 2022",
          endDate: "Dec 2023",
          points: [
            'I contributed to the development of Loan Finder Tool. This tool is designed to assist students in estimating the loan amount they can secure based on personal, educational and co-applicant details.',
            'The success of Loan Finder Tool has been significant, with the platform now receiving a minimum of 200 logins every month',
            'Increased number of leads by 120 percent by utlizing high volume traffic sources with addition of hooks',
          ],
          link: "https://yocket.com"
        },
        {
          name: "Tatvasoft",
          position: "Software Engineer",
          startDate: "Jun 2021",
          endDate: "Apr 2022",
          points: [
            'Worked on a payment solutions product which on of the most challenging and reqarding projects.',
            'It was highly scalable microservices(AWS Lambda) based implementation.',
            'Apart from that i worked on a service provider platform(like urban company).'
          ],
          link: "https://www.tatvasoft.com/"
        },
        {
          name: "Trinarybits Technologies Pvt.Ltd",
          position: "Full Stack Developer",
          startDate: "Jun 2020",
          endDate: "May 2021",
          points: [
            'Worked on the backend of social media platform and implemented features such as follow, unfollow, block, mute, restrict.',
            'Apart from that i worked on a dating platform that allowed users to create profiles, send connection request and interact with each other.',
            'By working on these projects i got in depth understanding of Websockets and FCM based notifications.'
          ],
          link: "https://www.trinarybits.com/"
        },
        {
          name: "Trinarybits Technologies Pvt.Ltd",
          position: "Web Development Intern",
          startDate: "Jan 2020",
          endDate: "Jun 2020",
          points: [
            'Learned basics of HTML, CSS and Javascript that are the core technologies used for building websites and web apps.',
            'Also learned about angular by contributing to a company management system platform.'
          ],
          link: "https://www.trinarybits.com/"
        },
      ],
      blogsData: [
        {
          title: "SQL Injection Attack",
          link: "https://jatinmotwani.medium.com/sql-injection-attack-62494db25a45",
          description: "SQL Injection is a code injection technique that allows attackers to manipulate SQL queries and perform operations in the database they are not authorized to perform normally. An example of a SQL Injection attack is modifying a query to retrieve additional information, such as modifying the order query to return all orders. The consequences of a SQL Injection attack include accessing unauthorised information, modifying or deleting data from the database, and logging into a more privileged user account. To prevent SQL Injection attacks, use placeholders or named place holders. If you have any questions or need further explanation, feel free to comment and share your knowledge."
        },
        {
          title: "Node.js Event Loop",
          link: "https://jatinmotwani.medium.com/node-js-event-loop-954a62f42e45",
          description: "Node.js is a powerful platform for creating fast and scalable applications, with its event-driven architecture being a key feature. The event loop is a continuous loop that handles asynchronous I/O operations in the application. It is designed to be non-blocking, allowing it to handle multiple requests simultaneously without blocking the main thread. The event loop works by executing a continuous loop that checks for new events in the event queue. If no new events are found, the loop waits for new ones to arrive. The event loop operates on a single thread, allowing it to handle one event at a time. The event loop has four distinct phases: timers, pending callbacks, idle, prepare, and poll, check, and close."
        },
        {
          title: "Basic Linux Commands — Part 1",
          link: "https://jatinmotwani.medium.com/basic-linux-commands-part-1-35749a33c854",
          description: "This article teaches basic Linux commands to navigate and perform basic operations. These commands include Print Working Directory, List, Make Directory, History, Clear, Change Directory, Manual, Remove Directory, Create File, Concatenate, and Note. The pwd command checks the current directory, while the ls command lists files and directories within the current directory. The mkdir command creates a directory with various flags, and the history command provides a list of previously used commands. The clear command clears the terminal, and the cd command navigates the system. The man command provides a manual of a command, and the touch command creates a file."
        },
        {
          title: "Basic Linux Commands - Part 2",
          link: "https://jatinmotwani.medium.com/basic-linux-commands-part-2-118a4f93ebd6",
          description: "The Linux command 'cat' is the simplest way to view the content of a file, as it outputs the entire content without providing input for scrolling. It can change access permissions of files using chmod and chown commands, with three types of owners: user, group, and others. The chmod command can be used to change permissions using symbolic mode or absolute mode. The 'history' command can check which commands have been run, and the 'rmdir' command can remove a directory/folder. A 'fruits.txt' file can be created by redirecting the output stream of the echo command to a file and viewing its content using the cat command. The 'devops.txt' file can be added with a list of fruits, and the 'head' command can show only the top three fruits. The 'tail' command can show only the bottom three fruits. A 'colors.txt' file can be created using the touch command and the cat command."
        }
      ],
      projectsData: []
    };
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
    },
  },
};
</script>
