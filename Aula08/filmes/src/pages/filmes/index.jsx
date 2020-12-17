import React, { Component } from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/jumbotron';

class Filmes extends Component {

    // utilizamos o método construtor para setar o que iremos fazer
    constructor(){
        // sintaxe do react para uzar o método construtor
        super();

        // O estado são todas as variaveis que podem sofrer mudanças nos components
        this.state = {
            url : "https://5f7f7f14d6aabe00166f064d.mockapi.io/api/filmes",
            filmes : [],
            id : '',
            nome : '',
            categoria : '',
            anoLancamento : ''
        }

    }

    componentDidMount(){
        this.listar();
    }

    listar() {
        fetch(this.state.url,{
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            this.setState({filmes : dados});
            console.log('filmes state:' + this.state.filmes);
        })
        // mostra o erro no console
        .catch(err => console.error(err));
    }

    remover(event) {
        event.preventDefalut();

        console.log(event.target.value);

        fetch(this.state.url,{
            method : 'DELETE'
        })
        .then(response => response.json())
        .then(dados => {
            alert('Filme remolvido');
            this.listar();
        })
        .catch(err => console.error(err));

    }

    editar(event) {
        // impede de recarregar a página
        event.preventDefalut();

        // mostra no console o valor do event que é pego no input
        console.log(event.target.value);

        // chamada da API
        fetch(this.state.url + '/' + event.target.value)

        // then = promise do fetch, onde tratamos as o que está vindo da "API", é como se fosse o que o Postman faz   
        .then(response => response.json())
        .then(dado => {
           this.setState({id : dado.id});
           this.setState({nome : dado.nome});
           this.setState({categoria : dado.categoria});
           this.setState({anoLancamento : dado.anoLancamento});
        })
     
        .catch(err => console.error(err));

    } 

    salvar() {
        alert(ok);
    }

   
// renderiza o menu e o formulário
    render() {

        return(
            <div>

            <Menu/>
            <Jumbotron titulo='Filmes' descricao='Cadastre seus Filmes'/>

                <div className='container'>
                    <div className='bd-example'>
                    <form id="formFilme" onSubmit={this.Salvar()}>
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
                    <tbody id="tabela-lista-corpo">
                        {
                            this.state.filmes.map(item => {
                                return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.anoLancamento}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" value={item.id} onClick={this.remover.bind(this)}>Remover</button>
                                        <button type="button" className="btn btn-warning" value={item.id} onClick={this.editar.bind(this)}>Editar</button>
                                    </td>
                                </tr>
                                )
                            })    
                        }
                    </tbody>
                    </table>
                    </div>
                </div>
            
            </div>
            
        )
    }

}



export default Filmes;