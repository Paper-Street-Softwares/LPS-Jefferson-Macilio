import MotionDivDownToUp from "../animations/MotionDownToUp";
import { useCallback } from "react";

export default function CtaButton({
  link,
  icon,
  label,
  colorMode,
  reflexAnimation = true,
}) {
  const themes = {
    light: "bg-lighter text-fontLighter ",
    dark: "bg-darker text-fontLighter",
  };

  const shineThemes = {
    light: "bg-white/20",
    dark: "bg-white/10",
  };

  const colors = themes[colorMode] || themes.light;
  const shineColor = shineThemes[colorMode] || shineThemes.light;

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      const url = new URL(link);
      const phone = url.pathname.replace("/", "").replace("+", "");
      const text = url.searchParams.get("text") || "";

      const encodedText = encodeURIComponent(text);

      const direct = `whatsapp://send?phone=${phone}&text=${encodedText}`;

      const fallback = `https://wa.me/${phone}?text=${encodedText}`;

      window.location.href = direct;

      setTimeout(() => {
        window.open(fallback, "_blank");
      }, 1200);
    },
    [link]
  );

  return (
    <MotionDivDownToUp className="inline-block">
      <a
        href={link}
        target="_blank"
        onClick={handleClick}
        className={`
          relative
          overflow-hidden
          inline-flex
          items-center
          justify-center
          ${colors} 
          font-normal font-secondFont px-6 py-3 rounded-lg text-lg 
          transition-all hover:scale-105 shadow-lg gap-3 text-paragraph4
          min-w-[10px] 
          text-center
        `}
      >
        {reflexAnimation && (
          <span
            className={`
              absolute top-0 left-0 w-full h-full 
              ${shineColor}
              animate-shine-loop 
              z-0
              pointer-events-none
            `}
          />
        )}

        <span className="relative z-10 flex items-center gap-3 capitalize">
          {icon}
          {label}
        </span>
      </a>
    </MotionDivDownToUp>
  );
}
