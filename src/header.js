import CartWidget from "../src/components/CarWidget/CartWidget";

function Header () {
  return (<header>
        <nav>
          <h3 className="d-flex bg-success text-white d-flex justify-content-center">Fit Market</h3>
          <br />
          <div className="d-flex justify-content-center">
              <button className="btn btn-primary m-2">Snacks</button>
              <button className="btn btn-primary m-2">Congelados</button>
              <button className="btn btn-primary m-2">Parva</button>
          </div>
          <CartWidget/>
      </nav>
    </header>
    )
}

export default Header;