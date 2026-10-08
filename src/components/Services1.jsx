import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Analytics",
    desc: "Track performance in real time.",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Automation",
    desc: "Let workflows run themselves.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Integrations",
    desc: "Connect the tools you already use.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Security",
    desc: "Enterprise-grade protection, by default.",
    span: "col-span-2 row-span-1",
  },
];

export default function Services1() {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);
  boxRefs.current = [];

  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(boxRefs.current, { autoAlpha: 0, y: 40 });

      gsap.to(boxRefs.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // fires when section top hits 75% down the viewport
          toggleActions: "play none none reverse",
          // markers: true, // uncomment while debugging
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-5xl mx-auto px-6 py-24"
    >
      <div className="grid grid-cols-3 auto-rows-[180px] gap-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            ref={addToRefs}
            className={`${item.span} rounded-2xl border border-white/10 bg-neutral-900 p-6 flex flex-col justify-end shadow-lg hover:border-white/25 transition-colors`}
          >
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}