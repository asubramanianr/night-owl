import type { Component } from "solid-js";
import { createEffect, createSignal, For } from "solid-js";
import { Link } from "solid-app-router";

import styles from "./BookList.module.css";
import type { Book } from "../../types";

const BookList: Component = () => {
  let [bookList, updatebookList] = createSignal<Book[]>([]);
  createEffect((_) => {
    async function fetchBooks() {
      updatebookList(
        await fetch("/books").then((res) => res.json() as Promise<Book[]>)
      );
    }
    fetchBooks();
  });
  return (
    <div class={styles.list}>
      <For each={bookList()}>
        {(book) => (
          <Link class={styles.book} href={`/details/${book.book_id}`}>
            <h2 class={styles.title}>{book.title}</h2>
            <p class={styles.author}>{"by " + book.author}</p>
            <img class={styles.cover} src={book.cover} alt={book.title}></img>
            <p class={styles.description}>{book.description}</p>
          </Link>
        )}
      </For>
    </div>
  );
};

export default BookList;
