export default function About({ name }) {
  return (
    <section id="about">
      <h2>About <span>Me</span></h2>
      <div className="about-text">
        <p>
          I'm <strong>{name}</strong>, a Computer Engineering student at
          Charotar University of Science and Technology, Anand.
        </p>
        <p>
          I'm learning frontend web development with HTML, CSS, JavaScript, and React.
          I enjoy building projects and improving my skills through practice.
        </p>
        <p>
          I'm focused on growing as a developer and taking on new challenges.
        </p>
      </div>
    </section>
  );
}
