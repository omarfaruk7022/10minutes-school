"use client";
import React, { useEffect, useState } from "react";
import RightColumn from "./RightColumn";

interface MediaItem {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url: string;
}
interface CTA {
  name: string;
  value: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface RightColumnProps {
  media: MediaItem[];
  pricing?: {
    current: number;
    original: number;
    discount: number;
  };
  cta_text: CTA;
  checklist: ChecklistItem[];
}

export default function RightColumnStickySetup({
  media,
  cta_text,
  checklist,
}: RightColumnProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsSticky(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        className={` ${isSticky ? "fixed top-20 " : "absolute top-[-300px]"}`}
      >
        {/* Right column - pricing*/}
        <RightColumn
          isSticky={isSticky}
          media={media}
          cta_text={cta_text}
          checklist={checklist}
        />
      </div>
    </div>
  );
}
