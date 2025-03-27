import { useEffect, useState } from "react";
import styles from "./home.module.css"; // Corrected import for CSS module
import Navbar from "../../components/navbar/Navbar";
import Article from "../../components/article/Article";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // API Call: We do API call here.
        axios
            .get("http://localhost:3000/articles")
            .then(result => {
                setArticles(result.data);
                setLoading(false); // Set loading to false after fetching data
            })
            .catch((error) => {
                console.error(error);
                setError("Failed to load articles."); // Set error message
                setLoading(false); // Set loading to false even on error
            });
    }, []);

    return (
        <div className={styles.homeWrapper}>
            <Navbar title="رامش بلاگ" />
            <div className="container">
                <h2>مقالات جدید</h2>
                {loading && <p>در حال بارگذاری مقالات...</p>} {/* Loading message */}
                {error && <p className="error">{error}</p>} {/* Error message */}
                <div className={styles.articles}>
                    {
                        articles.map((article) => (
                            <Link to={`/article/${article.id}`}>
                                <Article key={article.id} article={article} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;