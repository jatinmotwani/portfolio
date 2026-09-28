<template>
  <div class="relative overflow-x-clip">
    <a href="#about"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-zinc-950">
      Skip to content
    </a>
    <NavBar />
    <main>
      <HeroSection :profile="profile" />
      <AboutSection :profile="profile" :stats="stats" :now="now" />
      <WorkExperience :workExperience="experience" />
      <SkillsSection :skills="skills" :education="education" />
      <ProjectsSection :projects="projects" :githubUrl="githubUrl" />
      <BlogsList :blogs="blogs" />
      <ContactSection :profile="profile" />
    </main>
    <SiteFooter :name="profile.name" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import WorkExperience from './components/WorkExperience.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import BlogsList from './components/BlogsList.vue';
import ContactSection from './components/ContactSection.vue';
import SiteFooter from './components/SiteFooter.vue';
import { profile, now, stats, experience, skills, education, projects, blogs } from './data/portfolio';

export default {
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    WorkExperience,
    SkillsSection,
    ProjectsSection,
    BlogsList,
    ContactSection,
    SiteFooter,
  },
  data() {
    return { profile, now, stats, experience, skills, education, projects, blogs };
  },
  computed: {
    githubUrl() {
      const github = this.profile.socials.find((s) => s.name === 'GitHub');
      return github ? github.url : '';
    },
  },
};
</script>
