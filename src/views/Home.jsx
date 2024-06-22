import styles  from "./Home.module.css";
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';


export default function Home() {

  const { auth, userName } = useContext(AuthContext);


    return (
      <div className= {styles.container}>
        {auth === true?
        
          <div className={styles.div}>
          <h1>HOLA {userName}!!</h1>
          <p>HOME</p>
          </div>
        :
        
          <div>Para ver los posteos debe loguearse</div>

        }
      
      </div>
    );
}