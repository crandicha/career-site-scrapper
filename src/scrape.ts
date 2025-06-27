import { chromium, Page } from 'playwright'

const URL_SEPARATOR = '---'

export const scrape = async (
  url = process.env.TARGET_URL || '',
  text = 'software'
) => {
  if (!url || !text) {
    throw new Error(
      'TARGET_URL and TARGET_WORD must be set in the environment variables'
    )
  }
  const urls = url.split(URL_SEPARATOR).map((u) => u.trim())
  const browser = await chromium.launch()

  const pages = await Promise.all(
    urls.map(async (u) => await browser.newPage())
  )

  await Promise.all(
    pages.map(async (page, index) => {
      await page.goto(urls[index])
    })
  )

  const getCount = async (page: Page) =>
    await page.evaluate((text) => {
      const bodyText = document.body.innerText || ''
      const regex = new RegExp(`\\b${text}\\b`, 'gi')
      const matches = bodyText.match(regex)
      return matches ? matches.length : 0
    }, text)

  const results = await Promise.all(
    pages.map(async (page, index) => ({
      url: urls[index],
      count: await getCount(page),
    }))
  )
  await browser.close()

  return results
}
