import React from 'react'
import "./styles.css"

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input className='input__box' type="input" placeholder='Enter a task'
        value={todo} onChange = {(e) => setTodo(e.target.value)}></input>
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField