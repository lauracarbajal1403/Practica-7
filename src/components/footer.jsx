import "../components/ContextMovieCard.css"
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffc0cb", padding: "3rem 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>

        <div style={{ textAlign: "left" }}>
          <p className = "texto">Miembros:</p>
          <ul className="texto">
            <li>Laura Carbajal</li>
            <li>Susana Mejia</li>
            <li>Rafael Anaya</li>
            <li>Tony</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <p className="texto">2026A</p>
          <p className="texto">Abril 2026</p>
          <img src="/cucei1.png" alt="kusey" style={{ marginTop: "0.5rem" }} />
        </div>

        <div style={{ textAlign: "right" }}>
          <p className="texto">Desarrollo de apps web y móviles</p>
          <p className="texto">Zeus Cobián</p>
        </div>

      </div>
    </footer>
  )
}