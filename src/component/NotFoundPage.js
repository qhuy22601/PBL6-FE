import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "./styles/404page.css";

function NotFoundPage() {
  return (
    // <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
    //   <div><h1 className="mb-5 text-danger">404 Page Not Found</h1></div>
    //   <div><Link to="/"><Button variant="success">Back to HomePage</Button></Link></div>
    // </div>
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

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

export default NotFoundPage;
