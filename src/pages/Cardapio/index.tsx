import styles from './Cardapio.module.scss'
import Logo from 'assets/logo.png'
import Buscador from './Buscador';
import React, { useState } from 'react';
import Filtros from './Filtros';

export default function Cardapio(){
  const [buscar, setBusca] = useState("");
    return (
        <main>
            <nav className={ styles.menu }>
            <img src={Logo} alt="Logo da Vinicola"/>
            {/*Cardapio*/}
            </nav>
            <header className={ styles.header }>
                <div className= { styles.header__text }>
                  "Uma vinícola é muito mais do que o local onde se produz vinho, entenda todos os conceitos, a origem e a importância das vinícolas para as empresas e para o mundo dos vinhos."
                </div>
            </header>
            <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo} >Vinícola</h3>
              <Buscador busca={buscar} setBusca={setBusca}/>
              <div className={styles.cardapio__filtros}>
                <Filtros/>
              </div>
            </section>
        </main>
    );
}
