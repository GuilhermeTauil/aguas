import Link from "next/link";
import styles from "../styles/MainContainer.module.css";

export default function MainContainer({ title, cover, slug }) {
  return (
    <div className={styles.MainContainer}>
      <Link href="/products/[slug]" as={`/products/${slug}`}>
        <a>
          <img src={cover} alt={title}></img>
        </a>
      </Link>
    </div>
  );
}
