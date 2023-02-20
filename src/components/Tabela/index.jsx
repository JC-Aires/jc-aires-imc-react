import styles from './Tabela.module.css';

const Tabela = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>
                        CLASSIFICAÇÃO
                    </th>
                    <th>
                        IMC (kg/m²)
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Magreza</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25,0 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau-I</td>
                    <td>Entre 30,0 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau-II</td>
                    <td>Entre 35,0 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau-III</td>
                    <td>Acima de 40,0</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela;