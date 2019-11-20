export const login = ({ username }) => {
    return {
        type: 'LOGIN',
        value: username
    }
}