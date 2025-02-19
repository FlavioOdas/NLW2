import React, { FunctionComponent, ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'

interface PageHeaderProps {
    title: string
    headerRight?: ReactNode
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({title, headerRight, children}) => {
    const {navigate} = useNavigation()

    function handlegoBack() {
        navigate('Landing')
    }

    return (
        <View style={styles.container} >
            <View style={styles.topBar}>
                <BorderlessButton onPress={handlegoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                { headerRight }
            </View>

            {children}
        </View>
    )
}

export default PageHeader;