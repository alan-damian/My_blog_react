import React from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "./Crear";

//se esta aplicando
import styles from "./Posteos.module.css"
//se esta aplicando

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lime } from '@mui/material/colors';

import  posts  from "../components/posts/Posts";








const theme = createTheme({
  palette: {
    primary: lime,
    secondary: blue,
  },
});

const Card = ({ post }) => {

  const navigate = useNavigate();

  const handleLeerClick = () => {
    
    navigate(`/posteos/${post.id}`);

    alert(`Leer posteo ID ${post.id}`);
  };
  
 const handleModificarClick = () => {
  alert(`Modificar posteo ID ${post.id}`);
 };
  
 return (
  <div>


    <h2>{post.titulo}</h2>
    <p>{post.texto}</p>
    <h6>{post.usuario}</h6>

    <ThemeProvider theme={theme}>  
      <Button variant="contained" onClick={handleLeerClick} color="primary">Leer</Button>
      <Button onClick={handleModificarClick} color="secondary">Modificar</Button>
    </ThemeProvider>
  </div>
  );
};
  
const App = () => {
  console.log(Formulario)
  return (
    <div className= {styles.container}>
        <h1>POSTS</h1>
     

      {Formulario}  

      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
  
export default App;