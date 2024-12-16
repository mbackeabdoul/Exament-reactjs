import React from "react";
const ArticleItem = ({ article }) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-4">
      <h3 className="text-xl font-bold">{article.titre}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Catégorie : </span>{article.categorie}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Date : </span>{article.date}
      </p>
      <p className="text-gray-700 mt-2">{article.contenu}</p>
    </div>
  );
};

export default ArticleItem;
