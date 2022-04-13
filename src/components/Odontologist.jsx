import React from 'react'

function Odontologist() {

    return (
        <div className="mb-80">
        <h2 className="text-3xl font-bold font-serif m-5 text-center">Lista de odontologos: </h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Matricula</th>
                        
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 className="text-center font-bold">Registrar un odontologo</h2>
    </div>
    
    )
}

export default Odontologist