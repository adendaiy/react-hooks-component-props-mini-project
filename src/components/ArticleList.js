
import Article from "./Article"


function ArticleList({posts}){
  const postElement = posts.map(function (post){
    return <Article title={post.title} date={post.date} preview={post.preview} key={post.id} />
  })
    return(
<main>

{postElement}
</main>
    )
}

export default ArticleList;

