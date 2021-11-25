import React from "react";

function Footer() {
  return (
    <>
      {/* <footer className="row my-3 bg-light">
       <ul className="nav justify-content-center">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">
             Active
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">
             Link
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">
             Link
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link disabled">Disabled</a>
         </li>
       </ul>
     </footer> */}
      {/* <footer className="bg-light text-center text-lg-start mt-5">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
        >
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer> */}
      <br />
      <br />
      <footer
        class="text-center text-white mt-5"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        {/* <!-- Grid container --> */}
        <div class="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section class="mb-4">
            {/* <!-- Facebook --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fa fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fa fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fa fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fa fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fa fa-linkedin"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fa fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright: Hassen Hassen
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}

export default Footer;
