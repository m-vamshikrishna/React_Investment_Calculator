import Input from "./Input";
export default function UserInput({userInput,updateUserInput})
{
    return <>
    <section id="user-input">
        <div className="input-group">
            <p><Input inputLable="INITIAL INVESTMENT" value={userInput} updateUserInput={updateUserInput} keys="initialInvestment"/></p>
            <p><Input inputLable="ANUAL INVESTMENT" value={userInput} updateUserInput={updateUserInput} keys="annualInvestment"/></p>
            <p><Input inputLable="EXPECTED RETURN" value={userInput} updateUserInput={updateUserInput} keys="expectedReturn"/></p>
            <p><Input inputLable="DURATION" value={userInput} updateUserInput={updateUserInput} keys="duration"/></p>
        </div>
    </section>
    </>
}