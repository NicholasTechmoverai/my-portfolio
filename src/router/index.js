import { createRouter, createWebHistory } from 'vue-router'
import SkillsPage from '../views/SkillsPage.vue'
import MainPage from '../views/MainPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ProjectView from '../views/ProjectView.vue'
import AboutPage from '../views/AboutPage.vue'
import GalleryPage from '../views/GalleryPage.vue'
import ImageView from '../views/ImageView.vue'
import ContactPage from '../views/ContactPage.vue'
const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
    children: [
      { path: 'view', name: 'ProjectView', component: ProjectView },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage,
    children: [
      { path: 'view', name: 'ImageView', component: ImageView },
    ]
  },
  {
    path: '/contact-me',
    name: 'Contact',
    component: ContactPage,
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
