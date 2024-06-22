
import {useParams} from "react-router-dom"

import styles from "./Posteosid.module.css"
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lime } from '@mui/material/colors';

import posts from "../components/posts/Posts";


const theme = createTheme({
  palette: {
    primary: lime,
    secondary: blue,
  },
});

export default function PosteosId () {

  const {id} = useParams();
  
  console.log("este es el posteo utilizado: ", id);

  const post = posts.find((post) => post.id.toString() === id);
  
  const handleModificarClick = () => {
    alert(`Modificar posteo ID ${post.id}`);
   };

  if (!post) {
    return <div>Post not found</div>;
  }

  
  return  (
    <div className= {styles.container}>
      <h1>{post.titulo}</h1>
      <p>{post.texto}</p>

      <ThemeProvider theme={theme}>  
        <Button onClick={handleModificarClick} color="secondary">Modificar</Button>
      </ThemeProvider>  

    </div>
  )
}