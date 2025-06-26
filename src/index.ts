import { scrape } from './scrape'
import { config } from 'dotenv'

config({
  path: '.env',
})
;(async () => {
  try {
    const data = await scrape()
    console.log('Scraping completed successfully:', data)
  } catch (error) {
    console.error('Error during scraping:', error)
  }
})()
