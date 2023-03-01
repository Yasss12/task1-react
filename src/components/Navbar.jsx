import logo from '../assets/logo.png'
import Button from './Button';
import Row from './Row';
import './Navbar.modules.css';

function Navbar (){
   
    
    return (
        <div className ="Navbar">
            <Row >
             <div className ="image">
             <img src={logo} alt="logo"/>
             </div>
            <Row >
                <div>Work</div>
                <div>Approach</div>
                <div>Culture</div>
                <div>Careers</div>
                <div>Blog</div>
            </Row>
            <Button>Get in touch</Button>
            </Row>
        </div>
    )
}


export default Navbar;