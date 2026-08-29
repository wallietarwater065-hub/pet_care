"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "接待等候区",
    copy: "到店先缓一缓，主人沟通护理需求，宠物也能熟悉气味和声音。",
    src: "/assets/shop-environment-reception.png",
    alt: "高端宠物洗护店接待等候区，木质前台、产品陈列和柔软座椅"
  },
  {
    title: "透明洗护区",
    copy: "分区洗护、器具归位、全程可视，干净这件事不用靠想象。",
    src: "/assets/shop-environment-wash.png",
    alt: "透明玻璃分隔的宠物洗护区，专业洗浴台、毛巾和护理工具整齐陈列"
  },
  {
    title: "吹护修剪区",
    copy: "低压吹整和造型修剪分开进行，给敏感宠物更多停顿空间。",
    src: "/assets/shop-environment-styling.png",
    alt: "宠物吹护修剪区，低刺激吹护舱、修剪台和专业工具墙"
  }
];

export function EnvironmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="environment-shell">
      <div className="environment-stage">
        {slides.map((slide, index) => (
          <figure
            className={`environment-slide ${index === activeIndex ? "is-active" : ""}`}
            key={slide.title}
          >
            <img src={slide.src} alt={slide.alt} />
          </figure>
        ))}
        <div className="environment-caption" aria-live="polite">
          <div>
            <h3>{slides[activeIndex].title}</h3>
            <p>{slides[activeIndex].copy}</p>
          </div>
        </div>
      </div>

      <aside className="environment-panel">
        <div>
          <p className="eyebrow">店内环境</p>
          <h2>把紧张感留在门外</h2>
          <p>接待、洗护、吹整分区处理，玻璃隔断让过程可视，动线也更安静。</p>
        </div>
        <div className="environment-controls" aria-label="店内环境轮播控制">
          <div className="environment-arrows">
            <button className="environment-btn" type="button" onClick={() => showSlide(activeIndex - 1)} aria-label="上一张">
              ‹
            </button>
            <button className="environment-btn" type="button" onClick={() => showSlide(activeIndex + 1)} aria-label="下一张">
              ›
            </button>
          </div>
          <div className="environment-dots" role="tablist" aria-label="选择店内环境图片">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  className={`environment-dot ${isActive ? "is-active" : ""}`}
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-label={slide.title}
                  aria-selected={isActive}
                  onClick={() => showSlide(index)}
                />
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
