import {Formik,Form,Field,ErrorMessage, FieldArray} from "formik";


const todoValidation = RegExp(/^[^*|\":<>[\]{}`\\()';@&$]+$/);
function Todo(){
  let todoList =[];
  return(

   
    <Formik
      initialValues = {{
        todo : "",
        createdate : new Date()
      }}

      validate ={(values)=> {
        const errors = {};
        //console.log(values.todo);
        if(!todoValidation.test(values.todo))
          errors.todo = "Special characters are not allowed";
        else if(values.todo.length < 15)
          errors.todo = "Length of ToDo should be greater than 15 characters";
        else if(values.todo.length > 50)
          errors.todo = "Length of ToDo should be less than 50 characters";
       
        return errors;
      }
    }

    onSubmit = {(values)=>{
      todoList.push(values);
      
      console.log(todoList);
    }}
  >
       
 
    {()=>{
      
  
        return(
          
          <Form>
            <h1>ToDo App</h1>
            <Field as = "textarea" name = "todo" cols = "50" rows = "5" placeholder = "Enter here your ToDo" /> 
            <br/>
            <ErrorMessage name = "todo"/>
            <br/><br/>
            <button type = "submit" class="btn btn-primary">Add ToDo</button>

            <FieldArray 
              name = "todoList"
              render={() => (
                  todoList.map((todolist)=>(
                  <div class = "m-2 p-3 mb-2 bg-info text-white">
                    <p class = "display-5">{todolist.todo}</p>
                    <p>{todolist.createdate.toLocaleString()}</p>
                  </div>))
              )}
            />
          
          </Form>     
             
        )
      }
    }

    </Formik>

    
  
  )
  
}

export default Todo;