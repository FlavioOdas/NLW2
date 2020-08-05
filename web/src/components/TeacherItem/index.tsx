import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/55160541?s=460&v=4" alt=""/>
                <div>
                    <strong>Flavio Odas</strong>
                    <span>Desenvolvimento</span>
                </div>
            </header>
            <p>
                Mais de 20 anos ensinando jovens a programar em Windows Forms
                <br /> <br/>
                Sempre disposto a ensinar tecnologias que possuem mais de 20 anos de idade e são raramente utilizadas no mercado
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 200,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem