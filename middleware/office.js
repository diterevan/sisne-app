/**
 * OFFICE MIDDLEWARE
 *
 */
import { officeStore } from '~/store/office'


export default defineNuxtRouteMiddleware(async () => {

  /**
   * Find office by id
   *
   */
  const { office_id } = useRoute().params

  const { data: { _rawValue : office } } = await useFetch(`/api/office/${office_id}`)

  /**
   * Office don't exist
   *
   */
  if(!office) return navigateTo('/')

  /**
   * Office disabled
   *
   */
  if(!office.enabled) return navigateTo('/')

  /**
   * Save office on store
   *
   */
  officeStore().set(office)

})
