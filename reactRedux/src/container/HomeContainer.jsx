import Home from '../components/Home';
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/action'

const mapDispatchToProps = dispatch=>({
    addToCart: (product)=>dispatch(addToCart(product))
})

const mapStateToProps = state=>({
    cart: state
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);


// export default Home;