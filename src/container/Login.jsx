import React, { Component } from 'react';
import { Button } from '@material-ui/core/Button';
import axios from 'axios';
import md5 from 'md5';
import { Link } from 'react-router-dom';



const baseUrl = "https://git.heroku.com/bendiciones.git/usuario";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                email: "username",
                password: "password"
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    iniciarSesion = async () => {
        await axios.get(baseUrl, { params: { username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response => {
            return response.data;
        })
        .then(response => {
            if (response.length > 0) {
                let respuesta = response[0];
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.primer_apellido}`);
            } else {
                alert('El usuario o la contraseña son incorrecta');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return(
            <div>
                <form className="form-entrar">
                <h1 className="input1">
                    Iniciar Sesion
                </h1>

                <input 
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}
                />

                <input
                    type="Password"
                    id="inputPasword"
                    className="form-control mt-1"
                    placeholder="Contraseña"
                    required=""
                    onChange={this.handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block" width="150"
                    onClick={() => this.iniciarSesion()}
                >
                    Entrar
                </button>

                <div className="">
                    <p>Iniciar sesión con sus redes sociales</p>

                    <div className="google-btn btn-primary">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Entrar con Google</b>
                            </p>
                        </div>
                    </div>
                    <Link
                    to="/registro"
                    className="Link"
                   >
                    Create new account
                </Link>
                </form>
            </div>
        )
    }
}

