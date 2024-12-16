import React, { useState } from "react";
import ArticleItem from "./ArticleItem";
import articlesData from "../data.json";

const ArticlesList = () => {
  const [categorie, setCategorie] = useState("");

  const articlesFiltres = categorie
    ? articlesData.filter((article) => article.categorie === categorie)
    : articlesData;

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-center mb-5">Liste des Articles</h2>
      <div className="mb-5">
        <label htmlFor="filter" className="block text-gray-700 font-semibold mb-2">
          Filtrer par catégorie :
        </label>
        <select
          id="filter"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="border p-2 rounded w-full max-w-md"
        >
          <option value="">Toutes</option>
          <option value="Programmation">Programmation</option>
          <option value="Web">Web</option>
          <option value="Backend">Backend</option>
          <option value="Majaalis">Majaalis</option>
        </select>
      </div>
      {articlesFiltres.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
