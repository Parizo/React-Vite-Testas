import './Navigation.css'

export const Navigation = () => {


    return (
    <>
    <a href="http://localhost:5173/pagrindinis">
    <button style={{borderColor: "#b37300",backgroundColor: 'orange', padding: '20px 30px', margin:"15px 15px"}}>
        Pagrindinis
    </button>
    </a>
    
    <a href="http://localhost:5173/registravimas">
    <button className="css-button2">
        Registravimas 
    </button>
    </a>
    
    <a href="http://localhost:5173/Atsiliepimai">
    <button className="css-button2">
    Atsiliepimai
    </button>
    </a>
    </>
    )
    }