import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);


  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />)
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
})
