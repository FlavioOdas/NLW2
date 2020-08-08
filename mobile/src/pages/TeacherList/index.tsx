import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

import { Feather } from '@expo/vector-icons'

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native'

const TeacherList = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false)
    const [favorites, setFavorites] = useState<Number[]>([])
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favoritedTeachersId)
            }
        })
    }

    useFocusEffect(() => loadFavorites)

    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    async function handleFiltersSubmit() {
        loadFavorites

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setTeachers(response.data)
    }

    return (
        <View style={styles.container} >
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color='#fff' />
                    </BorderlessButton>
                )} 
            >
                {isFilterVisible && ( <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                        style={styles.input}
                        value={subject}
                        onChangeText={text => {setSubject(text)}}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                style={styles.input}
                                value={week_day}
                                onChangeText={text => {setWeekDay(text)}}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                style={styles.input}
                                value={time}
                                onChangeText={text => {setTime(text)}}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>

                    <RectButton     
                        onPress={() => {
                            handleFiltersSubmit();
                            handleToggleFiltersVisible();
                        }} 
                        style={styles.submitButton}
                    >
                        <Text  style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View> 
                )}
            </PageHeader>

            <ScrollView 
                style={styles.teacherList} 
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}>
                    {teachers.map((teacher: Teacher) => {
                        return (
                            <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)}/>)}
                        )
                    } 
            </ScrollView>

        </View>
    )
}

export default TeacherList;