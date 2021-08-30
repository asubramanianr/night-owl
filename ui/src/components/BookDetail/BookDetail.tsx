import type { Component } from "solid-js";
import { createResource, Show } from "solid-js";
import { useParams } from "solid-app-router";

import styles from "./BookDetail.module.css";
import type { Book } from "../../types";

const BookDetail: Component = () => {
  const params = useParams();
  let [book] = createResource<Book>(async () =>
    (await fetch(`/books/${params.id}`)).json()
  );
  return (
    <Show when={!book.loading} fallback={<div>Loading...</div>}>
      <div class={styles.container}>
        <div class={styles.cover}>
          <img class={styles.image} src={book().cover} alt={book().title} />
          <a href={book().website} class={styles.btn}>go to website</a>
        </div>
        <div class={styles.detail}>
          <h1 /*class={styles.title}*/>{book().title}</h1>
          <p /*class={styles.author}*/>{"by " + book().author}</p>
          <hr />
          <p /*class={styles.isbn}*/>{"ISBN: " + book().isbn}</p>
          <p /*class={styles.pages}*/>{"Pages: " + book().pages}</p>
          <hr />
          <p /*class={styles.description}*/>{book().description}</p>
        </div>
      </div>
    </Show>
  );
};
export default BookDetail;
