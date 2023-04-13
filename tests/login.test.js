import { describe, expect, test } from 'vitest'
import { setup, fetch } from '@nuxt/test-utils'


describe('Login tests', async () => {

  await setup({})

  /**
   * Login in Office exist
   *
   */
  test('office exist', async () => {

    const { headers } = await fetch('/obe/login')
    
    expect(headers.get('location')).toEqual(null)
  })

  /**
   * Login in Office not exist
   *
   */
  test('office not exist', async () => {

    const { headers } = await fetch('/123/login', { redirect: 'manual' })

    expect(headers.get('location')).toEqual('/')
  })

})