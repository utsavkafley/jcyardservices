import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useRef, useState } from "react";

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

  const images = [];
  const uniqueIds = Array.from({ length: 44 }, (_, index) => index + 59);

  uniqueIds.forEach((id) => {
    if (id % 2 === 0) {
      images.push({
        before: `https://picsum.photos/id/${id}/300/200`,
        after: `https://picsum.photos/id/${id + 1}/300/200`,
      });
    }
  });

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section
      id="gallery"
      className="py-8 px-4 sm:px-24 md:px-32 lg:px-72 bg-orange"
    >
      <Typography variant="h3" gutterBottom>
        View Our Work
      </Typography>
      <Grid container spacing={2} className="">
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Before
              </Typography>
              <img
                src={images[selectedImageIndex].before}
                alt="Before"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                After
              </Typography>
              <img
                src={images[selectedImageIndex].after}
                alt="After"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div class="gallery-scroll-container" ref={galleryScrollContainerRef}>
            {images.map((image, index) => (
              <img
                src={image.before}
                onClick={() => handleThumbnailClick(index)}
                alt=""
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Gallery;
