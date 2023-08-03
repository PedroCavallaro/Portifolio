import Swal from "sweetalert2";

export const swal = Swal.mixin({
    position: "top",
    icon: "success",
    timer: 2000,
    text: "Mensagem enviada!",
});
