import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Contact {
  id: number
  name: string
  phone: string
  // Add other properties of the contact
}

export const useContactsStore = defineStore('contacts', () => {
  const contacts = ref<Contact[]>([])
  const selectedContact = ref<Contact | null>(null)
  const selectedContactIndex = computed(() => {
    return contacts.value.findIndex((contact: Contact) => contact.id === selectedContact.value?.id)
  })
  function addContact(contact: Contact) {
    contacts.value.push(contact)
  }
  function selectContact(contact: Contact) {
    selectedContact.value = contact
  }
  function updateContact(contact: Contact) {
    const index = contacts.value.findIndex((c: Contact) => c.id === contact.id)
    contacts.value[index] = contact
  }
  function deleteContact(contact: Contact) {
    const index = contacts.value.findIndex((c: Contact) => c.id === contact.id)
    contacts.value.splice(index, 1)
  }
  return {
    contacts,
    selectedContact,
    selectedContactIndex,
    addContact,
    selectContact,
    updateContact,
    deleteContact
  }
})
