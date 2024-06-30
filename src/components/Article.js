

function Article({preview,title,minutes,date= "January 1, 1970"}){
    return(
<article>
<h3>{title}</h3>
<small>{date}</small>
<p>{preview}</p>
<p>{minutes}</p>
</article>

    )
}

export default Article;
