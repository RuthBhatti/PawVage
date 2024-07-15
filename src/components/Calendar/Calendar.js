// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

const Calendar = ({ onDateSelected, closeCalendar, initialSelectedDate }) => {
    const [currentDate, setCurrentDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState(moment(initialSelectedDate));

    useEffect(() => {
        if (initialSelectedDate) {
            setSelectedDate(moment(initialSelectedDate));
        } else {
            setSelectedDate(moment());
        }
    }, [initialSelectedDate]);

    const generateMatrix = () => {
        const matrix = [];
        const firstDay = currentDate.clone().startOf('month').startOf('week');
        const lastDay = currentDate.clone().endOf('month').endOf('week');

        let rows = [];
        let day = firstDay.clone();

        while (day <= lastDay) {
            for (let i = 0; i < 7; i++) {
                rows.push(day.clone());
                day.add(1, 'day');
            }
            matrix.push(rows);
            rows = [];
        }
        return matrix;
    };

    const isSameDay = (day1, day2) => day1 && day2 && day1.isSame(day2, 'day');

    const matrix = generateMatrix();

    const handleDatePress = (date) => {
        setSelectedDate(date);
        onDateSelected(date.toDate());
        closeCalendar();
    };

    const handleTodayPress = () => {
        const today = moment();
        setCurrentDate(today);
        setSelectedDate(today);
        onDateSelected(today.toDate());
        closeCalendar();
    };

    return (
        <View style={styles.calendar}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setCurrentDate(currentDate.clone().subtract(1, 'month'))}>
                    <Text style={styles.navButton}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>{currentDate.format('MMMM YYYY')}</Text>
                <TouchableOpacity onPress={() => setCurrentDate(currentDate.clone().add(1, 'month'))}>
                    <Text style={styles.navButton}>›</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.week}>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <Text key={index} style={styles.dayName}>
                        {day}
                    </Text>
                ))}
            </View>
            {matrix.map((week, rowIndex) => (
                <View key={rowIndex} style={styles.week}>
                    {week.map((day, colIndex) => (
                        <TouchableOpacity
                            key={colIndex}
                            onPress={() => handleDatePress(day)}
                            style={[
                                styles.day,
                                isSameDay(day, selectedDate) && styles.selectedDay,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.dayText,
                                    isSameDay(day, selectedDate) && styles.selectedDayText,
                                ]}
                            >
                                {day.date()}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
            <TouchableOpacity onPress={handleTodayPress} style={styles.todayButton}>
                <Text style={styles.todayButtonText}>Today</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    calendar: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        width: 300,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    navButton: {
        fontSize: 24,
        color: '#00CAE8',
    },
    week: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayName: {
        width: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#666',
    },
    day: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    dayText: {
        fontSize: 16,
        color: '#333',
    },
    selectedDay: {
        backgroundColor: '#00CAE8',
        borderRadius: 20,
    },
    selectedDayText: {
        color: 'white',
    },
    todayButton: {
        marginTop: 10,
        backgroundColor: '#00CAE8',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
    },
    todayButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Calendar;