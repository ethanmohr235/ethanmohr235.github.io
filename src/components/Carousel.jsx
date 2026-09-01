import { useState } from "react";

export default function Carousel({ slides, onEnlarge }) {
  const [index, setIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const slide = slides[index];

  return (
    <div className="carousel" onKeyDown={onKeyDown}>
      <div className="carousel-viewport">
        {slides.length > 1 && (
          <button className="carousel-nav prev" onClick={prev} aria-label="Previous screenshot">
            &lsaquo;
          </button>
        )}

        <button
          className="carousel-slide-button"
          onClick={() => onEnlarge(slide)}
          aria-label={`Enlarge: ${slide.alt}`}
        >
          <img src={slide.src} alt={slide.alt} />
        </button>

        {slides.length > 1 && (
          <button className="carousel-nav next" onClick={next} aria-label="Next screenshot">
            &rsaquo;
          </button>
        )}
      </div>

      {slide.caption && <div className="carousel-caption">{slide.caption}</div>}

      {slides.length > 1 && (
        <div className="carousel-dots">
          {slides.map((s, i) => (
            <button
              key={s.src}
              className={`carousel-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}: ${s.caption || s.alt}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
