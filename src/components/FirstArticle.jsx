import './FirstArticle.modules.css'
import Row from './Row';
import Author from './Author'

function FirstArticle({cover,category,publishedAt,title,shortDescription}){
    let auteur = {
        cover : 'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4ccdd76cd86c15adb398a8_800377336032_b3704d9974a7c5c806ee_512-p-500.jpeg' ,
        nameAuthor : 'Bruno Teixeira',
        proffession : 'Lead Product Owner',
      }
    return (
    
    <div className="FirstArticle">
        
        <Row>
        <div className="cover">
            <img src={cover} alt={`image of ${title}`} /></div>
            
        <div>
        <div className="details">
            <span>{category.toUpperCase()}</span>
            <span>{publishedAt}</span>
        </div>
        <br/>
        <h2 className="title">
            {title}
        </h2>
        
        <p className='description'>
            {shortDescription}
        </p>
        <br/>
        
        <div>
        <Author {...auteur}/>
        </div>
        
    </div>
    
    </Row>
    </div>
    
      
    )

}

export default FirstArticle;