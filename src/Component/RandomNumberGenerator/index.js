import { Component } from "react";


class RandomNumberGenerator extends Component{
      state = {
         count : 0,
       }

    onClickButton = () => {
     const getRandomNumber = Math.ceil(Math.random() * 100)
      this.setState({randomNumber : getRandomNumber})
    }

   render() {
    const{randomNumber} = this.state

       return(
         <div classname = "container">
            <h1 className="heading">Random Number</h1>
            <p className="description">
              Genarate a Random Number in the range 0 t0 100 
            </p>
            <button type="buton" className="random-number" onClick={this.onClickButton}>
              Genarate
            </button>
            <p className="">{randomNumber}</p>
         </div>
       )
   }
}
export default RandomNumberGenerator