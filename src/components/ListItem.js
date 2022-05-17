import { Link } from "react-router-dom";

export function ListItem(props) {

  return (
    <Link to={`/items/${props.id}`}>
      <article className="flex border-0 border-b-2 border-solid border-gray-300 py-5 justify-between items-center">
        <div className="flex">
          <img
            className="h-auto rounded w-[200px] mr-5"
            src={props.thumbnail}
            alt="thumbnail"
          />
          <div className="flex flex-col">
            <header className="">$ {props.price}</header>
            <main className="mt-5">{props.title}</main>
          </div>
        </div>
        <div className="">
          {props.address.state_name}
        </div>
      </article>
      </Link>
  );
}
