<!--
 * OFFICE LANDING
 *
 -->

<script setup>

  /**
   * Get Office
   *
   */
  const { office_id } = useRoute().params
  
  const { data: { _rawValue : office } } = await useFetch(`/api/office/${office_id}`)

  /**
   * Office don't exist
   *
   */
  if(!office) navigateTo('/')
  
  else

    /**
     * Landing don't exist or disabled
     *
     */
    if('landing' in office && !office.landing) navigateTo(`/${office_id}/home`)

</script>

<template>

  {{ office ? `${office.name} Office Landing` : '' }}

</template>
