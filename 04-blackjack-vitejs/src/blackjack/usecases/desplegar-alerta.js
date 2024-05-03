import { puntosJugador, puntosComputadora } from "../";

export const desplegarAlerta = ({ title, icon }) => {
    return setTimeout(() => {
      Swal.fire({
        title,
        icon,
        text: `Tú: ${puntosJugador} - PC: ${puntosComputadora}`,
      });
    }, 1000);
};
