import { Button, Icon, Tooltip } from '@chakra-ui/react'
import { TbLanguage } from 'react-icons/tb'
import { useTranslation } from '../context/TranslationContext'

const TranslateButton = () => {
  const { language, toggleLanguage } = useTranslation()

  return (
    <Tooltip label={language === 'en' ? 'Leer en español' : 'Read in English'}>
      <Button
        aria-label='Toggle language'
        onClick={toggleLanguage}
        size='sm'
        variant='outline'
        leftIcon={<Icon as={TbLanguage} />}
      >
        {language === 'en' ? 'ES' : 'EN'}
      </Button>
    </Tooltip>
  )
}

export default TranslateButton
