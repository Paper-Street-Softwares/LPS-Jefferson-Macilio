import MotionDivDownToUp from "../animations/MotionDownToUp";

export default function SectionHeader({ colorMode, title, marginBottom }) {
  const themes = {
    light: "text-fontLighter",
    dark: "text-fontDarker",
  };

  const colors = themes[colorMode] || themes.dark;

  return (
    <>
      <MotionDivDownToUp className="lg:w-[70%]">
        <h2
          className={`${colors} font-mainFont text-3xl font-bold tracking-tight text-center lg:text-4xl capitalize`}
        >
          {title}
        </h2>
        <div
          className={`w-full h-px max-w-6xl mx-auto mt-6 mb-6 lg:mb-12 ${marginBottom} bg-custom-divider-lighter`}
        ></div>
      </MotionDivDownToUp>
    </>
  );
}
