import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>Plumshp es una tienda en línea que ofrece una amplia variedad de productos cuidadosamente seleccionados para satisfacer tus necesidades. Desde artículos de moda hasta productos para el hogar, nuestra tienda en línea tiene todo lo que buscas.

Nos enorgullece brindar una experiencia de compra segura y conveniente. Con un proceso de pago sencillo y envío confiable, puedes tener la tranquilidad de que recibirás tus productos de manera rápida y eficiente.

En Plumshp, nos esforzamos por ofrecer productos de alta calidad de marcas confiables. Nuestro equipo está constantemente buscando nuevos artículos y tendencias para asegurarnos de que siempre encuentres algo especial en nuestra tienda.

Valoramos a nuestros clientes y nos esforzamos por brindar un excelente servicio al cliente. Si tienes alguna pregunta o necesitas ayuda, nuestro equipo de soporte está listo para atenderte.

Explora nuestra tienda en línea y descubre una amplia selección de productos que mejorarán tu estilo de vida. En Plumshp, nos comprometemos a hacer que tu experiencia de compra sea excepcional en todos los sentidos.</p>





    </div>

    
    
  )
}


export default Nosotros 