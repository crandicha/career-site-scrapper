import { chromium } from 'playwright'

export const scrape = async (
  url = 'https://careers.mercari.com/en/jobs/',
  text = 'frontend'
) => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(url)

  const count = await page.evaluate((text) => {
    const bodyText = document.body.innerText
    const matches = bodyText.match(new RegExp(`\\b${text}\\b`, 'gi'))
    return matches ? matches.length : 0
  }, text)

  console.log(`"${text}" appears ${count} times`)

  await browser.close()

  return count
}
