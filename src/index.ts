import { notify } from './notify'
import { scrape } from './scrape'
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
