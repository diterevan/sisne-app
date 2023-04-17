/**
 * OFFICE MIDDLEWARE
 *
 */
import { officeStore } from '~/store/office'


export default defineNuxtRouteMiddleware(async () => {

  if (process.server) {

    /**
     * Get office id
     *
     */
    const office_id = useRequestHeaders().host.split('.')[0]

    /**
     * Find office by id
     *
     */
    const { data: { value : office } } = await useFetch(`/api/office/${office_id}`)

    /**
     * Office don't exist
     *
     */
    if(!office) return navigateTo('/not_found')

    /**
     * Office disabled
     *
     */
    if('enabled' in office && !office.enabled) return navigateTo('/working')

    /**
     * Save office on store
     *
     */
    officeStore().set(office)
  }
})
