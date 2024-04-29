import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>24/7 Хабарласыңыз!</h5>
            <p>+7 747 841 53 50</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Мекен-жайымыз</h5>
            <p>Алматы қ. Назабаев к. 226 үй</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Факс</h5>
            <p>+7 747 841 53 50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
