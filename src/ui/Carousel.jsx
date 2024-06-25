import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const Slideshow = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-[100px] w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="relative min-w-full" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 disabled:opacity-50"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ArrowLeft size={32} />
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 disabled:opacity-50"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ArrowRight size={32} />
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  );
};

export default Slideshow;
