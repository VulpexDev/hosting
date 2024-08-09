// app/page.tsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';


const Home = () => {
  useEffect(() => {
    import('admin-lte');
  }, []);

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Home</a>
          </li>
        </ul>
      </nav>
      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4" id="aside">
        <a href="#" className="brand-link">
          <img src="https://planetapreescolar.com/images/logos/planeta_preescolar_bco.png" alt="Prescolar" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
          <span className="brand-text font-weight-light">Prescolar</span>
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Inicio</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/recomendaciones" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Recomendaciones</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/planeaciones" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Planeaciones</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/hojastrabajo" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Hojas de trabajo</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Material didactico</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Hojas para colorear</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Interactivos</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Administracion</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Blog</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Foro</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Alianzas</p>
                </a>
              </li>
              <li className="nav-item">
                <Link href="/stripe" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Premium</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Content */}
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h5>Regístrate y comienza tus descargas gratis,</h5>
                    <p>obtén descargas ilimitadas volviéndote</p>

                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a href="https://checkout.stripe.com/c/pay/cs_test_a1sonWWTx6ZMLm8l2H9uTVBzluNht84jW3dG7iYAWYK3Pcf571waFNUNM3#fidkdWxOYHwnPyd1blpxYHZxWjA0SGdKbUpGcDA9d1BpX1x%2FTVc9SGs3bUdOVDdUYlJqV2tQQFF2TFBGQDRhMjI3TE5sUmkwUkcycHRkT2FwMTBpRHJTdmh9S29gdjJ2dVQyV3x%2FSl9UQHJUNTVxd0kwZ0hOfycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl" className="small-box-footer">PREMIUM</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className='row'>
              <div className="col-lg-3 col-3">
                <img
                  src="https://planetapreescolar.com/images/logo-planeta.png"
                  alt="Imagen redonda"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col-lg-6 col-6">
              </div>
              <div className="col-lg-3 col-3">
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-3">
              </div>
              <div className="col-lg-6 col-6">
                <div className="">
                  <div className="inner">

                    <form className="d-flex" >
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Busca todos los recursos"
                        aria-label="Buscar"
                      />
                      <button className="btn btn-custom" type="submit">
                        <i className="fas fa-search"></i>

                      </button>
                    </form>

                  </div>

                </div>
              </div>
              <div className="col-lg-3 col-3">
              </div>
            </div>
          </div>
        </section>
        <section className="content" id = "sectionCards">
          <div className="container-fluid">
            <div className='row'>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div> 
            </div>
            <div className='row'>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div>
             <div className="col-lg-3 col-3">
             <div className="card">
                <div className="card-header">
                  <h3 className="card-title">TEXTING</h3>
                </div>
                <div className="card-body">
                  <img className="img-fluid" src='https://via.placeholder.com/150' alt="Card image cap" />
                  <p>TESTING</p>
                </div>
              </div>
             </div> 
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
