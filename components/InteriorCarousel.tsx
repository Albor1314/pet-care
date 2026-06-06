"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/interior-reception.png",
    alt: "高端宠物洗护店接待等候区",
    label: "Reception Lounge",
    title: "接待等候区",
    body: "石材、木饰面和柔和灯带营造安静的到店第一印象，主人等待时也能感到舒适。",
  },
  {
    src: "/assets/interior-grooming.png",
    alt: "高端宠物洗护店洗护操作区",
    label: "Grooming Suite",
    title: "洗护操作区",
    body: "独立浴槽、专业护理台、低噪烘干设备和整洁收纳，让护理过程更安全可控。",
  },
  {
    src: "/assets/interior-cat-room.png",
    alt: "高端宠物洗护店猫咪安静护理间",
    label: "Quiet Cat Room",
    title: "猫咪安静护理间",
    body: "独立猫咪护理与休息空间，使用柔和灯光和包裹感休息舱，减少陌生环境压力。",
  },
];

export default function InteriorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <div className="carousel" aria-label="店内环境轮播图">
      <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide) => (
          <article className="environment-slide" key={slide.title}>
            <img src={slide.src} alt={slide.alt} />
            <div className="slide-caption">
              <span>{slide.label}</span>
              <h3>{slide.title}</h3>
              <p>{slide.body}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel-control prev"
        type="button"
        aria-label="上一张店内环境图"
        onClick={() => showSlide(activeIndex - 1)}
      >
        ‹
      </button>
      <button
        className="carousel-control next"
        type="button"
        aria-label="下一张店内环境图"
        onClick={() => showSlide(activeIndex + 1)}
      >
        ›
      </button>
      <div className="carousel-dots" aria-label="店内环境轮播指示器">
        {slides.map((slide, index) => (
          <button
            className={`carousel-dot${activeIndex === index ? " active" : ""}`}
            type="button"
            aria-label={`查看${slide.title}`}
            key={slide.title}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
