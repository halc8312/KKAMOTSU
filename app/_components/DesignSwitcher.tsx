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
          /* 既定の prefetch は、1ページ表示するたびに他5案のHTMLとRSCペイロード
             （合計 約340KB / 9リクエスト）をモバイル回線で先読みしてしまう。
             デザイン切替は稀な操作なので、タップされてから取りに行く。 */
          prefetch={false}
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
