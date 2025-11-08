import React, { useEffect, useState, useRef } from 'react';
import { Video, PhoneOff, Link as LinkIcon, Loader2 } from 'lucide-react';

function VideoFrame({ src, label }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-black/10">
      <video src={src} autoPlay loop muted playsInline className="w-full h-56 md:h-72 object-cover" />
      <div className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-md bg-white/80 backdrop-blur text-gray-800 shadow">
        {label}
      </div>
    </div>
  );
}

function VideoDemo() {
  const [status, setStatus] = useState('idle'); // idle | searching | connected
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleConnect = () => {
    setStatus('searching');
    timerRef.current = setTimeout(() => setStatus('connected'), 2500);
  };

  const handleDisconnect = () => {
    setStatus('idle');
    clearTimeout(timerRef.current);
  };

  return (
    <section id="demo" className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-50/50 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Video Call Demo</h2>
          <p className="mt-3 text-gray-600">No real connection — just a realistic, elegant preview.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <VideoFrame src="https://videos.pexels.com/video-files/8880869/8880869-uhd_2560_1440_30fps.mp4" label="You" />
          <div className="relative">
            {status !== 'connected' && (
              <div className="absolute inset-0 grid place-items-center z-10">
                {status === 'searching' ? (
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="animate-spin text-fuchsia-500" size={28} />
                    <p className="text-sm text-gray-700 font-medium">Finding a random partner…</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <LinkIcon className="text-indigo-500" size={28} />
                    <p className="text-sm text-gray-700 font-medium">Click connect to preview</p>
                  </div>
                )}
              </div>
            )}
            <VideoFrame src="https://videos.pexels.com/video-files/8416417/8416417-uhd_2560_1440_25fps.mp4" label="Partner" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleConnect}
            disabled={status === 'searching' || status === 'connected'}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-sky-500 shadow-lg hover:shadow-xl disabled:opacity-60">
            <Video size={18} /> Connect
          </button>
          <button
            onClick={handleDisconnect}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-gray-800 font-semibold shadow-lg hover:shadow-xl border">
            <PhoneOff size={18} /> Disconnect
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoDemo;
