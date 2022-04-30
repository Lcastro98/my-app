import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])

    const [numero, setNumero] = useState(6)

    const agregarElemento = () => {

        setNumero(numero + 1)
        setArrayNumero([
            ...arrayNumero,
            numero
        ])
    }

    return ( 
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) => 
                    <p key={index}>{item}</p>
                )
            }
        </Fragment>
     );
}
 
export default Lista;