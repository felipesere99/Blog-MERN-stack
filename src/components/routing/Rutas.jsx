import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Navbar } from "../layout/Navbar";
import { Sidebar } from "../layout/Sidebar";
import { Articulos } from "../pages/Articulos";
import { Inicio } from "../pages/Inicio";
import { Articulo } from "../pages/Articulo";
import { Crear } from "../pages/Crear";
import { Busqueda } from "../pages/Busqueda";
import { Editar } from "../pages/Editar";


export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <Header />
            <Navbar />
            {/* Contenido central y rutas */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/articulos" element={<Articulos />} />
                    <Route path="/crear-articulos" element={<Crear />} />
                    <Route path="/buscar/:busqueda" element={<Busqueda />} />
                    <Route path="/articulo/:id" element={<Articulo />} />
                    <Route path="/editar/:id" element={<Editar />} />

                    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Sidebar />

            <Footer />
        </BrowserRouter>
    );
};
