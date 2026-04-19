import "../components/ContextMovieCard.css"
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffffff", padding: "3rem 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>

        <div style={{ textAlign: "left" }}>
          <p className = "texto">Miembros:</p>
          <ul className="texto">
            <li>Laura Ixchel Carbajal Jiménez</li>
            <li>Susana Rubí Manzo Mejía</li>
            <li>Jose Antonio Montero González</li>
            <li>Luis Rafael Anaya Valladolid</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <p className="texto">Curso: 2026A</p>
          <p className="texto">Abril 2026</p>
          <img src="/cucei1.png" alt="kusey" style={{ marginTop: "1rem" }} />
        </div>

        <div style={{ textAlign: "right" }}>
          <p className="texto">Materia: Desarrollo de apps web en la nube y móviles</p>
          <p className="texto">Profesor: Zeus Emmanuel Gutierrez Cobián</p>
        </div>

      </div>
    </footer>
  )
}