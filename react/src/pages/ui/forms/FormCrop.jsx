import React, { useState } from 'react';

export default function FormCrop() {
  const [imageSrc, setImageSrc] = useState(null);
  const [scale, setScale] = useState(100);
  const [rotation, setRotation] = useState(0);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Image Crop</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Forms / </span>
          <span className="text-gray-900 font-medium">Crop</span>
        </nav>
      </div>

      {/* Image Upload */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Image Editor */}
      {imageSrc && (
        <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
          <h2 className="text-xl font-semibold text-black mb-6">Edit Image</h2>
          
          {/* Image Preview */}
          <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-300 flex justify-center items-center min-h-64">
            <img
              src={imageSrc}
              alt="preview"
              style={{
                transform: `scale(${scale / 100}) rotate(${rotation}deg)`,
                transition: 'transform 0.3s ease',
              }}
              className="max-h-96 max-w-full rounded-lg"
            />
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Scale Control */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Scale: {scale}%
              </label>
              <input
                type="range"
                min="50"
                max="150"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Rotation Control */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Rotation: {rotation}Â°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Quick Rotation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setRotation((rotation - 90 + 360) % 360)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50"
              >
                â†¶ Rotate Left
              </button>
              <button
                onClick={() => setRotation((rotation + 90) % 360)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50"
              >
                Rotate Right â†·
              </button>
              <button
                onClick={() => {
                  setScale(100);
                  setRotation(0);
                }}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50"
              >
                Reset
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <button className="flex-1 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg font-medium hover:bg-blue-600">
                Download
              </button>
              <button className="flex-1 px-4 py-2 bg-green-500 text-slate-900 rounded-lg font-medium hover:bg-green-600">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Aspect Ratios */}
      {!imageSrc && (
        <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
          <h2 className="text-xl font-semibold text-black mb-6">Common Aspect Ratios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['16:9', '4:3', '1:1', '9:16'].map((ratio) => (
              <div key={ratio} className="p-4 bg-gray-50 rounded-lg border border-gray-300 text-center">
                <p className="text-black font-medium">{ratio}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
