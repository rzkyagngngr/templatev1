import React from 'react';
import { Play } from 'lucide-react';

export default function UIVideos() {
  const videos = [
    { id: 1, title: 'Product Overview', thumbnail: 'https://picsum.photos/400/225?random=1', duration: '2:34' },
    { id: 2, title: 'How to Get Started', thumbnail: 'https://picsum.photos/400/225?random=2', duration: '5:12' },
    { id: 3, title: 'Advanced Features', thumbnail: 'https://picsum.photos/400/225?random=3', duration: '8:45' },
    { id: 4, title: 'Pricing Overview', thumbnail: 'https://picsum.photos/400/225?random=4', duration: '3:20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">UI</span>
        <span className="text-gray-400">/</span>
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Videos</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Video Components</h1>
        <p className="text-gray-600 text-lg mb-12">Video players and video galleries</p>

        {/* Main Video Player */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Video Player</h2>
          <div className="relative bg-black rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/800/450?random=5" alt="Video" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center transition-all">
              <button className="p-4 backdrop-blur-xl bg-white/30 border border-white/50 rounded-full hover:bg-white/50 transition-all group-hover:scale-110">
                <Play className="text-white" size={32} fill="white" />
              </button>
            </div>
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-1 bg-white/30 rounded-full mb-3">
                <div className="h-full w-1/3 bg-white rounded-full" />
              </div>
              <div className="flex justify-between text-sm">
                <span>1:45</span>
                <span>5:20</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="group relative cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <button className="p-2 backdrop-blur-xl bg-white/30 border border-white/50 rounded-full hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100">
                      <Play className="text-white" size={20} fill="white" />
                    </button>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded font-semibold">
                    {video.duration}
                  </span>
                </div>
                <p className="mt-3 font-semibold text-gray-900">{video.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Video */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Video Embed</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
