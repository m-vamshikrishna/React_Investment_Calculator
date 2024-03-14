export default function Input({inputLable,value,updateUserInput,keys})
{
    return <>
    <label>{inputLable}</label>
    <input type="number" defaultValue={value[keys]} required onChange={(event)=>updateUserInput(keys,event.target.value)}/>
    </>
}