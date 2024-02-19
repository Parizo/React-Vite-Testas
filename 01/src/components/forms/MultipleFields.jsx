import axios from "axios";
import { useState } from "react"


export const MultipleFields = () => {

    const [form, setForm] = useState({
        title: '',
        author: '',
        category: '',
        price: '',
        cover: '',

    });


const handleForm = (event) => {
    setForm((prevFormData) => ({...prevFormData, [event.target.name]: event.target.value}))
}
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Knyga ${form.title} pridėta sveikinu !`);
    

        const handleFormSubmit = (e) => {
            e.preventDefault();
            alert(`Knyga${form.title} pridėta`);
            
            axios.create('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', form)
            .then(response =>  {
                console.log('response', response);
                alert(`Super serveris dirba, ${response.data.title}`);
            })
            .catch(err => console.log(err));


    }
}

return (
    <>
    <div>
    <form onSubmit={handleFormSubmit}>
<div>
<label>title:
<input type="text" required name="title" value={form.title} onChange={handleForm}/>
</label>
<label>author: 
    <input type="text" required name="author" value={form.author} onChange={handleForm}/>
</label>
<label>category:
<input type="text" required name="category" value={form.category} onChange={handleForm}/>
</label>
 <label>Price:
<input type="text" name="price" value={form.price} onChange={handleForm}/>
 </label>
 <label>Cover:
<input type="text" name="cover" value={form.cover} onChange={handleForm} />
 </label>
 </div>
 <button type="submit">Submit</button>
    </form>
    </div>
    </>
)
}