import React from 'react'
import './styles.css'
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function Firestore() {
    const [newName, setNewName] = React.useState("");
    const [newAge, setNewAge] = React.useState(0);
    const [users, setUsers] = React.useState([]);
    const usersCollectionRef = collection(db, "users");

    React.useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers();
    }, [usersCollectionRef])

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    }

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 }
        updateDoc(userDoc, newFields);
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }

    return (
        <div className="App">

            <input placeholder='Name...' onChange={(event) => { setNewName(event.target.value) }} />
            <input type="number" placeholder='Age...' onChange={(event) => { setNewAge(event.target.value) }} />
            <button onClick={createUser}>Create User</button>

            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>
                        <button onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
                        <button onClick={() => deleteUser(user.id)}>Delete User</button>
                    </div>
                })
            }
        </div>
    );
}

export default Firestore