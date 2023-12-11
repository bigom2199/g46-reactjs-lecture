import  ReactDOM  from "react-dom/client";
// npm install bootstrap@5

import "bootstrap/dist/css/bootstrap.css";
import App from "./ex1_class/App";
import NameList from "./ex3_var_function/NameList";
import NameList from "./ex4_props/NameList";
import App from "./ex4-props/App";
import ToggleButtun from "./ex5_state/ToggleButtun";
import HooksDemo from "./ex7_hooks/HooksDemo";
import TodoList from "./ex7_hooks/TodoList";
import ValidationForm from "./ex7_hooks/validationForm";
// import App from "./ex1_class/App";
const root   = ReactDOM.createRoot(document.getElementById("root")); 
  /*   root.render(
          <>
     <NameList nameList={["Mehrdad Javan","Simon Elbrink","Marcus Godmunson"]}  />;
     <NameList names={["Test Test","Test2 Test2"]}/>
      </>
     );*/
     root.render(
          <div className ="container">
               <counter/>
          <ToggleButtun/>
          <HooksDemo/>
          <TodoList/>
          <ValidationForm/>
          
          </div>
     );

