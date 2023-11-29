import React from "react";
import {Header } from "react";
import Footer from "./Footer";

const App = () => {
  // write js codes
  const Table = () => {
  return (
    < table className ="table table-hover mt-5">
       <TableHeader/>
       <TableRow/>
        </table>
  )
  }
    const TableHeader=() => {
        return(
        <header>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>

            </tr>
        </header>
        )
    }
      const TableRow = () => {
        return (
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    
                </tr>
            </tbody>
        )
      }
}

export default App;
