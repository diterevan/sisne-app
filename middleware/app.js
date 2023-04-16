/**
 * LOGIN MIDDLEWARE
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
   * Get token on cookies
   *
   */
  const token = useCookie('token').value


  /**
   * Token dont exist
   *
   */
  if (!token) return navigateTo(`/${office.id}/login`)

  else {

    /**
     * Verify token
     *
     */
    const { data: { value : res } } = await useFetch('/api/token/verify', { method: 'post', body: { token } })

    if (res.error) {

      /**
       * Remove invalid token
       *
       */
      useCookie('token').value = null

      return navigateTo(`/${office.id}/login`)

    } else

      /**
       * Dont logged in office
       *
       */
      if (res.office_id != office.id) return navigateTo(`/${office.id}/login`)
  }
})
