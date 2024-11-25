import React, { useState } from 'react';
import Footer from './footer';
import Loading from './Loading';

const Album = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample image data with different extensions
  const images = [
    { 
      id: 1, 
      url: '/image/0011.jpg',
      title: 'Construction Site 1', 
      category: 'Construction',
      extension: 'jpg'
    },
    { 
      id: 2, 
      url: '/image/0022.jpg',
      title: 'Building Project', 
      category: 'Architecture',
      extension: 'jpeg'
    },
    {
      id: 3, 
      url: '/image/0033.jpg',
      title: 'Building Project', 
      category: 'Architecture',
      extension: 'jpg'
    },
    {
      id: 4, 
      url: '/image/0044.jpg',
      title: 'Building Project', 
      category: 'Architecture',
      extension: 'jpg'
    },
    { 
      id: 5, 
      url: '/image/001.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 4, 
      url: '/image/01.jpg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpg'
    },
    { 
      id: 5, 
      url: '/image/02.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 6, 
      url: '/image/03.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 7, 
      url: '/image/04.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 8, 
      url: '/image/05.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 9, 
      url: '/image/06.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 10, 
      url: '/image/07.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 11, 
      url: '/image/08.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 12, 
      url: '/image/09.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 13, 
      url: '/image/10.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 14, 
      url: '/image/11.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 15, 
      url: '/image/12.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 16, 
      url: '/image/13.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 17, 
      url: '/image/14.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 18, 
      url: '/image/15.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 19, 
      url: '/image/16.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 20, 
      url: '/image/17.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 21, 
      url: '/image/18.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    { 
      id: 22, 
      url: '/image/19.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    }
    ,{
      id: 23, 
      url: '/image/20.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    {
      id: 24, 
      url: '/image/21.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    }
    ,{
      id: 25, 
      url: '/image/22.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    {
      id: 26, 
      url: '/image/23.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    {
      id: 27, 
      url: '/image/24.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 28, 
      url: '/image/25.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 29, 
      url: '/image/26.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 30, 
      url: '/image/27.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 31, 
      url: '/image/28.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 32, 
      url: '/image/29.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 33, 
      url: '/image/30.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 34, 
      url: '/image/31.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 35, 
      url: '/image/32.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 36, 
      url: '/image/33.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },
    {
      id: 37, 
      url: '/image/34.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 38, 
      url: '/image/35.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 39, 
      url: '/image/36.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 40, 
      url: '/image/37.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 41, 
      url: '/image/38.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    },{
      id: 42, 
      url: '/image/39.jpeg',
      title: 'Interior Design', 
      category: 'Interior',
      extension: 'jpeg'
    }

  ];

  // Function to get random extension
  const getRandomExtension = () => {
    const extensions = ['jpg', 'jpeg', 'png'];
    return extensions[Math.floor(Math.random() * extensions.length)];
  };

  // Add 47 more sample images with random extensions
  for (let i = 4; i <= 43; i++) {
    const extension = getRandomExtension();
    images.push({
      id: i,
      url: `/image/${i}.${extension}`,
      title: `Project ${i}`,
      category: i % 3 === 0 ? 'Construction' : i % 2 === 0 ? 'Architecture' : 'Interior',
      extension: extension
    });
  }

  // Function to handle image load error
  const handleImageError = (e) => {
    // Try different extensions if image fails to load
    const currentSrc = e.target.src;
    const extensions = ['jpg', 'jpeg', 'png'];
    const currentExt = currentSrc.split('.').pop();
    const index = extensions.indexOf(currentExt);
    
    if (index < extensions.length - 1) {
      // Try next extension
      const newExt = extensions[index + 1];
      e.target.src = currentSrc.replace(`.${currentExt}`, `.${newExt}`);
    } else {
      // If all extensions fail, use placeholder
      e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Found';
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Simulate loading
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Our Project Gallery</h1>

          {/* Image Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid relative group cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className=" inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm">{image.category}</p>
                      <p className="text-xs opacity-75">Format: {image.extension}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for enlarged image view */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
              <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  onError={handleImageError}
                />
                <div className=" bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-white text-xl font-bold">{selectedImage.title}</h2>
                  <p className="text-gray-300">{selectedImage.category}</p>
                  <p className="text-gray-400 text-sm">Format: {selectedImage.extension}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Album;
