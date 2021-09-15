import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./App.css";

function App(props) {
  // State to Hold list
  const [products, setProducts] = useState([]);

  const nullBook = {
    subject: "",
    details: "",
  };

  const [targetBook, setTargetBook] = useState(nullBook);

  /////////////////////
  // Functions
  /////////////////////
  const getBooks = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBooks(data);
  };

  const addBooks = async (newBook) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
    getBooks();
  };

  const getTargetBook = async (book) => {
    setTargetBook(book);
    props.history.push("/edit");
  };

  const updateBook = async (book) => {
    const response = await fetch(url + book.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    getBooks();
  };

  const deleteBook = async (book) => {
    const response = await fetch(url + book.id + "/", {
      method: "delete",
    });
    getBooks();
    props.history.push("/");
  };
  //////////////////////////
  // useEffects
  //////////////////////////
  useEffect(() => {
    getBooks();
  }, []);

  //////////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <Header />
      <div className="allbooks-header">
        <h1>My Books</h1>
        <Link to="/new">
          <button>Add New Book</button>
        </Link>
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllBooks {...routerProps} books={books} />}
        />
        <Route
          path="/books/:id"
          render={(routerProps) => (
            <SingleBook
              {...routerProps}
              books={books}
              edit={getTargetBook}
              deleteBook={deleteBook}
            />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialBook={nullBook}
              handleSubmit={addBooks}
              buttonLabel="Create Book"
            />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialBook={targetBook}
              handleSubmit={updateBook}
              buttonLabel="Update Book"
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
