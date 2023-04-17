/**
 * OFFICE MIDDLEWARE
 *
 */
import { officeStore } from '~/store/office'


export default defineNuxtRouteMiddleware(async (to, from) => {

  // const useRoute = useRoute().params
  console.log(useRequestHeaders().host)

  /**
   * Get office id
   *
   */
  const { office_id } = useRoute().params

  /**
   * Find office by id
   *
   */
  const { data: { value : office } } = await useFetch(`/api/office/${office_id}`)

  /**
   * Office don't exist
   *
   */
  if(!office) return navigateTo('/')

  /**
   * Office disabled
   *
   */
  if('enabled' in office && !office.enabled) return navigateTo('/')

  /**
   * Save office on store
   *
   */
  officeStore().set(office)

})
