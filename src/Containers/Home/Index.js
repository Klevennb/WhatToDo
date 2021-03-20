import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Theme'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SuggestionWheel } from '@/Components'

const Home = () => {
    const { Layout, Gutters, Fonts } = useTheme()

    const { t } = useTranslation()

    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
        <View style={[Layout.fill, Layout.colCenter]}>
            <Text style={Fonts.textCenter}>{t('welcome')}</Text>
            <SuggestionWheel />
        </View>
    )
}

export default Home