// Importing necessary modules and components

import React, { Component } from 'react'
import Animals from './Animals'
import Header from './Header'
import Footer from './Footer'
import { animals } from './animalsList'
// console.log(animals)

// Creating a class component called App that extends Component
class App extends Component {
  // Initializing the state of the component with animals, title, and searchInput properties
  state = {
    animals: animals,
    title: 'Living world',
    searchInput: '',
  }

  // A method to remove an animal from the state based on the name
  removeHandler = (name) => {
    // console.log(this.state)
    // console.log(this.state.animals)
    // console.log(name)
    const updatedArray = this.state.animals.filter((animal) => {
      console.log('cliked name', name)
      //  if the conditon match thhen update the array and set teh state upadated ary
      // looing aevery animal chekc the if the name is not mcathed to the cliked name then condition mach
      // insted ! we use == then updated arrt wll be teg cliked array
      return animal.name !== name
    })
    //setting the state upadated array
    this.setState({
      animals: updatedArray,
    })
  }
  // A method to increase or decrease the likes of an animal in the state based on the name and action
  likesHandler = (name, action) => {
    // setting the state upadated array in diffrent wasys
    this.setState((prevState) => {
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === 'add') {
            return { ...animal, likes: animal.likes + 1 }
          } else {
            return { ...animal, likes: animal.likes - 1 }
          }
        } else {
          return animal
        }
      })
      return {
        animals: updatedArray,
      }
    })
  }
  // A method to update the searchInput property in the state based on the user input
  searchHandler = (e) => {
    this.setState({
      // e.target.value is the value of the input
      //collection
      searchInput: e.target.value,
    })
  }
  //The render method that returns the JSX for the component
  //The Header component with a title prop set to the value of the title property in the state
  render() {
    return (
      <div>
        <Header title={this.state.title} />

        {/* {
          / The Animals component with data, removeHandler, likesHandler, searchHandler, and searchInput props set to the corresponding properties and methods in the state /
        } */}
        <Animals
          // data for animals contan with name, image, and likes in arrays and it belongs to the state in app.js
          data={this.state.animals}
          // these are 3 are props methods passed to the Animals component, state dont matter
          removeHandler={this.removeHandler}
          likesHandler={this.likesHandler}
          searchHandler={this.searchHandler}
          // hre updating the searchInput prop in the state based on the user input
          // serc props call from search in middle  send it search sort in the animal component
          searchInput={this.state.searchInput}
        />
        <Footer />
      </div>
    )
  }
}

export default App

// The removeHandler function is responsible for removing an animal from the state array of animals when the "x" button is clicked on the corresponding Card component.

// First, it logs the current state, the animals array, and the name of the animal being removed to the console.

// Then, it creates a new array called updatedArray by filtering out the animal whose name matches the name parameter passed to the function. The filter() method creates a new array by testing each element of the original array and including only those elements that meet a certain condition.

// Finally, it updates the state by setting the animals key to updatedArray, effectively removing the animal from the state array of animals.

// The likesHandler function is a method of the App class component. It takes two parameters: name and action. The name parameter is a string representing the name of the animal that the user wants to update the likes count. The action parameter is a string representing the action that the user wants to perform. It can either be 'add' or 'remove'.

// The likesHandler function uses the setState method to update the animals array in the component's state. It takes a function as a parameter that receives the previous state (prevState) and returns the new state object.

// The new state object is created by mapping over the animals array in the previous state and returning a new array with updated likes count for the animal with the specified name.

// If the action parameter is 'add', the likes count is incremented by 1. If the action parameter is 'remove', the likes count is decremented by 1. If the animal's name does not match the specified name, it returns the original animal object without any changes.

// Finally, the likesHandler function returns the new state object with the updated animals array.

// The removeHandler function is responsible for removing an animal from the state array of animals when the "x" button is clicked on the corresponding Card component.

// First, it logs the current state, the animals array, and the name of the animal being removed to the console.

// Then, it creates a new array called updatedArray by filtering out the animal whose name matches the name parameter passed to the function. The filter() method creates a new array by testing each element of the original array and including only those elements that meet a certain condition.

// Finally, it updates the state by setting the animals key to updatedArray, effectively removing the animal from the state array of animals.
