import React from "react";
import Header from "../../../../components/headers/site/main";
import "./resources/main.scss";

const Try = () => {
  return (
    <>
      <Header />
      <section className="primary">
        <div class="container">
          <div className="left-panel"></div>
          <div className="right-panel">
            <h1 className="panel-title">Try Nitros at your Outlet!</h1>
            <form>
              <div className="form-group">
                <p className="form-label">Restaurant Name</p>
                <input
                  className="form-item"
                  type="text"
                  name="restaurant-name"
                  placeholder="The Food Cart"
                />
                <p className="form-message">
                  Please enter a valid name for the restaurant.
                </p>
              </div>
              <div className="form-group">
                <p className="form-label">Manager's Name</p>
                <input
                  className="form-item"
                  type="text"
                  name="restaurant-email"
                  placeholder="Vinod Kumar"
                />
                <p className="form-message">
                  Please enter a valid name for the restaurant.
                </p>
              </div>
              <div className="form-group">
                <p className="form-label">Manager's e-Mail</p>
                <input
                  className="form-item"
                  type="email"
                  name="restaurant-email"
                  placeholder="manager@thefoodcart.com"
                />
                <p className="form-message">
                  Please enter a valid name for the restaurant.
                </p>
              </div>
              <div className="form-group group-submit">
                <p className="disclaimer-text">
                  By clicking the button below, you agree to receive an
                  invitation from Nitros by DineDroid for evaluation.
                </p>
                <button
                  className="form-item"
                  name="restaurant-email"
                  value="Get Invitation"
                >
                  Get Invitation
                </button>
              </div>
            </form>
            <div className="post-form-content">
              <p>Already have an account? Please Login.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Try;
