import { scrape } from './scrape'

;(async () => {
  try {
    const data = await scrape()
    console.log('Scraping completed successfully:', data)
  } catch (error) {
    console.error('Error during scraping:', error)
  }
})()
