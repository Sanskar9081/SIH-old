// src/pages/ProductDetail.js
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const mockProducts = {
  1: { 
    name: 'Rajasthani Blue Pottery Vase', 
    price: 850, 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop',
    story: 'Handcrafted by the skilled potters of Jaipur using traditional techniques passed down through generations. Each piece is made from local clay and painted with natural cobalt blue pigments. The artisans, belonging to the Kumhar community, have been preserving this 500-year-old craft for centuries.',
    description: 'This stunning blue pottery vase features intricate floral patterns inspired by Mughal architecture. Perfect for home decor or as a thoughtful gift. Each vase is unique due to the handmade nature of the craft.',
    category: 'Pottery',
    rating: 4.9,
    reviews: 127,
    dimensions: 'Height: 12 inches, Diameter: 6 inches',
    weight: '1.2 kg',
    materials: 'Local clay, natural cobalt pigment',
    care: 'Hand wash only, avoid microwave',
    artisan: {
      name: 'Ramesh Kumhar',
      location: 'Jaipur, Rajasthan',
      experience: '25+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    }
  },
  2: { 
    name: 'Kerala Palm Leaf Basket', 
    price: 450, 
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
    story: 'Woven by women artisans in rural Kerala using sustainable palm leaves. This cooperative of 50 women artisans works to preserve traditional weaving techniques while providing sustainable income for their families.',
    description: 'Beautifully woven palm leaf basket perfect for storage, gifting, or as a decorative piece. Each basket is handwoven using the traditional coir method.',
    category: 'Baskets',
    rating: 4.8,
    reviews: 89,
    dimensions: 'Diameter: 10 inches, Height: 6 inches',
    weight: '0.4 kg',
    materials: 'Natural palm leaves, coir',
    care: 'Wipe clean with damp cloth',
    artisan: {
      name: 'Lakshmi Amma',
      location: 'Alleppey, Kerala',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop'
    }
  },
  3: { 
    name: 'Banarasi Silk Saree', 
    price: 2450, 
    image: 'https://images.unsplash.com/photo-1585487000156-3d9178e3247d?w=800&h=800&fit=crop',
    story: 'Meticulously woven on traditional looms by master weavers of Varanasi. This saree represents the rich textile heritage of Northern India, with motifs inspired by ancient temple carvings.',
    description: 'Luxurious Banarasi silk saree featuring intricate gold zari work. Perfect for weddings, festivals, and special occasions.',
    category: 'Textiles',
    rating: 5.0,
    reviews: 234,
    dimensions: 'Saree length: 6.3 yards, Blouse piece included',
    weight: '0.6 kg',
    materials: 'Pure silk, gold zari',
    care: 'Dry clean only',
    artisan: {
      name: 'Shiv Prasad',
      location: 'Varanasi, Uttar Pradesh',
      experience: '30+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    }
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const product = mockProducts[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">Product Not Found</h1>
          <p className="text-gray-500">The treasure you're looking for has been crafted away!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="/buyer" className="hover:text-indigo">Home</a>
            <span>›</span>
            <span>{product.category}</span>
            <span>›</span>
            <span className="font-medium text-gray-900">{product.name}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-3">
              {[product.image, product.image.replace('800', '400'), product.image.replace('800', '300')].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-vermilion ring-4 ring-vermilion/30' 
                      : 'border-gray-200 hover:border-indigo'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-lg ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-vermilion">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{Math.round(product.price * 1.2)}</span>
                <span className="bg-emerald/20 text-emerald px-3 py-1 rounded-full text-sm font-semibold">
                  15% OFF
                </span>
              </div>
            </div>

            {/* Artisan Story */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-indigo mb-4 flex items-center">
                <span className="mr-2">📖</span>
                The Artisan's Story
              </h3>
              <div className="flex items-start space-x-4">
                <img 
                  src={product.artisan.image} 
                  alt={product.artisan.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{product.artisan.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.artisan.location} • {product.artisan.experience} experience
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm">{product.story}</p>
                </div>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="card p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Quantity</span>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-lg font-semibold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <button className="btn-primary text-lg py-4 rounded-xl">
                    🛒 Add to Cart
                  </button>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>💳</span>
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Specifications</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Dimensions', value: product.dimensions },
                    { label: 'Weight', value: product.weight },
                    { label: 'Materials', value: product.materials },
                    { label: 'Care Instructions', value: product.care }
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Product Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews ({product.reviews})</h2>
            
            {/* Review Stats */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-vermilion">{product.rating}</div>
                <div className="flex items-center justify-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span>5 stars</span>
                </div>
                {/* Add more rating bars */}
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              {[
                {
                  author: 'Priya Sharma',
                  rating: 5,
                  date: '2 days ago',
                  comment: 'Absolutely stunning! The blue color is even more beautiful in person. Ramesh ji\'s craftsmanship is truly exceptional. Fast delivery too!'
                },
                {
                  author: 'Amit Patel',
                  rating: 4,
                  date: '1 week ago',
                  comment: 'Great quality pottery. Perfect gift for my mother. The story behind the artisan made it even more special.'
                }
              ].map((review, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      {review.author.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">{review.author}</h4>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Write Review Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="btn-secondary flex items-center space-x-2">
                <span>✍️</span>
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;