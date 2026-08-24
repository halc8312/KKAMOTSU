import Link from "next/link";
import { designs, designPath, type DesignId } from "../_data/recruitment";

export function DesignSwitcher({ activeTheme }: { activeTheme: DesignId }) {
  return (
    <nav className="design-switcher" aria-label="採用サイトのデザイン案切り替え">
      <span className="design-switcher__label">デザイン案</span>
      {designs.map((theme) => (
        <Link
          href={designPath(theme.id)}
          key={theme.id}
          aria-current={activeTheme === theme.id ? "page" : undefined}
          aria-label={`デザイン${theme.letter}：${theme.japaneseName}`}
        >
          <b>{theme.letter}</b>
          <span>{theme.japaneseName}</span>
        </Link>
      ))}
    </nav>
  );
}
