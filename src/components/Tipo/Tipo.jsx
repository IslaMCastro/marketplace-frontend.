import './Tipo.css'
import React from 'react'

function Tipo() {

    
    return (
        <div>
            <div className="col-6">
                <h1>Tipo</h1>
                <div className="d-flex justify-content-center">
                    <form action=''>
                        <div className="mb-3">
                            <label for="desricao" className="form-label">Descrição: </label>
                            <input type="text" class="form-control" id="descricao" placeholder="Exemplo: Calçados" />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn btn-sucess'>Salvar</button>
                            <button type='reset'className='btn btn-warning'>Limpar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h1>Lista</h1>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>



    );

}

export default Tipo

