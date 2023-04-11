import React from 'react'
import Card from './Card'
import Search from './Search'

// Animals functional component

// This code is creating a new array called searchFilter by filtering the data array passed down to the Animals component through its props. The filter function takes a callback function that runs for each item in the data array.

// The callback function checks whether the name property of each item includes the value of searchInput property passed down through props. If the name includes the searchInput string, the item is included in the new searchFilter array, otherwise, it is excluded.

// For example, if props.searchInput is equal to "lion", the searchFilter array will only contain items whose name includes the string "lion".

const Animals = (props) => {
  // console.log(props)
  // Filter the data based on search input
  const searchFilter = props.data.filter((animal) => {
    // console.log(props.searchInput, animal.name)
    return animal.name.includes(props.searchInput)
    // check the string if the character , beacue onchange event is triggered every time the search ture or false retuern
  })

  // Render the component
  return (
    <div>
      <h2>Animals {props.data.length}</h2>
      {/* // creating search  Component  and passing down the searchInput prop to to searh component */}
      <Search searchHandler={props.searchHandler} />

      {searchFilter.map((item) => (
        // creating a card component and passing down the data prop to the card component
        // here i am  creating card list component and passing down the data prop to the card list component and all necessary props/info that needs in render in Card component, just creating not renderng will done in Card component
        <Card
          key={item.name}
          name={item.name}
          likes={item.likes}
          // if we wrote rempveHandler it does no matter what the value of props.rempveHandler is where onCliked is called troggerd
          removeCard={() => props.removeHandler(item.name)}
          // likes handler  create 2 props and pass down the value of item.likes to the props.likes handler
          // ppos sened it to the each card component where onCliked is triggered
          addLikes={() => props.likesHandler(item.name, 'add')}
          removeLikes={() => props.likesHandler(item.name, 'remove')}
        />
      ))}
    </div>
  )
}

export default Animals

// This code defines a prop called removeCard that is being passed down to the Card component. It uses an arrow function to create an anonymous function that calls the removeHandler function passed as a prop to the Animals component, passing the name property of the current item object as an argument. This allows the Card component to call the removeHandler function defined in the Animals component, passing it the name of the animal that the user wants to remove from the list.

// {
//   /* This code is rendering an array of Card components based on the filtered
//       search results of animals that match the user's input. The searchFilter
//       array contains only those animals whose names include the searchInput
//       provided by the user. Then, the map() method is used to iterate over the
//       searchFilter array and return a new array of Card components, passing in
//       the necessary props for each animal item in the array. The Card component
//       is passed the animal's name, likes, and functions for removing the animal
//       card, adding a like, and removing a like. The key prop is set to the name
//       of the animal to help React identify and track each Card component in the
//       list. */
// }
// {
//   /* Map through each animal and render a card component */
// }
