import React from 'react'
import banner2 from '../assets/banner2.jpeg';
function Login() {
    return (
        <div className="hero min-h-screen bg-base-200 "  style={{ backgroundImage: `url(${banner2})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold font-serif">Registrate!</h1>
                    <p className="py-6 text-3xl font-serif"> Bienvenido a nuestra clinica!,Aqui Nos preocupamos por ti y tu sonrisa</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-10">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nombre</span>
                            </label>
                            <input type="text" placeholder="Nombre" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contraseña</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registrarme</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login