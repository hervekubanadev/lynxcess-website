import bgKigali from "@/assets/bg-kigali.jpg";
import bgMarket from "@/assets/bg-market.jpg";
import bgTech from "@/assets/bg-tech.jpg";
import bgTeam from "@/assets/bg-team.jpg";

interface BlurredBgProps {
  image: string;
  opacity?: string;
  position?: string;
}

const bgMap: Record<string, string> = {
  kigali: bgKigali,
  market: bgMarket,
  tech: bgTech,
  team: bgTeam,
};

const BlurredBackground = ({
  image,
  opacity = "opacity-20",
  position = "center",
}: BlurredBgProps) => {
  const src = bgMap[image] || image;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img
        src={src}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover ${opacity}`}
        style={{
          filter: "blur(40px) saturate(0.6)",
          transform: "scale(1.15)",
          objectPosition: position,
        }}
        loading="lazy"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/70" />
    </div>
  );
};

export default BlurredBackground;
