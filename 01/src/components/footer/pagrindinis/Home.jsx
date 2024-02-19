import './Home.css'
export const Home = ({id, title, author, category, price, cover}) => {



return (
<>
<div className='css-book-card'>
<h3>{id}</h3>
<h3>{title}</h3>
<p><b>Autorius: </b> {author}</p>
<p><b>Knygos kategorija: </b>{category}</p>

<img  className="css-home-img" src={cover} alt="Picture"/>
<h3>Kaina: {price}</h3>
</div>
</>
)
}