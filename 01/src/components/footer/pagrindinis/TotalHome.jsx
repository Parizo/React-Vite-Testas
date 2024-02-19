import axios from "axios";
import { useEffect, useState } from "react";
import { Home } from "./Home";


export const TotalHome = () => {

    const [home, setProduct] = useState ([]);
    useEffect (() => {
axios.get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books')
.then(response => {
    console.log('response', response.data)
    setProduct(response.data)
})
.catch(err => console.log(err));


    },[]);


return (
<>
{home.map((post) => <Home key={post.id} title={post.title} cover={post.cover} author={post.author} category={post.category} price={post.price}/>)}
</>
)
}