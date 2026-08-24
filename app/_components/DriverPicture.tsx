const publicAssetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

export function DriverPicture({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <picture className={className}>
      <source
        type="image/avif"
        srcSet={`${publicAssetPrefix}/hero-driver-800.avif 800w, ${publicAssetPrefix}/hero-driver-1586.avif 1586w`}
        sizes="(max-width: 900px) 100vw, 52vw"
      />
      <source
        type="image/webp"
        srcSet={`${publicAssetPrefix}/hero-driver-800.webp 800w, ${publicAssetPrefix}/hero-driver-1586.webp 1586w`}
        sizes="(max-width: 900px) 100vw, 52vw"
      />
      <img
        src={`${publicAssetPrefix}/hero-driver.png`}
        alt="白い軽バンの前で荷物を持つ配送ドライバー"
        width="1586"
        height="992"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}
