import React, { useState } from 'react';
import style from "./style.module.css";


const Form = () => {
    const initialUserState = {
        Name: "", Email: "", Number: "", Location: "", GSTNo: "", Description: "", Category: ""
    };

    const [user, setUser] = useState(initialUserState);

    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const getData = async (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }

        const res = await fetch(
            process.env.REACT_APP_DATABASE,
            options
        );

        if (res.ok) {
            setUser(initialUserState);
            alert("Your Details have been sent. Team will contact you shortly.");
        } else {
            alert("Some Error have occurred, Please Try again later!")
        }
    }

    return (
        <div>
            <div className={style.FullContainer}>
                <div className={style.form}>
                    <h5>Please fill form and Connect With Us</h5>
                    <div className={style.container}>
                        <form method="POST">
                            <input type="text" name="Name" placeholder="Supplier Name" value={user.Name} autoComplete='Off' required onChange={data}></input>
                            <input type="email" name="Email" placeholder="Email (Optional)" value={user.Email} autoComplete='Off' onChange={data}></input>
                            <input type="text" name="Number" placeholder="Phone Number" value={user.Number} autoComplete='Off' required onChange={data}></input>
                            <select name="Category" value={user.Category} onChange={data}>
                                <option value="">Select Category</option>
                                <option value="coffee">Coffee</option>
                                <option value="pepper">Pepper</option>
                                <option value="fruit">Fruit</option>
                            </select>
                            <input type="text" name="Location" placeholder="Location" value={user.Location} autoComplete='Off' required onChange={data}></input>
                            <input type="text" name="GSTNo" placeholder="GST Number" value={user.GSTNo} autoComplete='Off' required onChange={data}></input>
                            <textarea name="Description" placeholder='Description' value={user.Description} autoComplete='Off' required onChange={data}></textarea>
                            <button onClick={getData}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
