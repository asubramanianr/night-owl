import type { Component } from "solid-js";
import { createResource, Show } from "solid-js";
import { useParams } from "solid-app-router";

// import styles from "./BookDetail.module.css";
import type { Book } from "../../types";

const BookDetail: Component = () => {
  const params = useParams();
  let [book] = createResource<Book>(async () =>
    (await fetch(`/books/${params.id}`)).json()
  );
  return (
    <Show when={!book.loading} fallback={<div>Loading...</div>}>
      <div>
        <div>
          <img src={book().cover} alt={book().title} />
        </div>
        <div>
          <h2>{book().title}</h2>
          <p>{"by " + book().author}</p>
          <p>{book().description}</p>
        </div>
      </div>
    </Show>
  );
};
export default BookDetail;
