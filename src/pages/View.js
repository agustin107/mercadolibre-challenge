import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export function View() {
  const params = useParams();
  const { data } = useFetch({ url: `/items/${params.id}` });
  const { data: description } = useFetch({
    url: `/items/${params.id}/description`,
  });
  const { data: categories } = useFetch({ url: `/categories/${data?.category_id}` });

  console.log("data", data);
  console.log("description", description);
  console.log("categories", categories);

  if (!data || !categories || !description) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <header className="flex">
          {categories?.path_from_root.map(category => (
            <div className="mr-1">
              {category.name} {'>'}
            </div>
          ))}
      </header>
      <main className="bg-white flex p-5">
        <section>
          <img src={data.pictures[0].url} alt="Imagen de producto" />
          <section>
            <h3>Descripcion del producto</h3>
            <p>{description.plain_text}</p>
          </section>
        </section>
        <sidebar>
          {data.condition === "new" ? "Nuevo" : "Usado"}
          {data.title}
          $ {data.price}
          <button>COMPRAR</button>
        </sidebar>
      </main>
    </div>
  );
}
