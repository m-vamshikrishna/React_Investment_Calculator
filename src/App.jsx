import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"


function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:15000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})
const inputIsValid = userInput.duration>0;
   
function updateUserInput(key,userInputs)
{
setUserInput(prevData => {
  return {
    ...prevData,
    [key]:parseInt(userInputs)
  };
});
}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} updateUserInput={updateUserInput}/>
    {inputIsValid?<Result input={userInput}/>:<p className="center">Please Enter Valid Duration</p>}
    </>
  )
}

export default App
