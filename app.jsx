"use strict";

class App extends React.Component {

      constructor(props) {
            super(props);
            this.arrEstudiantes = [];
            this.state = {
                  estudiantes : [],
                  estudianteMostrar : null
            }

      }
      agregarEstudiante(){
            console.log("hice click");
            let userNombre = prompt(`¿Cuál es el nombre del estudiante?`);
            let userPuntosTecnicos = parseInt(prompt(`Ingresa el porcentaje técnico`));
            let userPuntosHSE = parseInt(prompt(`Ingresa el porcentaje de habilidades socio-emocionales`));
            let promedio = parseInt(userPuntosTecnicos + userPuntosHSE) / 2;
            let userEstado = 'Activo';

            let estudiante = {
                  nombre: userNombre.charAt(0).toUpperCase() + userNombre.slice(1),
                  puntosTecnicos: userPuntosTecnicos,
                  puntosHSE: userPuntosHSE,
                  estado: userEstado,
                  promedio: promedio
            };
                  this.setState({
                        estudiantes : [],
                        estudianteMostrar : estudiante
                  });

              this.arrEstudiantes.push(estudiante);
              console.log(this.arrEstudiantes);
      }
      mostrarAgregado(estudiante){
            if(estudiante != null){
                  return(
                        <div className="row">
                              <div className="col m12">
                              <div className="card teal grey darken-1">
                              <div className="card-content white-text">
                              <p><strong>Nombre:</strong> { estudiante.nombre} </p>
                              <p><strong>Puntos Técnicos:</strong> { estudiante.puntosTecnicos} </p>
                              <p><strong>Puntos HSE:</strong> { estudiante.puntosHSE} </p>
                              <p><strong>Estado:</strong> { estudiante.estado} </p>
                              </div>
                              </div>
                              </div>
                        </div>
                  );
            }
      }
      mostrarTodos(){
            this.setState({
                  estudiantes : this.arrEstudiantes,
                  estudianteMostrar : null
            });   
      }
      mostrarLista(estudiantes){
            console.log(this.state.estudiantes);
            return (
                  estudiantes.map((estudiante, index)=>{
                        return(
                              <div key={index} className="row">
                              <div className="col m12">
                              <div className="card teal grey darken-1">
                              <div className="card-content white-text">
                              <p><strong>Nombre:</strong> { estudiante.nombre} </p>
                              <p><strong>Puntos Técnicos:</strong> { estudiante.puntosTecnicos} </p>
                              <p><strong>Puntos HSE:</strong> { estudiante.puntosHSE} </p>
                              <p><strong>Estado:</strong> { estudiante.estado} </p>
                              </div>
                              </div>
                              </div>
                        </div>
                        );
                  })
            );
      }
      actualizar(){
            console.log("actualizar")
      }           
      empleables(estudiantes){
            console.log("empleables");

      }

      render(){
            return(
                  <div>
                        <nav>
                              <div className="nav-wrapper yellow darken-2">
                                    <a href="#" className="brand-logo ">Registro de Estudiantes</a>
                              </div>
                        </nav><br/>
                        <section className="container">
                              <div className="row">
                                    <div className="col s2 offset-s1">
                                          <button onClick={(e)=>{this.agregarEstudiante()}} id="agregar" className="btn-large grey darken-3">Agregar</button>
                                    </div>
                                    <div className="col s2 offset-s1">
                                          <button onClick={(e) =>{this.mostrarTodos()}} id="mostrar" className="btn-large grey darken-3">Mostrar</button>
                                    </div>
                                    <div className="col s2 offset-s1">
                                          <button onClick={(e)=>{this.actualizar()}} id="top-tecnico" className="btn-large grey darken-3">Actualizar</button>
                                    </div>
                                    <div className="offset-s1 col s2 ">
                                          <button onClick={(e)=>{this.empleables()}} id="top-hse" className="btn-large grey darken-3">Empleables</button>
                                    </div>
                              </div>
                        </section>
                        <section id="resultado">
                              <hr/>
                              <h4 className="center-align">Resultado</h4>
                              <div>{this.mostrarAgregado(this.state.estudianteMostrar)}</div>
                              <div>{this.mostrarLista(this.state.estudiantes)}</div>
                        </section>
                  </div>
            );
      }
}


ReactDOM.render( <App /> , document.getElementById("container"));