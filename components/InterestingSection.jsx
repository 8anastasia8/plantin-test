import { interestingArticles } from "../data.js";
import React from "react";
import PromoSection from "./PromoSection.jsx";

export default function InterestingSection({ searchTerm }) {
  const filteredArticles = interestingArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-[56px]">
      <div className="w-full h-[1px] bg-[#C4C4C4] mb-4"></div>
      <p className="text-[#91A0B6] text-[14px] font-[700] uppercase mb-4">
        Interesting
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <React.Fragment key={article.id}>
              <div>
                <img
                  src={article.image}
                  alt="article image"
                  className="w-[100%]"
                />
                <div className="text-[#ADB8C8] text-[16px] mt-4 mb-2">
                  {article.date} &#183; {article.timeToRead} min read
                </div>
                <h2 className="text-[24px] font-[700]">{article.title}</h2>
                <p className="text-4 text-[#78787A]">{article.content}</p>
              </div>

              {/* Вставляем баннер после третьей карточки (index === 2, так как индексы начинаются с 0) */}
              {index === 2 && (
                <div className="col-span-1 md:col-span-3">
                  <PromoSection />
                </div>
              )}
            </React.Fragment>
          ))
        ) : (
          <div className="col-span-1 md:col-span-3">
            <p className="text-center col-span-3 text-gray-500">
              No articles found.
            </p>
            <PromoSection />
          </div>
        )}
      </div>
    </div>
  );
}
