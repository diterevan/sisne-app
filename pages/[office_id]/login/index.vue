<!--
 * OFFICE LOGIN
 *
 -->

<script setup>

  /**
   * Get Office
   *
   */
  const { office_id } = useRoute().params
  
  const { data: { _rawValue : office } } = await useFetch(`/api/office/${office_id}`)

</script>

<template>

  {{ office.name }} Office Login

</template>