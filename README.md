# Career Site Scrapper
A simple career site scrapper for notifying if there's a job role available in the provided URL using certain keyword

## How to Use
You can fork this repository and setup the variables as needed

- `TARGET_URL` variables: collection of urls to be scrapped separated by `---` ex: `https://google.com---https://facebook.com`
- `TARGET_WORD` variables: the word to be search to collect how many count of that word exist in the url
- `TELEGRAM_BOT_TOKEN` secrets: bot token that will be used to notify you using chat in telegram, to create this you can use the [@BotFather](https://telegram.me/BotFather)
- `TELEGRAM_CHAT_ID` secrets: the chat id where bot will notify you

## Getting Chat ID
After creating the bot token using @BotFather, you can directly chat to your bot, and then run this curl on terminal / cmd
```
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates"
```
which will list all incoming chat to your bot, you can extract the chat id from that
