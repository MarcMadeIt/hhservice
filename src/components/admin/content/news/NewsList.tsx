import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaPen, FaTrash } from "react-icons/fa6";
import { getAllNews, deleteNews } from "@/lib/server/actions";
import UpdateNews from "./updateNews/UpdateNews";

interface NewsListProps {
  view: "cards" | "list";
  page: number;
  setTotal: (total: number) => void;
  onEditNews: (newsId: number) => void;
}

interface NewsItem {
  id: number;
  title: string;
  desc: string | null;
  formType: "normal" | "beforeAfter";
  image: string | null;
  imageBefore: string | null;
  imageAfter: string | null;
}

const FALLBACK_IMAGE = "/demo.webp";

const NewsList = ({ view, page, setTotal, onEditNews }: NewsListProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [editingNewsId, setEditingNewsId] = useState<number | null>(null);
  const [deletingNewsId, setDeletingNewsId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const { news, total } = await getAllNews(page);
      setNewsItems(news || []);
      setTotal(total);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page, setTotal]);

  const truncateDescription = (
    description: string | null,
    maxLength: number
  ) => {
    if (!description || description.length <= maxLength)
      return description || "";
    return description.substring(0, maxLength) + "...";
  };

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + "...";
  };

  const handleNewsUpdated = () => {
    setEditingNewsId(null);
    fetchNews();
  };

  const handleDelete = async () => {
    if (deletingNewsId !== null) {
      try {
        await deleteNews(deletingNewsId);
        setDeletingNewsId(null);
        setIsModalOpen(false);
        fetchNews();
      } catch (error) {
        console.error("Failed to delete news:", error);
      }
    }
  };

  const closeModal = () => {
    setDeletingNewsId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      {loading ? (
        <div className="flex justify-center gap-3 items-center">
          <span className="loading loading-spinner loading-md"></span>
          Indhenter data...
        </div>
      ) : editingNewsId ? (
        <UpdateNews newsId={editingNewsId} onNewsUpdated={handleNewsUpdated} />
      ) : (
        <>
          {view === "cards" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="card card-compact shadow-lg rounded-md"
                >
                  <figure>
                    {item.formType === "beforeAfter" ? (
                      <div className="diff aspect-[16/9]">
                        <div className="diff-item-1">
                          <Image
                            src={item.imageBefore || FALLBACK_IMAGE}
                            alt={`${item.title} før`}
                            width={500}
                            height={300}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="diff-item-2">
                          <Image
                            src={item.imageAfter || FALLBACK_IMAGE}
                            alt={`${item.title} efter`}
                            width={500}
                            height={300}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="diff-resizer"></div>
                      </div>
                    ) : (
                      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                        <Image
                          src={item.image || FALLBACK_IMAGE}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    )}
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-lg">{item.title}</h2>
                    <p className="text-xs">
                      {truncateDescription(item.desc, 100)}
                    </p>
                    <div className="card-actions justify-end mt-2">
                      <button
                        className="btn btn-sm"
                        onClick={() => onEditNews(item.id)}
                      >
                        <FaPen />
                        Rediger
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          setDeletingNewsId(item.id);
                          setIsModalOpen(true);
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {newsItems.map((item) => (
                <React.Fragment key={item.id}>
                  <li>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <div className="relative w-12 h-10 rounded-md overflow-hidden">
                          <Image
                            src={
                              item.formType === "beforeAfter"
                                ? item.imageBefore ||
                                  item.imageAfter ||
                                  FALLBACK_IMAGE
                                : item.image || FALLBACK_IMAGE
                            }
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <h3 className="font-semibold text-xs hidden sm:block">
                          {item.title}
                        </h3>
                        <h3 className="font-semibold text-xs block sm:hidden">
                          {truncateTitle(item.title, 20)}
                        </h3>
                      </div>
                      <div className="flex gap-5 md:gap-2">
                        <button
                          className="btn btn-sm"
                          onClick={() => onEditNews(item.id)}
                        >
                          <FaPen />
                          <span className="md:flex hidden"> Rediger </span>
                        </button>
                        <button
                          className="btn btn-sm"
                          onClick={() => {
                            setDeletingNewsId(item.id);
                            setIsModalOpen(true);
                          }}
                        >
                          <FaTrash />
                          <span className="md:flex hidden"> Slet </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <hr className="border-[1px] rounded-lg border-base-200" />
                </React.Fragment>
              ))}
            </ul>
          )}
        </>
      )}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Bekræft sletning</h3>
            <p className="py-4">
              Er du sikker på, at du vil slette denne nyhed?
            </p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Annuller
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Slet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsList;
