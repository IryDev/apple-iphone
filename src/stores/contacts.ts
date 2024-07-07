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

  function getContactByName(name: string) {
    return contacts.value.find((contact: Contact) => contact.name === name)
  }

  function getContactByNumber(phone: string) {
    return contacts.value.find((contact: Contact) => contact.phone === phone)
  }

  const initialContacts: Contact[] = [
    { id: 5, name: 'Lebron James', phone: '1234567890' },
    { id: 6, name: 'Michael Jordan', phone: '0987654321' },
    { id: 7, name: 'Stephen Curry', phone: '0123456789' },
    { id: 8, name: 'Kevin Durant', phone: '9876543210' },
    { id: 9, name: 'Klay Thompson', phone: '1234567890' },
    { id: 10, name: 'Draymond Green', phone: '0987654321' },
    { id: 11, name: 'James Harden', phone: '0123456789' },
    { id: 12, name: 'Russell Westbrook', phone: '9876543210' },
    { id: 13, name: 'Chris Paul', phone: '1234567890' },
    { id: 14, name: 'Carmelo Anthony', phone: '0987654321' },
    { id: 15, name: 'Dwyane Wade', phone: '0123456789' },
    { id: 16, name: 'Dirk Nowitzki', phone: '9876543210' },
    { id: 17, name: 'Tim Duncan', phone: '1234567890' },
    { id: 18, name: 'Tony Parker', phone: '0987654321' }
  ]

  contacts.value = initialContacts

  return {
    contacts,
    initialContacts,
    selectedContact,
    selectedContactIndex,
    addContact,
    getContactByNumber,
    getContactByName,
    selectContact,
    updateContact,
    deleteContact
  }
})
