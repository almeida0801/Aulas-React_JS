import React, { Component } from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/jumbotron';

class Filmes extends Component {

    render() {
        return(
            <div>
            <Menu/>
            <Jumbotron titulo='Filmes' descricao='Cadastre seus Filmes'/>

                <div className='container'>
                    <div className='bd-example'>
                    <form id="formFilme" onSubmit={this.salvar.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control" value={this.state.nome} onChange={e => { this.setState({nome : e.target.value})}} id="nome" aria-describedby="nome" placeholder="Informe o Nome"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <input type="text" className="form-control" value={this.state.categoria} onChange={e => { this.setState({categoria : e.target.value})}} id="categoria" placeholder="Informe a Categoria"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ano">Ano de Lançamento</label>
                                <input type="text" className="form-control small" value={this.state.lancamento} onChange={e => { this.setState({lancamento : e.target.value})}} id="lancamento" placeholder="Informe o Ano de Lançamento"/>
                            </div>
                            <button type="button" onClick={this.limparCampos.bind(this)} className="btn btn-secondary">Cancelar</button>
                            <button type="submit"  className="btn btn-success">Salvar</button>
                        </form>                       


                    <table class="table" style={{marginTop: '40px'}}>

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Ano Lançamento</th>
                            <th scope="col">Ações</th>
                            <th scope="col"><button type="reset" class="btn"></button></th>
                        </tr>
                    </thead>
                    <tbody id="tabela-lista-corpo"></tbody>
                    </table>
                    </div>
                </div>
            
            </div>
            
        )
    }
}



export default Filmes;