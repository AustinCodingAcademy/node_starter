import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../components/Login'
import { login } from '../redux/actions'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)