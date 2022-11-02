import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function UnauthorizedPage() {
  return (
    <section class="page_401">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">401</h1>
              </div>

              <div class="contant_box_401">
                <h3 class="h2">No Duty Exemption</h3>

                <p>Beware ferocious dog</p>

                <Link to="/">
                  <Button variant="success">Back to HomePage</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnauthorizedPage;
