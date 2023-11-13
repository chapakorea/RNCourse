import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";


function GoalInput(props) {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(input) {
    setEnteredGoalText(input);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText} />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} />
          </View>
        </View>
        
      </View>
    </Modal>
  );
};

export default GoalInput;


const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    marginRight: 8,
    padding: 8
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    padding: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
})
