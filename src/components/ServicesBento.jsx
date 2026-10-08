

import { useLayoutEffect, useRef } from "react";
import canVideo from "../assets/can.mp4"
import bikeVideo from "../assets/bike.mp4"
import rightMove from "../assets/rightmove.png"
import sentry from "../assets/sentrymcu.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_SERVICES = [
  {
    id: "webgl",
    title: "3D dev & WebGL",
    text: "Three.js scenes, shaders and product viewers that run smoothly in the browser.",
    anim: "iris",
    size: "big",
    gradient:
      "radial-gradient(circle at 30% 30%,#7a70ff,transparent 55%),radial-gradient(circle at 80% 80%,#00d1ff,transparent 50%),#2a1fd6",
    media: bikeVideo,  
  },
  {
    id: "debug",
    title: "Debugging & web optimization",
    text: "Faster loads, cleaner code, and bugs found and fixed.",
    anim: "curtain",
    gradient: "linear-gradient(135deg,#ff6b4a,#c1275a 70%)",
    media: sentry,
  },
  {
    id: "anim",
    title: "Web animations",
    text: "GSAP and scroll-driven motion with a purpose.",
    anim: "elastic",
    gradient: "conic-gradient(from 200deg at 60% 40%,#ffd25a,#ff6b4a,#7a70ff,#ffd25a)",
    media: canVideo,
  },
  {
    id: "more",
    title: "Everything else teams hire for",
    text: "Responsive, accessible UI, React, testing and clean handoffs.",
    anim: "diag",
    size: "wide",
    gradient: "linear-gradient(120deg,#0f8f7a,#2fd4a3 55%,#e5ff8a)",
    media: rightMove,
  },
];

const VIDEO_EXT = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;

// Accepts a string or an object and returns { type, src, poster, position } or null.
function getMedia(media) {
  if (!media) return null;
  const m = typeof media === "string" ? { src: media } : media;
  if (!m.src) return null;
  return {
    src: m.src,
    poster: m.poster,
    position: m.position || "center",
    type: m.type || (VIDEO_EXT.test(m.src) ? "video" : "image"),
  };
}

// Tailwind class strings kept as constants so they stay readable.
// (Class names starting with "sb-" are hooks GSAP uses to find elements.)
const EXTRUDE =
  "[text-shadow:1px_1px_0_#17143a,2px_2px_0_#17143a,3px_3px_0_#17143a,4px_4px_0_#17143a,5px_5px_0_#17143a,7px_10px_18px_rgba(0,0,0,.45)]";
const SOFT_SHADOW = "[text-shadow:0_2px_12px_rgba(0,0,0,.6)]";

// Splits a heading into words, then letters, so each letter can pop in.
function Split({ text }) {
  return text.split(" ").map((word, i, arr) => (
    <span key={i}>
      <span className="sb-w inline-block whitespace-nowrap">
        {word.split("").map((c, j) => (
          <span className="sb-ch inline-block" key={j}>
            {c}
          </span>
        ))}
      </span>
      {i < arr.length - 1 ? " " : null}
    </span>
  ));
}

// One entrance per tile. Each returns animations tied to the tile's scroll position.
const ENTRANCES = {
  iris: (el, st) =>
    gsap.from(el, { clipPath: "circle(0% at 50% 50%)", duration: 1.2, ease: "power3.inOut", scrollTrigger: st }),
  curtain: (el, st) =>
    gsap.to(el.querySelector(".sb-cover"), { scaleX: 0, duration: 1.1, ease: "expo.inOut", scrollTrigger: st }),
  elastic: (el, st) =>
    gsap.from(el, {
      scale: 0,
      transformOrigin: "top right",
      duration: 1.3,
      ease: "elastic.out(1,.55)",
      scrollTrigger: st,
    }),
  diag: (el, st) =>
    gsap.from(el, {
      clipPath: "polygon(0 0,0 0,0 100%,0 100%)",
      duration: 1.3,
      ease: "power3.inOut",
      scrollTrigger: st,
    }),
};

export default function ServicesBento({ title = "Services\nI offer", services = DEFAULT_SERVICES }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray(".sb-box");

      boxes.forEach((box) => {
        const st = {
          trigger: box,
          start: "top 82%",
          toggleActions: "play none none reverse",
        };

        // tile entrance
        ENTRANCES[box.dataset.anim]?.(box, st);

        // letters pop forward out of the media
        gsap.from(box.querySelectorAll(".sb-ch"), {
          scale: 0,
          z: -200,
          rotationX: -80,
          opacity: 0,
          stagger: 0.025,
          delay: 0.7,
          duration: 0.7,
          ease: "back.out(2.4)",
          scrollTrigger: st,
        });

        // pointer tilt: text floats over a media layer that shifts the other way
        if (window.matchMedia("(hover:hover)").matches) {
          const content = box.querySelector(".sb-content");
          const media = box.querySelector(".sb-media");
          const ry = gsap.quickTo(content, "rotationY", { duration: 0.6, ease: "power3" });
          const rx = gsap.quickTo(content, "rotationX", { duration: 0.6, ease: "power3" });
          const mx = gsap.quickTo(media, "x", { duration: 0.8, ease: "power3" });
          const my = gsap.quickTo(media, "y", { duration: 0.8, ease: "power3" });

          const move = (e) => {
            const r = box.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            ry(x * 14);
            rx(-y * 14);
            mx(-x * 30);
            my(-y * 30);
          };
          const leave = () => {
            ry(0);
            rx(0);
            mx(0);
            my(0);
          };
          box.addEventListener("pointermove", move);
          box.addEventListener("pointerleave", leave);
        }
      });
    }, root);

    return () => ctx.revert(); // kills tweens and ScrollTriggers
  }, [services]);

  // Layout: first two tiles on row one, the rest on row two.
  const rows = [services.slice(0, 2), services.slice(2)];

  return (
    <section
      ref={root}
      className="overflow-hidden bg-black font-['Bricolage_Grotesque',system-ui,sans-serif] text-white"
    >
      <header className="mx-auto max-w-[1200px] px-[5vw] pb-8 pt-8 text-left md:pt-12">
        <h2 className="text-5xl ">
          {title.split("\n").map((line, i) => (
            <span className="block" key={i}>
              {line}
            </span>
          ))}
        </h2>
      </header>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-3.5 px-[5vw] pb-[12vh]">
        {rows.map((row, i) => (
          <div className="flex flex-col gap-3.5 md:flex-row" key={i}>
            {row.map((s) => {
              const media = getMedia(s.media);
              const isBig = s.size === "big";
              return (
                <article
                  key={s.id}
                  data-anim={s.anim}
                  className={`sb-box relative min-h-[340px] flex-1 overflow-hidden rounded-[28px] bg-neutral-900 text-white will-change-transform [perspective:900px] ${
                    isBig ? "min-h-[400px] md:min-h-[480px] md:flex-[2]" : ""
                  } ${s.size === "wide" ? "md:flex-[2]" : ""}`}
                >
                  {s.anim === "curtain" && (
                    <div className="sb-cover absolute inset-0 z-30 origin-right bg-[#17143a]" />
                  )}

                  <div className="sb-media absolute -inset-[6%] z-0" style={{ background: s.gradient }}>
                    {media?.type === "video" && (
                      <video
                        className="block h-full w-full object-cover"
                        src={media.src}
                        poster={media.poster}
                        style={{ objectPosition: media.position }}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                    {media?.type === "image" && (
                      <img
                        className="block h-full w-full object-cover"
                        src={media.src}
                        alt=""
                        style={{ objectPosition: media.position }}
                      />
                    )}
                    {/* dark fade so text stays readable on any media */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  </div>

                  <div className="sb-content relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-7 [transform-style:preserve-3d]">
                    <h2
                      className="mt-5 start-2p text-xs md:text-xl relative z-10"
                    >
                      <Split text={s.title} />
                    </h2>
                    <p className="text-gray-300 max-md:text-xs ">
                      {s.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}