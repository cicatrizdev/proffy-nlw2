import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/16566846?s=460&u=2c969ebe39d322990e242dabc9c1b47fc6f5459f&v=4" alt="Pedro Mello"/>
        <div>
          <strong>Pedro Mello</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga.
        <br />
        <br />
        Sapien in monti palavris qui num significa nadis i pareci latim. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$66,66</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;