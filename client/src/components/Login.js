import React, { useState } from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import styled from 'styled-components'

const StyledForm = styled.form`
    margin: 50px;
    display: flex;
    flex-direction: column;
`

const Login = (props) => {
    console.log(props)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault()
        props.login({ username, password })
    }

    return (
        <Container maxWidth="md">
            <StyledForm onSubmit={submit}>
                <TextField
                    variant="outlined"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
                <TextField
                    variant="outlined"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >Login</Button>
            </StyledForm>
        </Container>
    )
}

export default Login