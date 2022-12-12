import Header from "./components/Header";
import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetails from "./components/Book/BookDetails"

function App() {
  return (
    <React.Fragment>
    <header>
    <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/add" element={<AddBook />} ></Route>
        <Route path="/books" element={<Books />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/books/:id" element={<BookDetails />} ></Route>
      </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
