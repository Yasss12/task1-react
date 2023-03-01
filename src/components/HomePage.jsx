import Article from './Article';
import Button from './Button'
import Row from './Row';
import FirstArticle from './FirstArticle';
import Author from './Author';



function HomePage() {



  let article0 = {
    cover: 'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f50c14b59f4d922fb2b7901_USA-RoninTeam-Bridge.JPG',
    category: 'PRODUCT',
    publishedAt: 'July 24, 2020',
    title: 'Interview — What its like to work remotely in big-sized product development?',
    shortDescription: 'People say that developing products isnt easy. Neither it is to build long-distance relationships. But, how about doing both, simultaneously?'
} 

    let article1 = {
        cover: 'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4d036d76f2090825900432_Blog%20_%20Cover%20_%20Native%20vs%20Hybrid-p-2000.png',
        category: 'Development',
        publishedAt: 'July 2, 2020',
        title: 'Hybrid vs. Native — Here is how you can choose one over the other…',
        shortDescription: 'There is no denying it, hybrid mobile development is booming and becoming the main option when considering developing a mobile application due to the lower costs and faster development time. But what are the implications of going for a hybrid approach instead of a native one? What are the advantages and disadvantages of choosing one of the approaches?'
    } 
    let article2 = {
      cover: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*Hzi3W5EkcahgOzYS_0EImw.png',
      category: 'Development',
      publishedAt: 'July 2, 2020',
      title: 'From monolithic to headless: how and why you should adapt your WordPress stackt',
      shortDescription: 'Every dynamic website consists of two main parts: the backend and the frontend. The backend, which in marketing websites is commonly a Content Management System (CMS), allows the website owners to manage as much content as needed without handling code changes. The frontend displays all of that content for the website users'
  } 
    return ( 
      <div>
      <Row>
       <FirstArticle {...article0}/>
          
        </Row>
        <br/>
        <br/>
        <br/>
      
        <Row>
          <Article {...article1}/>
          <Article {...article2}/>
          
        </Row>
        </div>
    )
}


export default HomePage;
