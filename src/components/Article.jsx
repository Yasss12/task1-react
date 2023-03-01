import './Article.css';


function Article({cover,category,publishedAt,title,shortDescription}){

    return (
    <div className="Article">
        <div className="cover"><img src={cover} alt={`image of ${title}`} /></div>
        <br/>
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
    </div>)

}

export default Article;