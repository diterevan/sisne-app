import { defineStore } from 'pinia'

export const officeStore = defineStore('office', {

  state: () => ({ office: null }),

  actions: {
    set(office) { this.office = office },
  },
})
