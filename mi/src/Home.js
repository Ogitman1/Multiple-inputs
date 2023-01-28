import e from "express-status-monitor"
import { useState } from "react"

export const Home = () =>{
        const [email, setEmail] = useState('')
        const [firstname, setName] = useState('')
        const [age, setAge] = useState('')
        const [people, setPeople] = useState([])
        const [person, setPerson] = useState({firstname: ' ', email: '', age: ''})

            const handlechange = (e) =>{
                e.preventDefault();
                const name = e.target.name;
                const value = e.target.value;
                setPerson({...person, [name]: value});

            }
            const handlesubmit = () => {
               if (person.firstname == "" && person.email == "" && person.email == ""){
                    const newPerson = ({...person, id: new Date().getTime().toString()});
                    setPeople([...people, newPerson]);
                    setPerson(firstname = "", email = "", age = "")

               }
            }
        return(
            <article>
                <form>
                    <input type="text" name="firstName" id="firstName"
                    value={firstname}
                    
                    onChange={
                        handlechange}
                    
                    
                    >
                    <label>Email: </label>
                    
                    </input>
                    <input type="email" name="email" id="email"
                    value={email}
                    
                    onChange={
                        handlechange}
                    
                    
                    >
                    <label>Email: </label>
                    
                    </input>
                    <input type="numbe2r" name="age" id="age"
                    value={age}
                    
                     onChange={
                        handlechange}
                    
                    
                    >
                    <label>Email: </label>
                    
                    </input>
                    <input type="submit" onClick={handlesubmit}>submit</input>
                    {
                        people.map((person)=> {
                            const {firstName, email, age, id} = person;
                            return(
                                <div key={id}>
                                    <h1> {firstName}</h1>
                                    <p> Idade: {age}, {email}</p>
                                </div>
                            )
                        })
                    }
                </form>
            </article>
        )




}