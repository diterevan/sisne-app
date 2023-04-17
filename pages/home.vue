<script setup>

  import { officeStore } from '~/store/office'

  /**
   * Middlewares
   *
   */
  definePageMeta({
    middleware: ['office', 'app']
  })

  /**
   * Get office on store
   *
   */
  const office = officeStore().office

</script>

<template>

  {{ office ? `${office.name} Office Home` : '' }}

</template>
