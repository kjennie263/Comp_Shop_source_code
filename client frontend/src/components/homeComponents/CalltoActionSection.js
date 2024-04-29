import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Cізге қосымша кеңес керек пе?</h2>
              <p>Тіркеліңіз, және соңғы кеңестерден хабардар болыңыз.</p>
              <form className="form-section">
                <input placeholder="Сіздің эл. поштаңыз..." name="email" type="email" />
                <input value="Иә. Келісемін!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
