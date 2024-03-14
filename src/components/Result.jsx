import {calculateInvestmentResults,formatter} from "../util/investment.js"
export default function Result({input})
{
    const results = calculateInvestmentResults(input);
    const initialInvestment = results[0].valueEndOfYear - results[0].annualInvestment - results[0].interest;
    return <>
    <table id="result">
    <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Intrest(Year)</th>
            <th>Total Intrest</th>
            <th>Invested Capital</th>
        </tr>
    </thead>
    <tbody>
        {results.map((data)=>{
           let totalIntrest = data.valueEndOfYear - data.annualInvestment* data.year - initialInvestment;
           const totalAmountInvested = data.valueEndOfYear - totalIntrest;
           return  (
           <tr key={data.year}>
            <td>{data["year"]}</td>
            <td>{formatter.format(data["valueEndOfYear"])}</td>
            <td>{formatter.format(data["interest"])}</td>
            <td>{formatter.format(totalIntrest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td> 
          </tr>
        );
    })}
   </tbody>
    </table>
    </>
}