import "./Tipo.css";
import React, { useState } from "react";

function Tipo() {
  const[id, setId] = useState();  
  const[descricao, setDescricao] = useState();

  function alterar(e){
    e.prevetDefault();
    setDescricao(e.target.value); 
  }

  function salvar (e){
    const item = [descricao]
    console.log(item)    
  }

  function editar (item){
    setId(item.id)
    setDescricao(item.descricao)    
  }

  function deletar (item){
    console.log(item) 

  }

function carregarDados(){
  
}

  const dados = [
    {
      'id': 1,
      'descricao': 'Calçados',
      'created_at': '2023-08-31 00:00:00',
      'update_at': '2023-08-31 00:00:00',      
    },
    {
      'id': 2,
      'descricao': 'Tenis',
      'created_at': '2023-08-31 00:00:00',
      'update_at': '2023-08-31 00:00:00',      
    },

    
  ]
  
  return (
    <div>
      <div className="col-6">
        <h1>Tipo</h1>
        <div className="d-flex justify-content-center">
          <form onsubmit={salvar}>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição:
              </label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                placeholder="Exemplo: Calçados"
                value={descricao}
                onChange={alterar}
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-success">
                Salvar
              </button>
              <button type="reset" className="btn btn-warning">
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1>Lista</h1>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição</th>
                <th scope="col">Criado</th>
                <th scope="col">Atualizado</th>
                <th scope="col">Opções</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item)=>(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.descricao}</td>
                  <td>{item.created_at}</td>
                  <td>{item.update_at}</td>
                  <div className="btn-group" role="group">
                    <button onClick={() => editar (item)} className="btn btn-primary">Editar</button>
                    <button onClick={() => deletar(item)} className="btn btn-danger">Excluir</button>
                  </div>
                </tr>
              ))}
            </tbody>
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
      </div>
    </div>
  );
}

export default Tipo;