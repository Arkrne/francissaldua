import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { imagekitImageUrl } from "@/lib/imagekit";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative w-full bg-[#1f1f1f] py-10">
      <div className="absolute top-0 left-0 w-full border-t border-[#5a7e7e]/60" />

      <div data-no-cascade>
        <InfiniteSlider gap={80} reverse={false} duration={40} durationOnHover={80}>
          {logos.map((logo) => (
            <img
              alt={logo.alt}
              className="pointer-events-none h-8 md:h-12 select-none opacity-70 hover:opacity-100 transition-opacity"
              height="auto"
              key={`logo-${logo.alt}`}
              loading="lazy"
              src={imagekitImageUrl(logo.src, { width: 240 })}
              width="auto"
            />
          ))}
        </InfiniteSlider>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-b border-[#5a7e7e]/60" />
    </div>
  );
}