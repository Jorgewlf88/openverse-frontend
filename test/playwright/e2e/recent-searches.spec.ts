import { expect, test, type Page } from '@playwright/test'

import {
  enableNewHeader,
  goToSearchTerm,
  searchFromHeader,
} from '~~/test/playwright/utils/navigation'

import { SCREEN_SIZES } from '~/constants/screens'

const testScreens = ['md', 'xl'] as const
type TestScreen = typeof testScreens[number]

test.describe.configure({ mode: 'parallel' })

test.beforeEach(async ({ page }) => {
  await enableNewHeader(page)

  // We are first navigating to search because the recent searches feature has
  // not yet been implemented on the homepage.
  await goToSearchTerm(page, 'galah')
})

const executeSearches = async (page: Page) => {
  const searches = ['honey', 'galah'] // in that order
  for (const term of searches) await searchFromHeader(page, term)
  return searches
}

for (const breakpoint of testScreens) {
  test.describe(`recent searches on ${breakpoint}`, () => {
    const width = SCREEN_SIZES.get(breakpoint as TestScreen) as number
    test.use({ viewport: { width, height: 700 } })

    test('shows entries in reverse chronological order', async ({ page }) => {
      const searches = await executeSearches(page)
      await page.click('id=search-bar')
      const recentList = await page
        .locator(`[aria-label="Recent searches"]`)
        .locator('[role="option"]')
        .allTextContents()
      searches.reverse().forEach((term, idx) => {
        expect(recentList[idx].trim()).toEqual(term)
      })
    })

    test('clicking takes user to that search', async ({ page }) => {
      await executeSearches(page)
      await page.click('id=search-bar')
      expect(page.url()).toContain('?q=galah')
      await page
        .locator(`[aria-label="Recent searches"]`)
        .locator('[id="option-1"]')
        .click()
      expect(page.url()).toContain('?q=honey')
    })

    test('recent searches shows message when blank', async ({ page }) => {
      await page.click('id=search-bar')
      const recentSearchesText = await page
        .locator('[data-testid="recent-searches"]')
        .textContent()
      expect(recentSearchesText).toContain('No recent searches to show.')
    })

    test('clicking Clear clears the recent searches', async ({ page }) => {
      await executeSearches(page)
      await page.click('id=search-bar')
      await page.locator('[aria-label="Clear recent searches"]').click()
      const recentSearchesText = await page
        .locator('[data-testid="recent-searches"]')
        .textContent()
      expect(recentSearchesText).toContain('No recent searches to show.')
    })
  })
}
