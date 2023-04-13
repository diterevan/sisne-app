import { describe, expect, test } from 'vitest'
import { setup, fetch } from '@nuxt/test-utils'


describe('Home tests', async () => {

  await setup({})

  /**
   * Home in Office exist
   *
   */
  test('office exist', async () => {

    const { headers } = await fetch('/obe/home')
    
    expect(headers.get('location')).toEqual(null)
  })

  /**
   * Home in Office not exist
   *
   */
  test('office not exist', async () => {

    const { headers } = await fetch('/123/home', { redirect: 'manual' })

    expect(headers.get('location')).toEqual('/')
  })

})