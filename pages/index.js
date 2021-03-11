import Head from "next/head";
import styles from "../styles/form.module.css";
import { useState } from "react";
import { API_USER_URL } from "../config/api-config";
import { API_ENT_URL } from "../config/api-config";
import axios from "axios";

export default function Home() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handle_submit(e) {
    e.preventDefault();

    axios
      .post(API_USER_URL, {
        identifier: login,
        password: senha,
      })
      .then((response) => {
        if (response.success) {
          return {
            redirect: {
              destination: "/products",
              permanent: false,
            },
          };
        }
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }
  return (
    <>
      <Head>
        <title>Aguas de Juturnaíba (ME)</title>S
      </Head>

      <div className={styles.formulario}>
        <form>
          <h1>Águas de Juturnaíba (ME)</h1>
          <input
            placeholder="Login"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <br />
          <button type="submit" onClick={handle_submit}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
