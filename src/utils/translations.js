// This is a simple example. For a production app, consider using i18n libraries.
const translations = {
  // Add more translations as needed
}

export const getTranslatedContent = async (content, targetLang) => {
  if (targetLang === 'en') return content

  // For demonstration, we're returning mock translated content
  // In a real application, you'd use a translation API or pre-translated content
  if (targetLang === 'es') {
    // Simulate translation
    // In a real app, you would fetch translations from an API or database
    return `${content} (Traducido al español)`
  }

  return content
}

export default translations
