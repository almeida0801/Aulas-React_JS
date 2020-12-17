import React, { Component } from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/jumbotron';

class Filmes extends Component {

    // utilizamos o método construtor para setar o que iremos fazer
    constructor(){
        // sintaxe do react para usar o método construtor
        super();

        // O estado são todas as variaveis que podem sofrer mudanças nos components
        //Define os valores do State
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

    // método que listas os filmes cadastrados
    listar() {

        fetch(this.state.url,{
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            this.setState({
                filmes : dados,
                id : '',
                nome : '',
                categoria : '',
                anoLancamento : ''});
            console.log('filmes state:' + this.state.filmes);
        })
        // mostra o erro no console
        .catch(err => console.error(err));
    }

    // método que remove os filmes cadastrados
    remover(event) {
        event.preventDefault();

        console.log(event.target.value);

        fetch(this.state.url + '/' + event.target.value,{
            method : 'DELETE'
        })
        .then(response => response.json())
        .then(dados => {
            this.listar();
        })
        .catch(err => console.error(err));

    }
    // event = uma ação para formulários
    // método que altera os filmes cadastrados
    editar(event) {
        // impede de recarregar a página
        event.preventDefault();

        // mostra no console o valor do event que é pego nos elementos de formulário, por exemplo em um input
        console.log(event.target.value);

        // chamada da API
        fetch(this.state.url + '/' + event.target.value)

        // then = promise do fetch, onde tratamos as o que está vindo da "API", é como se fosse o que o Postman faz
        // promise = uma promessa  
        .then(response => response.json())
        .then(dado => {
           this.setState({id : dado.id});
           this.setState({nome : dado.nome});
           this.setState({categoria : dado.categoria});
           this.setState({anoLancamento : dado.anoLancamento});
        })
     
        .catch(err => console.error(err));

    } 

    // método que altera o estado do nome
    setNome(event) {
        event.preventDefault();

        this.setState({nome : event.target.value});
        
        console.log(event.target.value);
    }

    // método que utilizamos para salvar um filme na lista
    salvar(event) {
        event.preventDefault();

            const filme = {
              nome : this.state.nome,
              categoria : this.state.categoria,
              anoLancamento : this.state.anoLancamento,
            }

            //pega o valor do campo filmeId no documento
            let filmeId = this.state.id;
            //if ternário, testa a condição, se é válida ? senão :
            // faz uma condição para ver se vai fazer um 'PUT' ou 'POST'
            let method = (this.state.id === "" ? 'POST' : 'PUT')
            let urlRequest = (this.state.id === "" ? this.state.url : this.state.url + '/' + this.state.id);

            fetch(urlRequest, {
                method : method,
                body : JSON.stringify(filme),
                headers : {
                    'content-type' : 'application/json'
                }
            })
            .then(response => response.json())
            .then(dado => {

              this.listar();
            })

            .catch(err => console.error(err))
    }

    limparCampos(event) {
       this.setState({
           id : '',
           nome : '',
           categoria : '',
           anoLancamento : ''
       }) 
    }


    // renderiza o menu e o formulário
    // o formulário serve para cadastrar filmes
    render() {
        return(
            <div>
            <Menu/>
            <Jumbotron titulo='Filmes' descricao='Cadastre seus Filmes'/>
                
                <div className='container'>
                    <div className='bd-example'>
                    <form id="formFilme" onSubmit={this.salvar.bind(this)}>
                            {/* onChange pega o valor que é digitado no campo do formulário */}
                            {/* campo do formulário onde o usuário passa o nome do filme */}
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control" value={this.state.nome} onChange={e => { this.setState({nome : e.target.value})}} id="nome" aria-describedby="nome" placeholder="Informe o Nome"/>
                            </div>
                            {/* campo do formulário onde o usuário passa a categoria do filme */}
                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <input type="text" className="form-control" value={this.state.categoria} onChange={e => { this.setState({categoria : e.target.value})}} id="categoria" placeholder="Informe a Categoria"/>
                            </div>
                            {/* campo do formulário onde o usuário passa o ano em que o filme foi lançado */}
                            <div className="form-group">
                                <label htmlFor="ano">Ano de Lançamento</label>
                                <input type="text" className="form-control small" value={this.state.anoLancamento} onChange={e => { this.setState({anoLancamento : e.target.value})}} id="lancamento" placeholder="Informe o Ano de Lançamento"/>
                            </div>

                            {/* botão onde o cancelamos o cadastro do filme e limpa os campos automaticamente */}
                            <button type="button" onClick={this.limparCampos.bind(this)} className="btn btn-secondary">Cancelar</button>
                            {/* botão que usamos para salvar o filme na lista */}
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
                            //map serve para mapear os filmes que são cadastrados
                            this.state.filmes.map(item => {
                                return(
                                // a key faz com que o map quando fizer o mapeamento indentifique o que é cada linha
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