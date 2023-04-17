/**
 * OFFICE MIDDLEWARE
 *
 */
import { officeStore } from '~/store/office'


export default defineNuxtRouteMiddleware(async () => {

  /**
   * Get office on store
   *
   */
  const office = officeStore().office

  /**
   * Landing disabled
   *
   */

  if('landing' in office && !office.landing) return navigateTo(`/home`)

})
