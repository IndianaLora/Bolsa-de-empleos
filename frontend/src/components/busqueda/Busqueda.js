import React from "react";
import "./busqueda.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
function Busqueda() {
  return (
    <main>
      <Switch>
        <div>
          <div>
            <div className="fondo"></div>
            <h1 className="h1">¿Buscas empleo?</h1>
            <br></br>
            <p className="pa">
              Selecciona el area de trabajo que quieres buscar y la ciudad
            </p>
            <nav className="navbar2">
              <div>
                <div className="d-flex">
                  <input
                    className="form-select"
                    type="search"
                    placeholder="Buscar Empleos"
                    aria-label="Search"
                  ></input>

                  <select
                    className="select1"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccione categoria</option>
                    <option value="430">Administrativa</option>
                    <option value="43">Agropecuaria</option>
                    <option value="44">Alimenticia</option>
                    <option value="45">Arquitectura</option>
                    <option value="46">Artesanal</option>
                    <option value="47">Automotriz</option>
                    <option value="162">Banca / Financiera</option>
                    <option value="163">Biotecnologia</option>
                    <option value="164">Comercio</option>
                    <option value="165">Construccion</option>
                    <option value="166">Consultoria</option>
                    <option value="167">Consumo Masivo</option>
                    <option value="168">Defensa</option>
                    <option value="169">Diseno</option>
                    <option value="170">Educacion</option>
                    <option value="171">Energia</option>
                    <option value="172">Entretenimiento</option>
                    <option value="173">Farmaceutica</option>
                    <option value="174">Financiera</option>
                    <option value="175">Forestal</option>
                    <option value="176">Gastronomia</option>
                    <option value="177">Gobierno</option>
                    <option value="178">Holding</option>
                    <option value="179">Hoteleria</option>
                    <option value="180">Imprenta</option>
                    <option value="2163">Industria</option>
                    <option value="181">Informacion e Investigacion</option>
                    <option value="182">Informatica / Tecnologia</option>
                    <option value="183">Inmobiliaria</option>
                    <option value="184">Internet</option>
                    <option value="185">Juridica</option>
                    <option value="203">Legal</option>
                    <option value="186">Manufactura</option>
                    <option value="187">Medios</option>
                    <option value="188">Mineria / Petroleo / Gas</option>
                    <option value="189">ONGs</option>
                    <option value="190">Otra</option>
                    <option value="191">Pesca</option>
                    <option value="192">Publicidad / Marketing</option>
                    <option value="193">Quimica</option>
                    <option value="194">Salud</option>
                    <option value="202">Seguridad</option>
                    <option value="195">Seguros</option>
                    <option value="196">Servicios</option>
                    <option value="42">Siderurgica</option>
                    <option value="197">Supermercados</option>
                    <option value="198">Telecomunicaciones</option>
                    <option value="199">Textil</option>
                    <option value="200">Transporte</option>
                    <option value="201">Turismo</option>
                  </select>

                  <select
                    className="select2"
                    aria-label="Default select example"
                  >
                    <option value="">Provincia...</option>
                    <option value="26">Azua</option>
                    <option value="30">Bahoruco</option>
                    <option value="29">Barahona</option>
                    <option value="23">Dajabón</option>
                    <option value="41">Distrito Nacional</option>
                    <option value="17">Duarte</option>
                    <option value="37">El Seibo</option>
                    <option value="34">Elías Piña</option>
                    <option value="13">Espaillat</option>
                    <option value="39">Hato Mayor</option>
                    <option value="18">Hermanas Mirabal</option>
                    <option value="32">Independencia</option>
                    <option value="36">La Altagracia</option>
                    <option value="35">La Romana</option>
                    <option value="14">La Vega</option>
                    <option value="19">María Trinidad Sánchez</option>
                    <option value="15">Monseñor Nouel</option>
                    <option value="22">Monte Cristi</option>
                    <option value="40">Monte Plata</option>
                    <option value="31">Pedernales</option>
                    <option value="27">Peravia</option>
                    <option value="12">Puerto Plata</option>
                    <option value="20">Samaná</option>
                    <option value="25">San Cristóbal</option>
                    <option value="28">San José de Ocoa</option>
                    <option value="33">San Juan</option>
                    <option value="38">San Pedro de Macorís</option>
                    <option value="16">Sánchez Ramírez</option>
                    <option value="11">Santiago</option>
                    <option value="24">Santiago Rodríguez</option>
                    <option value="42">Santo Domingo</option>
                    <option value="21">Valverde</option>
                  </select>

                  <button className="btn2 btn-primary btn-lg" type="submit">
                    Buscar
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Switch>
    </main>
  );
}
export default Busqueda;
