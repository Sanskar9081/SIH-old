// src/pages/UploadProduct.js
import { useState } from 'react';

const UploadProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [generatedDetails, setGeneratedDetails] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setAiProcessing(true);
    }, 2000);

    // Simulate AI processing
    setTimeout(() => {
      setAiProcessing(false);
      setGeneratedDetails({
        title: "Handcrafted Terracotta Water Pot",
        description: "Authentic terracotta pot handcrafted by rural artisans in Rajasthan. Made using traditional wheel-throwing technique with natural clay sourced from local riverbeds. Each pot is unique and carries the artist's signature patterns.",
        price: 1250,
        keywords: ["terracotta", "pottery", "rajasthan", "handmade", "authentic", "traditional"],
        story: "Crafted by Suresh Kumhar, a third-generation potter from Alwar, Rajasthan. With 25 years of experience, Suresh preserves the ancient Kumhar community traditions while innovating with modern designs. Each piece takes 3 days to complete and tells a story of cultural heritage.",
        enhancedImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop"
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black">
            ✨ AI-Powered Creation Upload
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simply upload a photo. Our AI handles everything else - titles, descriptions, pricing, and your artisan story!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Upload Section */}
          <div className="card p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Upload Your Creation</h3>
              <p className="text-gray-600">Just drag & drop or click to select a photo</p>
            </div>

            {/* Upload Area */}
            <div 
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer hover:border-indigo hover:bg-indigo-50 ${
                selectedFile ? 'border-emerald-300 bg-emerald-50' : 'border-gray-300'
              }`}
              onClick={() => document.getElementById('file-upload').click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file && file.type.startsWith('image/')) {
                  setSelectedFile(file);
                }
              }}
            >
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              {selectedFile ? (
                <>
                  <img 
                    src={URL.createObjectURL(selectedFile)} 
                    alt="Selected creation"
                    className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold text-emerald-700 mb-2">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-emerald-600">✅ Beautiful creation selected!</p>
                </>
              ) : (
                <>
                  <div className="text-5xl mb-4">📷</div>
                  <p className="text-lg font-semibold text-gray-600 mb-2">
                    Drop your creation here or click to browse
                  </p>
                  <p className="text-sm text-gray-500">Supports JPG, PNG (Max 10MB)</p>
                </>
              )}
            </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className={`w-full mt-8 btn-primary py-4 text-lg rounded-xl transition-all duration-300 ${
                !selectedFile || isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {isUploading ? (
                <>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Uploading...</span>
                  </div>
                </>
              ) : (
                '🚀 Let AI Work Its Magic'
              )}
            </button>

            {/* AI Processing */}
            {aiProcessing && (
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-8 h-8 border-2 border-indigo border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-indigo font-semibold">AI is analyzing your creation...</span>
                </div>
                <div className="space-y-2 text-center text-sm text-indigo-600">
                  <p>🎨 Enhancing image quality</p>
                  <p>💭 Generating compelling title & description</p>
                  <p>💰 Calculating optimal pricing</p>
                  <p>📝 Crafting your artisan story</p>
                </div>
                <div className="flex justify-center space-x-1 mt-4">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
          </div>

          {/* Generated Details */}
          {generatedDetails && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                ✨ AI Magic Complete!
              </h3>
              
              {/* Enhanced Image */}
              <div className="card p-4">
                <h4 className="font-semibold text-gray-700 mb-3">Enhanced Product Image</h4>
                <img 
                  src={generatedDetails.enhancedImage}
                  alt="Enhanced product"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Generated Title */}
              <div className="card p-4">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="mr-2">📝</span>
                  Generated Title
                </h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-lg font-semibold text-gray-900">{generatedDetails.title}</p>
                </div>
              </div>

              {/* Generated Description */}
              <div className="card p-4">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="mr-2">📄</span>
                  Product Description
                </h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">{generatedDetails.description}</p>
                </div>
              </div>

              {/* Pricing & Keywords */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">💰</span>
                    Suggested Price
                  </h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">₹{generatedDetails.price}</div>
                    <p className="text-sm text-gray-600">Based on market analysis & similar products</p>
                  </div>
                </div>
                
                <div className="card p-4">
                  <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <span className="mr-2">🔖</span>
                    SEO Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedDetails.keywords.map((keyword, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Artisan Story */}
              <div className="card p-6 bg-gradient-to-r from-indigo-50 to-purple-50">
                <h4 className="font-semibold text-indigo-700 mb-3 flex items-center">
                  <span className="mr-2">📖</span>
                  Your Artisan Story
                </h4>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-700 italic leading-relaxed text-sm">{generatedDetails.story}</p>
                </div>
                <p className="text-xs text-indigo-600 mt-3 text-center">
                  💡 This story connects buyers emotionally with your craft
                </p>
              </div>

              {/* Final Actions */}
              <div className="card p-6 bg-emerald-50 border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-4 text-center">
                  Ready to go live? Everything looks perfect! 🎉
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="btn-primary py-4 text-lg rounded-xl">
                    🚀 Publish This Creation
                  </button>
                  <button className="border-2 border-emerald-300 text-emerald-700 font-semibold py-4 px-6 rounded-xl hover:bg-emerald-50 transition-colors">
                    ✏️ Make Edits
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;