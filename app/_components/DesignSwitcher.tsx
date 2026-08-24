import Link from "next/link";
import { themes, type ThemeId } from "../_data/recruitment";

export function DesignSwitcher({ activeTheme }: { activeTheme?: ThemeId }) {
  return (
    <nav className="design-switcher" aria-label="採用サイトのデザイン案切り替え">
      <span className="design-switcher__label">社員比較用</span>
      <Link href="/" aria-current={!activeTheme ? "page" : undefined}>
        比較一覧
      </Link>
      <span className="design-switcher__divider" aria-hidden="true" />
      {themes.map((theme) => (
        <Link
          href={`/designs/${theme.id}`}
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
