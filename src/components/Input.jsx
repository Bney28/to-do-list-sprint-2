import React, { useState } from 'react'
import "../styles/Input.sass"
import { v4 as uuidv4 } from 'uuid'  //Generador de Id's

const Input = (props) => {
    const [input, setInput] = useState("")

    const handleChange = (e) => {    //Función para manejar cambios, manejo de la info
        setInput(e.target.value)
        /* console.log(e.target.value); */
    }

    const handleSend = (e) => {    // Función para manejar el envío del formulario
        if (e.key === "Enter") {
            e.preventDefault()

            const newTodo = {      //Objeto que crea la nueva tarea
                id: uuidv4(),
                text: input,
                completed: false
            }

            props.onSubmit(newTodo)
            setInput('')
            console.log(newTodo);

            /* localStorage.setItem("newToDo",newTodo)
            const newInput = JSON.parse(localStorage.getItem("newToDo"))
            console.log(newInput); */
        }
    }


    return (
        <>
            <form
                className="form"
                onKeyDown={handleSend}
            >
                <i className="fa-regular fa-circle form__icon"></i>
                <input
                    value={input}
                    type="text"
                    className="form__input"
                    placeholder="New to do..."
                    onChange={handleChange}
                />
            </form>
        </>
    )

}

export default Input