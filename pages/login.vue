<script setup>

  import { officeStore } from '~/store/office'

  /**
   * Middlewares
   *
   */
  definePageMeta({
    middleware: ['office', 'login']
  })

  /**
   * Get office on store
   *
   */
  const office = officeStore().office

</script>

<template>

  {{ office ? `${office.name} Office Landing` : '' }}

</template>
