import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item, index) => {
        return (
          <Link key={index} href={item.href} className={styles.anchor}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
