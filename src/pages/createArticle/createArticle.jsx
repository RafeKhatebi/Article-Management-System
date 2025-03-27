import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Styled from "./CreateArticle.module.css"
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import axios from "axios";

function CreateArticle() {
    const [article, setArticle] = useState({
        title: "",
        date: "",
        readingTime: "",
        author: "",
        message: "",
        imageURL: "",
    })
    const handleChangeArticle = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            [e.target.value]: e.target.value
        }));
    };
    const handleChangeArticleMessage = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            message: e.target.value,
        }));
    };
    const handleCreateNewArticle = () => {
        axios.post("http://localhost:3000/articles", {
            id: 9,
            imageUrl: article.imageURL,
            title: article.title,
            readingTime: article.readingTime,
            date: article.date,
            author: article.author,
            content: article.message,
        })


    }

    return (
        <>
            <Navbar title="رامش بلاگ" />
            <div className={Styled.CreateArticlePage}>
                <div className="container">
                    <h1>ساخت مقاله جدید</h1>
                    <Input label="عنوان" name="title" type="text" handleChange={handleChangeArticle} />
                    <Input label="تاریخ" name="date" type="date" handleChange={handleChangeArticle} />
                    <Input label="مدت زمان خواندن" type="text" name="readingTime" handleChange={handleChangeArticle} />
                    <Input label="نویسنده" name="author" type="text" handleChange={handleChangeArticle} />
                    <Input label="آدرس عکس" name="imageURL" type="text" handleChange={handleChangeArticle} />
                    <Textarea label="متن" handleChange={handleChangeArticleMessage} />
                    <div className={Styled.buttonWrapper}>
                        <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CreateArticle;