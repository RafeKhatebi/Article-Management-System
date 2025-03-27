import React from "react";
import Home from "./pages/home/home"; // Correct path to the component
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/createArticle";
import NotFound from "./pages/notFound/notFound";
function App() {
  return (
    <>
      <Routes>
        {/* Correct the path here to just '/home' or '/' depending on your needs */}
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />}></Route>
      </Routes>
    </>
  );
}

export default App;
// npx json-server --watch data/db.json --port 3000
