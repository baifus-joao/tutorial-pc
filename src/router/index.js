import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventListView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'event-list', component: EventListView },
  { path: '/about', name: 'about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/event/123',
      name: 'event-details',
      component: EventDetailsView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    
  ]
});

export default router;
