const Footer = ({ itemslength }) => {
  const today = new Date()
  return (
    <footer>
      <p style={{marginBottom: "10px"}}>{itemslength} List {itemslength === 1 ? "item" : "items"}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer