/**
 * GET OFFICE
 *
 */

const db = DB()


async function get_office(event) {

  /**
   * Get Office id
   *
   */
  const { id } = event.context.params

  /**
   * Find Office
   *
   */
  const office = await db.Offices.findOne({ id })

  /**
   * Return
   *
   */
  return office
}


export default defineEventHandler(get_office)