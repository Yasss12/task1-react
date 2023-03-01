import './Author.modules.css'
import Row from './Row.jsx';

function Author( {cover,nameAuthor,proffession}){
    return(
        <div className='Author'>
        <Row>
        <div className="cover">
            <img src={cover} alt={`image of ${nameAuthor}`} />
        </div>
            
        <div>
        <p className="name">
            {nameAuthor}
        </p>
        <br/>
        <p className='proffession'>
            {proffession}
        </p>
        </div>
    
       </Row> 


        </div>

    )
}
export default Author;
