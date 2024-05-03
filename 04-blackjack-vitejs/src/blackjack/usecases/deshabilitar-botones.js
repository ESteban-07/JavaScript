import { imprimirGanador } from "./";

export const deshabilitarBotones = () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    imprimirGanador();
};