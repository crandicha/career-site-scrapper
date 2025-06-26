export const notify = async (value: string | number) => {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`
  const chatId = process.env.TELEGRAM_CHAT_ID
  const message = `Found ${value} occurrences of the target word (${process.env.TARGET_WORD}). Searching at ${process.env.TARGET_URL}`

  if (!chatId || !process.env.TELEGRAM_BOT_TOKEN) {
    throw new Error(
      'TELEGRAM_CHAT_ID and TELEGRAM_BOT_TOKEN must be set in the environment variables'
    )
  }

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
  } catch (error) {
    console.error('Error sending Telegram notification:', error)
  }
}
