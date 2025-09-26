import { Component } from "react";
import './App.css'
import UserProfile from "./Component/UserProfile";

const userDetailsList = [
   {
      uniqueNo : 1, 
      imgUrl : 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name : 'Esther Howard',
      role : 'Software Developer',
   },
   {
      uniqueNo : 2, 
      imgUrl : 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name : 'Floyd Miles',
      role : 'Software Developer',
   },
   {
      uniqueNo : 3, 
      imgUrl : 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name : 'Jacob Jones',
      role : 'Software Developer',
   },
      {
         uniqueNo : 4, 
         imgUrl : 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png', 
         name : 'Devon Lane', 
         role : 'Software Developer',
      },
]

class App extends Component{
    state = {
      searchInput : '',
      userDetailsList : userDetailsList
   }

    onChangeSearchInput = (event) => {
      this.setState({searchInput : event.target.value})
    }
    onDeleteUser = (uniqueNo) => {
      const {userDetailsList} = this.state
      const filteredUserData = userDetailsList.filter(
         eachUser => eachUser.uniqueNo !== uniqueNo,
      )
      this.setState({userDetailsList : filteredUserData})
   }

   render(){
      const {searchInput, userDetailsList} = this.state
      console.log(searchInput)
      const searchResults = userDetailsList.filter(eachUser => 
       eachUser.name.includes(searchInput),
      )

      return(
         <div className="app-container">
            <h1 className="title">User List</h1>
            <input 
            type="search" 
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="input-button"
            />
            <ul className="list-container">
               {searchResults.map(eachUser => (
                  <UserProfile 
                  onDeleteUser = {this.onDeleteUser}
                  UserDetails = {eachUser} key = {eachUser.uniqueNo}/>
               ))}
            </ul>
         </div>
      )
   }
}
export default App