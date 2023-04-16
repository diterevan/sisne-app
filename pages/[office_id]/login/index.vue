<!--
 * OFFICE LOGIN
 *
 -->

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



  // const body = {
  //   email: "diterevan@gmail.com",
  //   password: "123",
  //   office_id: office.id
  // }

  // const { data: { value : res } } = await useFetch('/api/login', { method: 'post', body }); console.log({ res })

  // useCookie('token').value = res

</script>

<template>

  {{ office ? `${office.name} Office Login` : '' }}

</template>
