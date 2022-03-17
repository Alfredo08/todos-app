import React from 'react';
import Todo from './Componentes/Todo/Todo';
import './App.css';

class App extends React.Component{
  constructor( props ){
    super( props )
    this.state = {
      usuario : 'alex88',
      nombre : 'Alexander',
      apellido : 'Martinez',
      edad : 25,
      todos : [{
        nombre : 'Aprender componentes de tipo clase.',
        status : 'En progreso',
        id : 123
      },
      {
        nombre : 'Aprender eventos en React.',
        status : 'En progreso',
        id : 456
      }] 
    }
  }

  actualizarTodo = ( idTodo, statusNuevo ) => {
    let todosActualizados = this.state.todos;
    
    for( let i = 0; i < todosActualizados.length; i ++ ){
      if( todosActualizados[i].id === idTodo ){
        todosActualizados[i].status = statusNuevo;
      }
    }

    this.setState({
      todos : todosActualizados
    });
  }

  cambiarDatos = () => {
    this.setState({
      nombre : 'Alex',
      apellido : 'Garcia',
      edad : this.state.edad + 1
    });
  }

  componentDidMount(){
    console.log( "Esto se ejecuta después del cargado inicial, y solo se ejecuta una vez" );
  }
  
  render(){
    const {nombre, apellido, todos} = this.state;
    return(
      <div>
        <h1>
          {this.props.titulo}
        </h1>
        <h2>
          Bienvenido de vuelta {nombre} {apellido}. Edad {this.state.edad}
        </h2>
        <h3>
          Lista de pendientes
        </h3>
        <div className='lista_todos'>
          {
            todos.map( (todo, indice) => {
              return ( 
                <Todo todo={todo} actualizarTodo={this.actualizarTodo} key={'todo_' + indice}>
                  <p> Elemento enviado desde el componente padre. </p>
                </Todo>
              );
            })
          }
        </div>
        <button onClick={() => this.cambiarDatos()} >
          Cambiar nombre a Alex
        </button>
      </div>
    );
  }
}

export default App;

