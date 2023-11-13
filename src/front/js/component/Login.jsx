import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"
import { Navigate, useNavigate } from "react-router-dom"


const Login = () => {
    const { actions } = useContext(Context)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        let result = await actions.login(user)
        console.log(result)
        if (result == 400) {
            alert("Bad credentials ")
        }
        if (result == 200){
            navigate("/private")
        }
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />

                    <button>Login</button>
                </form>
            </div>

        </>
    )
}

export default Login