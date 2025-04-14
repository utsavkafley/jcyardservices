import Typography from "@mui/material/Typography";
import React, { useEffect, useRef, useState } from "react";
import before1 from "../images/before/1.JPG";
import before2 from "../images/before/2.JPG";
import before3 from "../images/before/3.JPG";
import before4 from "../images/before/4.JPG";
import after1 from "../images/after/1.JPG";
import after2 from "../images/after/2.JPG";
import after3 from "../images/after/3.JPG";
import after4 from "../images/after/4.JPG";

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const galleryScrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = galleryScrollContainerRef.current;
    const onWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", onWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", onWheel);
      }
    };
  }, []);

  const images = [
    {
      before: before1,
      after: after1,
    },
    {
      before: before2,
      after: after2,
    },
    {
      before: before3,
      after: after3,
    },
    {
      before: before4,
      after: after4,
    },
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section id="projects" class="gallery">
      <h3>Finished Projects</h3>
      <div class="showcase">
        <div class="before-after">
          <div>
            <img src={images[selectedImageIndex].before} alt="Before" />
            <p>Before</p>
          </div>
          <div class="after">
            <img src={images[selectedImageIndex].after} alt="After" />
            <p>After</p>
          </div>
        </div>
        <div class="gallery-scroll-container" ref={galleryScrollContainerRef}>
          {images.map((image, index) => (
            <img
              src={image.after}
              onClick={() => handleThumbnailClick(index)}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
