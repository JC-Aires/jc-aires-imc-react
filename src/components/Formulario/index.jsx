import { useState } from "react";

import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    const calcular = () => {
            setImc((peso * 10000 / (altura * altura)).toFixed(2));
    }

    return (
        <div className={styles.form}>
            <label>Peso em kg:
                <input type="number" onChange={(e) => setPeso(parseFloat(e.target.value))} />
            </label>
            <label>Altura em cm:
                <input type="number" onChange={(e) => setAltura(parseFloat(e.target.value))} />
            </label>
            <button type="button" onClick={calcular}>CALCULAR</button>
            <p>Resultado = {imc}</p>
        </div>
    )
}

export default Formulario;