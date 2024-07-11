import KeyPad from '@/components/KeyPad.vue'
import Contacts from '@/views/ContactView.vue'
import Favorites from '@/views/FavoritesView.vue'
import Recents from '@/views/RecentsView.vue'
import Voicemail from '@/views/VoicemailView.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'KeyPad',
      component: KeyPad
    },
    {
      path: '/contacts',
      name: 'Contacst',
      component: Contacts
    },
    {
      path: '/recents',
      name: 'Recents',
      component: Recents
    },
    {
      path: '/voicemail',
      name: 'Voicemail',
      component: Voicemail
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})

export default router
