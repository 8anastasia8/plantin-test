import Image from "next/image";
import new_badge from "../public/badge.svg";
import {newArticles} from "../data.js";

export default function NewArticleBlog({ searchTerm }) {

  const filteredArticles = newArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-[48px]">
      <div className={`${filteredArticles.length > 0 ? "relative mb-[16px] w-[100%] h-[100%]" : "hidden"}`}>
        <Image src={new_badge} alt="new" className="rounded-l-[4px]"></Image>
        <p className="absolute top-[20%] ml-[20px] text-[#fff] text-[14px] font-[600]">
          New
        </p>
      </div>

        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="flex flex-col md:flex-row">
              <div className="flex md:w-1/2 w-full sm:w-[30%]">
                <img src={article.image} alt="article image" className="w-[100%]"/>
              </div>
              <div className="md:w-1/2 w-full p-8 pt-0 max-md:p-2 max-md:pt-4 items-top">
                <span className="text-[#ADB8C8] text-[16px]">
                {article.date} &#183; {article.timeToRead} min read
                </span>
                <h2 className="text-[48px] max-lg:text-[24px] font-bold mt-2">
                {article.title}
                </h2>
                <p className="text-[16px] text-[#78787A] mt-2">
                  {article.content}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center pt-4 text-gray-500">No articles found.</p>
        )}
    </div>
  );
}
