import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Script from "next/script";

const BootstrapTest = () => {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      />
      <div className="container border mt-[100px]">
        <Link className="btn btn-outline-primary" href="#">
          <button className="">Hello World</button>
        </Link>
        <h1 className="mx-auto bg-slate-600 w-[350px] text-center">
          This is heading 1
        </h1>
        <div className="alert alert-danger alert-dismissiable" role="alert">
          <button
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
          Close me... Please!
        </div>

        {/* customer review section start */}
        <div className="customer-review bg-light text-center">
          <div className="title text-center mb-3">
            <h3 className="font-weight-border">Customer Review</h3>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna{" "}
                  <abbr title="Dragon Killer">DK</abbr>.
                </p>
                <footer className="blockquote-footer">
                  Aminul Kibria an <cite>Web Developer</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        {/* customer review section end */}
      </div>
    </>
  );
};

export default BootstrapTest;
