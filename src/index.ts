import { notify } from './notify'
import { scrape } from './scrape'
import { config } from 'dotenv'

config({
  path: '.env',
})
;(async () => {
  try {
    const occurrences = await scrape()
    console.log('Scraping completed successfully:', occurrences)

    if (occurrences > 0) {
      notify(occurrences)
    }
  } catch (error) {
    console.error('Error during scraping:', error)
  }
})()
