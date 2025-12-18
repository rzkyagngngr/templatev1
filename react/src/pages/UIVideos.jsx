import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';

export default function UIVideos() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const VideoPlayer = ({ id, url, title, poster }) => (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-black">
      <img src={poster} alt={title} className="w-full h-full object-cover" />
      <button
        onClick={() => setPlayingVideo(playingVideo === id ? null : id)}
        className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/60 transition-all"
      >
        <div className="w-16 h-16 rounded-full backdrop-blur-xl bg-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="text-white ml-1" size={28} fill="white" />
        </div>
      </button>
      {playingVideo === id && (
        <video
          src={url}
          controls
          autoPlay
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">UI</span>
          </div>
          <span className="text-sm font-medium text-gray-600">UI Elements</span>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-blue-600 font-medium">Videos</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Video Components
        </h1>
        <p className="text-gray-600">Video player showcase and layouts</p>
      </div>

      {/* Basic Video Player */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Video Player</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <video
            controls
            className="w-full h-auto bg-black"
            poster="https://picsum.photos/800/450?random=1"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Video with Custom Controls */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Video with Custom Controls</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-black relative group">
          <img src="https://picsum.photos/800/450?random=2" alt="Video" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all">
            <button className="w-20 h-20 rounded-full backdrop-blur-xl bg-white/30 flex items-center justify-center hover:bg-white/40 transition-all hover:scale-110">
              <Play className="text-white ml-1" size={32} fill="white" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-all">
                <Play className="text-white" size={16} />
              </button>
              <div className="w-32 h-1 bg-white/30 rounded-full">
                <div className="h-full w-1/3 bg-red-600 rounded-full" />
              </div>
              <span className="text-white text-xs">1:30</span>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-all">
              <Maximize className="text-white" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Multiple Videos in Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Multiple Videos in Grid</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="group cursor-pointer">
              <VideoPlayer
                id={i}
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                title={`Video ${i}`}
                poster={`https://picsum.photos/400/300?random=${i + 10}`}
              />
              <p className="text-gray-700 font-medium mt-3">Video Title {i}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded YouTube-style Videos */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Embedded Video (YouTube Style)</h2>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>

      {/* Video with Poster */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Video with Poster Image</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <video
            controls
            poster="https://picsum.photos/800/450?random=20"
            className="w-full h-auto bg-black"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-gray-600 text-sm mt-4">This video displays a custom poster image before playback starts.</p>
      </div>

      {/* Video Playlists */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main player */}
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
              <img src="https://picsum.photos/600/400?random=25" alt="Now playing" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 font-semibold mt-4">Now Playing: Video 1</p>
            <p className="text-gray-600 text-sm">This is the main video player showing the currently selected video from the playlist.</p>
          </div>

          {/* Playlist */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rounded-2xl border border-white/40 p-4 space-y-2 h-fit">
            <p className="font-semibold text-gray-700 mb-4">Playlist</p>
            {[1, 2, 3, 4].map(i => (
              <button
                key={i}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  i === 1
                    ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 text-blue-700'
                    : 'text-gray-700 hover:bg-white/20'
                }`}
              >
                <p className="text-sm font-medium">Video {i}</p>
                <p className="text-xs opacity-75">2:30</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video with Captions */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Video with Captions</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <video controls className="w-full h-auto bg-black" poster="https://picsum.photos/800/450?random=30">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            <track kind="captions" src="captions.vtt" srclang="en" label="English" default />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-gray-600 text-sm mt-4">Videos can include captions/subtitles for accessibility and viewers who prefer silent viewing.</p>
      </div>

      {/* Responsive Video Embeds */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Responsive Video Embeds</h2>
        <div className="space-y-6">
          {/* 16:9 aspect ratio */}
          <div>
            <p className="text-gray-600 text-sm mb-3">16:9 Aspect Ratio</p>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
              <img src="https://picsum.photos/1280/720?random=35" alt="16:9" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* 4:3 aspect ratio */}
          <div>
            <p className="text-gray-600 text-sm mb-3">4:3 Aspect Ratio</p>
            <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '4/3' }}>
              <img src="https://picsum.photos/800/600?random=36" alt="4:3" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* 1:1 aspect ratio */}
          <div>
            <p className="text-gray-600 text-sm mb-3">1:1 Aspect Ratio (Square)</p>
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg bg-black mx-auto">
              <img src="https://picsum.photos/400/400?random=37" alt="1:1" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
