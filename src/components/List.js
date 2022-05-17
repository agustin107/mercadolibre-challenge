import { ListItem } from "./ListItem";

export function List({ data }) {
  return (
    <section className="container mx-auto">
      <div className="bg-white p-5">
        {data.map(item => <ListItem {...item} key={item.id} />)}
      </div>
    </section>
  )
}