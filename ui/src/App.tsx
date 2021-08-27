import type { Component } from "solid-js";
import { Routes, Route } from "solid-app-router";

import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import BookDetail from "./components/BookDetail/BookDetail";

const App: Component = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/details/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
};

export default App;
