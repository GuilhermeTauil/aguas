import { API_URL } from "../config/api-config";
import MainContainer from "../components/MainContainer";

export default function Product_page({ data }) {
  return (
   
      <ul>
        {data.map((post) => (
          <MainContainer
            key={post.slug}
            cover={post.Foto}
            title={post.ProductName}
            slug={post.slug}
          />
        ))}
      </ul>
    
  );
}

export async function getStaticProps() {
  const res = await fetch(API_URL);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
