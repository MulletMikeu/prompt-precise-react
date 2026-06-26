import { useEffect, useRef, useState } from "react";
import { VIDEOS } from "../data/siteData";

function VideoModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Video: ${title}`}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute -top-10 right-0 font-display font-700 text-white uppercase tracking-widest text-sm flex items-center gap-2"
          aria-label="Close video"
        >
          Close ✕
        </button>
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);
  const isPlaceholder = (id: string) => id.startsWith("PLACEHOLDER");

  // Hide the whole section until at least one real video is available, rather
  // than showing a grid of "Coming Soon" tiles. Re-appears automatically once
  // a real youtubeId is added in siteData.
  if (VIDEOS.every((video) => isPlaceholder(video.youtubeId))) {
    return null;
  }

  return (
    <section
      className="section-pad"
      style={{ background: "#0A0A0A" }}
      aria-labelledby="video-heading"
    >
      <div className="container-brand">

        {/* Header */}
        <div className="mb-12">
          <p className="label-red mb-4">See The Work</p>
          <h2 id="video-heading" className="text-display-xl text-white">
            Watch Godhans
            <br />
            <span style={{ color: "#E5424F" }}>In Action</span>
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "#1A1A1A" }}>
          {VIDEOS.map((video) => (
            <button
              key={video.id}
              className="group relative overflow-hidden text-left"
              style={{
                aspectRatio: "16/9",
                background: "#111111",
                cursor: isPlaceholder(video.youtubeId) ? "default" : "pointer",
              }}
              onClick={() => {
                if (!isPlaceholder(video.youtubeId)) {
                  setActiveVideo({ id: video.youtubeId, title: video.title });
                }
              }}
              disabled={isPlaceholder(video.youtubeId)}
            >
              {/* Thumbnail — decorative; the button is named by its visible title/subtitle */}
              <img
                src={
                  isPlaceholder(video.youtubeId)
                    ? "/images/video-placeholder.jpg"
                    : `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
                }
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width="640"
                height="360"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.2) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Play button */}
              {!isPlaceholder(video.youtubeId) && (
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-1" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Coming soon badge */}
              {isPlaceholder(video.youtubeId) && (
                <div className="absolute top-4 left-4">
                  <span
                    className="font-body text-xs font-600 uppercase tracking-widest px-3 py-1"
                    style={{ background: "#C41230", color: "white", letterSpacing: "0.1em" }}
                  >
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="font-display font-700 uppercase text-white mb-1"
                  style={{ fontSize: "1.2rem", letterSpacing: "0.04em" }}
                >
                  {video.title}
                </p>
                <p
                  className="font-body text-xs uppercase tracking-widest"
                  style={{ color: "#C8C8C2", letterSpacing: "0.1em" }}
                >
                  {video.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* YouTube link */}
        <div className="mt-8 text-center">
          <a href="https://www.youtube.com/@godhans7945/" target="_blank" rel="noopener noreferrer" className="font-display font-700 text-sm uppercase tracking-widest inline-flex items-center gap-2 transition-colors" style={{ color: "#888888", letterSpacing: "0.1em" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E5424F")} onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}>Watch More on YouTube →</a>
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <VideoModal
          videoId={activeVideo.id}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}