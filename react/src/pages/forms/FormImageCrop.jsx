import React, { useRef, useState } from 'react';
import {
  Upload,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Download,
  Move,
  X,
} from 'lucide-react';

export default function FormImageCrop() {
  const [image, setImage] = useState('https://picsum.photos/600/400?random=' + Math.random());
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [cropDimensions, setCropDimensions] = useState({ width: 640, height: 360 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const aspectRatios = {
    '16:9': { width: 640, height: 360 },
    '4:3': { width: 640, height: 480 },
    '1:1': { width: 400, height: 400 },
    'free': { width: 500, height: 400 },
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result || '');
        setZoom(100);
        setRotation(0);
        setImageOffset({ x: 0, y: 0 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAspectRatioChange = (ratio) => {
    setAspectRatio(ratio);
    setCropDimensions(aspectRatios[ratio]);
  };

  const handleZoom = (delta) => {
    setZoom((prev) => Math.min(Math.max(prev + delta, 50), 300));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging && imageRef.current) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      setImageOffset((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));

      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `cropped-image-${Date.now()}.png`;
      link.click();
    }
  };

  const handleLoadImage = (e) => {
    const img = e.target;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = cropDimensions.width;
        canvas.height = cropDimensions.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw rotated image
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(zoom / 100, zoom / 100);
        ctx.drawImage(
          img,
          imageOffset.x - (img.naturalWidth / 2) * (zoom / 100),
          imageOffset.y - (img.naturalHeight / 2) * (zoom / 100)
        );
        ctx.restore();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-slate-900 tracking-wide">Image Crop Tool</h4>
          <div className="text-sm text-slate-600 mt-2">
            <span>Dashboard</span>
            <span className="mx-2">/</span>
            <span>Forms</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Image Crop</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Canvas Area */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Crop Preview</h3>

              {/* Image Container */}
              <div
                className="relative bg-slate-950 rounded-2xl overflow-hidden border-2 border-white/20 cursor-move mb-6"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  width: `${cropDimensions.width}px`,
                  height: `${cropDimensions.height}px`,
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              >
                <img
                  ref={imageRef}
                  src={image}
                  alt="Crop preview"
                  onLoad={handleLoadImage}
                  className="absolute"
                  style={{
                    transform: `rotate(${rotation}deg) scale(${zoom / 100}) translate(${imageOffset.x}px, ${imageOffset.y}px)`,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isDragging ? 0.8 : 1,
                  }}
                />
                <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-indigo-400/50"></div>
              </div>

              {/* Cropped Result Canvas */}
              <div className="hidden">
                <canvas ref={canvasRef}></canvas>
              </div>

              {/* Controls */}
              <div className="space-y-4">
                {/* Zoom Control */}
                <div className="flex items-center gap-3">
                  <ZoomOut size={18} className="text-slate-600" />
                  <input
                    type="range"
                    min="50"
                    max="300"
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/40 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <ZoomIn size={18} className="text-slate-600" />
                  <span className="text-sm font-medium text-slate-700 min-w-12">{zoom}%</span>
                </div>

                {/* Rotation Control */}
                <div className="flex items-center gap-3">
                  <RotateCw size={18} className="text-slate-600" />
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/40 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <span className="text-sm font-medium text-slate-700 min-w-12">{rotation}°</span>
                </div>

                {/* Quick Rotate Button */}
                <button
                  onClick={handleRotate}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/50 hover:bg-white/70 rounded-2xl border border-white/50 text-slate-700 font-medium transition-all"
                >
                  <RotateCw size={18} /> Rotate 90°
                </button>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="space-y-4">
            {/* Upload */}
            <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Upload Image</h3>
              <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-indigo-300 rounded-2xl bg-indigo-100/30 cursor-pointer hover:bg-indigo-100/50 transition-all">
                <Upload size={24} className="text-indigo-600 mb-2" />
                <span className="text-sm font-medium text-slate-700">Choose Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Aspect Ratio */}
            <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Aspect Ratio</h3>
              <div className="space-y-2">
                {Object.keys(aspectRatios).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => handleAspectRatioChange(ratio)}
                    className={`w-full px-4 py-3 rounded-2xl font-medium transition-all border ${
                      aspectRatio === ratio
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-500'
                        : 'bg-white/50 hover:bg-white/70 text-slate-700 border-white/50'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Dimensions</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Width</label>
                  <input
                    type="number"
                    value={cropDimensions.width}
                    onChange={(e) =>
                      setCropDimensions((prev) => ({
                        ...prev,
                        width: Number(e.target.value),
                      }))
                    }
                    className="w-full bg-white/50 rounded-2xl border border-white/50 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Height</label>
                  <input
                    type="number"
                    value={cropDimensions.height}
                    onChange={(e) =>
                      setCropDimensions((prev) => ({
                        ...prev,
                        height: Number(e.target.value),
                      }))
                    }
                    className="w-full bg-white/50 rounded-2xl border border-white/50 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  />
                </div>
                <div className="text-xs text-slate-600 bg-white/30 rounded-lg p-2">
                  {cropDimensions.width} × {cropDimensions.height} px
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-6 space-y-3">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-2xl font-medium transition-all"
              >
                <Download size={18} /> Export/Download
              </button>
              <button
                onClick={() => {
                  setImage('https://picsum.photos/600/400?random=' + Math.random());
                  setZoom(100);
                  setRotation(0);
                  setImageOffset({ x: 0, y: 0 });
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/50 hover:bg-white/70 text-slate-700 rounded-2xl font-medium transition-all border border-white/50"
              >
                <X size={18} /> Reset Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
