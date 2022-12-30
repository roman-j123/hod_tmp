import './Welcome.css';

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__content">
        <div className="welcome__wrap">
          <h1 className="welcome__title">Образовательная платформа</h1>
          <h2 className="welcome__name">ХОД Future Academy</h2>
          <p className="welcome__description">Актуальные знания для новичков и профессионалов</p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;