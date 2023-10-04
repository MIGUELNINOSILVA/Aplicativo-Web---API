import '../styles/FooterPage.css';


export const FooterPage = () => {
  return (
    <footer className='d-flex justify-content-between align-items-center'>
      <ul>
        <li>Info 1</li>
        <li>Info 2</li>
        <li>Info 3</li>
      </ul>
      <ul>
        <li>Info 1</li>
        <li>Info 2</li>
        <li>Info 3</li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Miguel. Todos los derechos reservados</p>
      
    </footer>
  )
}
