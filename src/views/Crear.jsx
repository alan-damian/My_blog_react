
import React, { useState } from "react";

//se esta aplicando
import styles from "./Crear.module.css";
//se esta aplicando


function NewPost({ onSubmit }) {
  const [titulo, setTitulo] = React.useState("");
  const [texto, setTexto] = React.useState("");
  const [usuario, setUsuario] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo === "" || texto === "" || usuario === "") {
      alert("Por favor complete todos los campos");
      return;
    }
    onSubmit({ titulo, texto, usuario });
    setTitulo("");
    setTexto("");
    setUsuario("");

 
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <label>
        Text:
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></textarea>
      </label>
      <label>
        User:
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>
      <input type="submit" value="Añadir Post" />
    </form>
  );
}


function Formulario() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user_id: 1,
      titulo: "",
      texto: "",
      usuario: "",
    },
  ]);

  const addPost = (post) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className= {styles.container}>
      <h1>CREAR POST</h1>

      <NewPost onSubmit={addPost} />
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.titulo}</h2>
            <p>{post.texto}</p>
            <h6>{post.usuario}</h6>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Formulario;