import { notify } from './notify'
import { scrape } from './scrape'
;(async () => {
  try {
    const occurrences = await scrape()

    occurrences.forEach((occurrence) => {
      console.log(`${occurrence.url}: ${occurrence.count}`)
    })

    const nonEmptyOccurrences = occurrences.filter(
      (occurrence) => occurrence.count > 0
    )

    for (const occurrence of nonEmptyOccurrences) {
      await notify(occurrence.url, occurrence.count)
      // Pause for 1000 milliseconds (1 second)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  } catch (error) {
    console.error('Error during scraping:', error)
  }
})()
