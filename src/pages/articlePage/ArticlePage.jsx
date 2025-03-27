import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import computer from "./../../assets/img/computer.png";
import Styled from "./articlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
function ArticlePage() {
    const [article, setArticle] = useState({})
    const params = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/articles/${params.id}`).then(

            (result) => {
                console.log(result)
                setArticle(result.data)
            }
        )
            .catch((error) => {
                console.log(error);

            })
    }, [])

    return (
        <>
        
            <Navbar title="رامش بلاگ" />
            <div className="container">
                <h1>ArticlePage</h1>
                <div className="container">
                    <h1>{article.title}</h1>
                    <div className={Styled.articleInfo}>
                        <span>Date:{article.date}</span>
                        <span>Author:{article.author}</span>
                        <span>{article.readingTime}</span>
                    </div>
                    <img src={article.imageUrl} alt="" />
                    <p>{article.content}</p>
                </div>
            </div>
            <Footer />
        </>

    )

}
export default ArticlePage;