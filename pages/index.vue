<script setup>

  import { officeStore } from '~/store/office'

  /**
   * Validation
   *
   */
  definePageMeta({
    middleware: ['office', 'landing']
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
