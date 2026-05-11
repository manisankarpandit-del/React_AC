import React from "react";
import { useForm } from "react-hook-form"


function Form(){

    const {register,handleSubmit,formState:{errors}} = useForm();//error for handle the error

    function submitForm(data){
        console.log(data);
    }

    console.log("Render");
    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name:</label>
            <input id="first" {...register("name",
                {required:"Name is required"}
            )} />
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age:</label>
            <input id="second" {...register("age",
                {
                    min:{
                    value:18,
                    message:"Age must be at least 18"
                    },
                    max:{
                    value:80,
                    message:"Age must be less than 80"
                    },
                    required:"Age is required"
                }
            )} />
            {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="third">Password:</label>
            <input type="password" id="third" {...register("password",
            {
                    minLength:{
                    value:5,
                    message:"Password must be at least 5 characters"
                    },
                    maxLength:{
                    value:10,
                    message:"Password must be less than 10 characters"
                    },
                    required:"Password is required"
                }
            )} />
            {errors.password && <span>{errors.password.message}</span>}
        </div> 
        <button>Submit</button>
        </form>
        </>
    )
}




export default Form;