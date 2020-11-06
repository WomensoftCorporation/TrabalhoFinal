import React from 'react'
import arrow from './Componentes/imagens/arrow.png';
import iconArrow from './Componentes/imagens/icon-arrow-down-16.jpg';
import sub1 from './Componentes/imagens/sub1.png';
import sub2 from './Componentes/imagens/sub2.png';
import sub3 from './Componentes/imagens/sub3.png';




const Site = props =>{
return(

<div>
    <div className='menu'>
        <h2>MaxCine</h2>
        <button className='bm1'> Cadastre-se </button>
        <a href='../Pages/Entrar.html'><button className='bm2'> Entrar </button></a> 
    </div>


    <div className='blockquote text-center'>
        <div className='txt'>
            <h1 className='Display1'> Bem-Vindo ao MaxCine!</h1>
            <p className='mb-0'> Reserve seu lugar de maneira simples nos melhores <br/> cinemas da sua região </p>
        </div>
        <img className='seta' src={iconArrow} alt="seta de rolamento" width='80' height='50'/>
    
    </div>

    
    <div className='prop'>
        <div className='i1'>
            <div className='blockquote text-center'>
            <img classNameName='sub33' src={sub2}alt="Propaganda do cartaz" /><p className='sub2'> Veja o que está em cartaz!</p>   
      
            <img className='sub22' src={sub1} alt="Propaganda dos trailers"/> <p className='sub3_1'>Veja os trailers e sinopses dos filmes! </p>
    
            <img className='sub11' src={sub3} alt="Propaganda dos destaques" /><p className='sub1'>  Tenha acesso aos filmes mais assistidos! </p>
            </div>
        </div>
    </div>

    <div className='login'>

  
        <div className='blockquote text-center'>
            <img className='seta2' src={arrow} alt="seta de rolamento 2" width='80' height='50'/>
            <div className='txt2'>
                <h1 className='Display1'> MaxCine </h1>
                <p className='mb-0'> Não perca tempo, reserve um lugar para assistir o último lançamento nos <br/>melhores cinemas da sua região! </p>
            </div>

            <button className='b1'> Cadastre-se </button> 
            <a href='../Pages/Entrar.html'><button className='b2'>Entrar</button></a> 
        </div>
    </div>

<footer>&copy;2020 WomenSoft Corporation</footer>
</div>

)

}

export default Site