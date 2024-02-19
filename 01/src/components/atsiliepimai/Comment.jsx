import { useState } from "react";


export const Comment = () => {

const [form] = useState ({
    name:'',
});


    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`“Ačiū, ${form.name} , jūsų atsiliepimą gavome`);
    }

    return (
        <>
    <h1>Tavo atsiliepimas</h1>
    <form onSubmit={handleFormSubmit}>
    <label>Vardas:
        <input typeof="text" required name="name" />
    </label>
    <label>Knygos pavadinimas:
    <input typeof="text"/>
    </label>
<label>Atsiliepimas: 
    <input type="textarea" />
</label>
<button type="submit">Submit</button>
</form>
        </>
    )

}