import { describe, expect, test } from 'vitest'
import { setup, fetch } from '@nuxt/test-utils'


describe('Landing tests', async () => {

  await setup({})

  /**
   * Office not found
   *
   */
  test('office not found', async () => {

    const { headers } = await fetch('/123', { redirect: 'manual' })

    expect(headers.get('location')).toEqual('/')
  })

  /**
   * Landing enabled
   *
   */
  test('landing enabled', async () => {

    const { headers } = await fetch('/obe-global')
    
    expect(headers.get('location')).toEqual(null)
  })

  /**
   * Landing disabled
   *
   */
  test('landing disabled', async () => {

    const { headers } = await fetch('/obe', { redirect: 'manual' })

    expect(headers.get('location')).toEqual('/obe/home')
  })

})