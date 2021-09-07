import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid"
import { Link } from "react-router-dom";


const baseUrl = "https://git.heroku.com/bendiciones.git/usuario";

export default class Registro extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            form: {
                id: '',
                primer_apellido: '',
                segundo_apellido: '',
                nombre: '',
                username: '',
                password: ''
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

    
    handleSubmit = (e) => {
        e.preventDefault()
        this.RegistroUsuario()
    }

    RegistroUsuario = async () => {
        await axios.post(baseUrl, {
            id: uuid,
            primer_apellido: this.state.form.primer_apellido,
            segundo_apellido: this.state.form.segundo_apellido,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password)
        }).then(response => {
            alert('Usuario Registrado')
        }).catch(error => {
            console.log(error.message);
        })
    }

    render() {
        return(
            <div className="Registro py-5 container text-center">
                <form className="form-entrar" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        ¡Registrate con nosotros!
                    </h1>
                <div className="fadeIn first ">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS689Xb1GJwNGzZl9KR7CTRKAZFaXt1060H32xPbb8hw_NXNpJ409Sl-aLnPsJQUfKJnYEV_KndttR1bbUKS_f7DGE3OP59H1Y&usqp=CAU&ec=45725305" 
                    id="icon" 
                    alt="User Icon" 
                    width="100px"/>
                    <h3>Por Favor Crea una Cuenta</h3>
                </div>

                    <input
                        type="text"
                        placeholder="Primer Apellido"
                        name="primer_apellido"
                        className="form-control"
                        autoComplete="off"
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Segundo Apellido"
                        name="segundo_apellido"
                        className="form-control"
                        autoComplete="off"
                        onChange={this.handleChange}
                        required=""

                    />

                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="nombre"
                        required=""
                        onChange={this.handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required=""
                        onChange={this.handleChange}
                    />

                    <input
                        type="Password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required=""
                        onChange={this.handleChange}
                    />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-1"
                    >
                        Register
                    </button>
                    <br />
                    <Link
                        to="/"
                        className="link"
                    >
                        Already registered?
                    </Link>
    
                </form>
            </div>
        )
    }
}