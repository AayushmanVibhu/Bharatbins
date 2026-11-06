"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gallery } from "@/data/content";

export function ProjectGallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  function open(index: number, button: HTMLButtonElement) { trigger.current = button; setActive(index); }
  function close() { setActive(null); requestAnimationFrame(() => trigger.current?.focus()); }
  function move(direction: number) { setActive((current) => current === null ? null : (current + direction + gallery.length) % gallery.length); }

  useEffect(() => {
    if (active === null) return;
    closeButton.current?.focus();
    document.body.classList.add("lightbox-open");
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>(".lightbox");
        const focusable = dialog?.querySelectorAll<HTMLElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("keydown", onKeyDown); document.body.classList.remove("lightbox-open"); };
  }, [active]);

  return <section className="gallery"><div className="section-head"><p className="eyebrow">Project gallery</p><h2>Field photographs from the South Delhi programme.</h2></div><div className="gallery-grid">{gallery.map((image, index) => <button key={image.src} onClick={(event) => open(index, event.currentTarget)} aria-label={`Open photograph: ${image.caption}`}><Image src={image.src} fill sizes="(max-width:700px) 92vw, 33vw" alt={image.alt}/><span>{image.caption}</span></button>)}</div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-caption" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <button ref={closeButton} className="lightbox-close" onClick={close} aria-label="Close photograph"><X /></button>
      <button className="lightbox-prev" onClick={() => move(-1)} aria-label="Previous photograph"><ChevronLeft /></button>
      <figure><div><Image src={gallery[active].src} fill sizes="90vw" alt={gallery[active].alt}/></div><figcaption id="lightbox-caption">{gallery[active].caption}</figcaption></figure>
      <button className="lightbox-next" onClick={() => move(1)} aria-label="Next photograph"><ChevronRight /></button>
    </div>}
  </section>;
}
