import Toastify from 'toastify-js';

// Validar campos obligatorios
export function validarCampoObligatorio(valor: string, mensaje: string): string | null {
    if (!valor || valor.trim() === '') {
        return mensaje;
    }
    return null;
}

// Validar horas (hora fin > hora inicio)
export function validarHoras(horaInicio: string, horaFin: string): string | null {
    if (horaFin <= horaInicio) {
        return '⚠️ La hora de fin debe ser mayor que la hora de inicio';
    }
    return null;
}

// Validar longitud de un campo
export function validarLongitud(valor: string, min: number, max: number, mensaje: string): string | null {
    const longitud = valor.trim().length;
    if (longitud < min || longitud > max) {
        return mensaje;
    }
    return null;
}

// Validar identificación (obligatoria + longitud)
export function validarIdentificacion(valor: string): string | null {
    if (!valor || valor.trim() === '') {
        return '⚠️ La identificación es obligatoria';
    }
    if (valor.length < 6 || valor.length > 15) {
        return '⚠️ La identificación debe tener entre 6 y 15 caracteres';
    }
    return null;
}

// Validar correo con dominio @unicauca.edu.co
export function validarCorreo(valor: string, dominio: string = '@unicauca.edu.co'): string | null {
    const regex = new RegExp(`^[a-zA-Z0-9._%+-]+\\${dominio}$`);
    if (!regex.test(valor)) {
        return `⚠️ El correo debe tener el dominio ${dominio}`;
    }
    return null;
}

// Validar género (radio buttons)
export function validarGenero(seleccionado: boolean, mensaje: string): string | null {
    if (!seleccionado) {
        return mensaje;
    }
    return null;
}


// Mensaje de éxito
export function mostrarMensajeExito(): void {
    Toastify({
        text: "✅ ¡Registro exitoso!",
        duration: 3000,
        gravity: "top", // posición vertical
        position: "right", // posición horizontal
        style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
}




// Función principal que valida todo el formulario
export function validarFormulario() {
    const inputTipoIdentificacion = document.getElementById('tipoIdentificacion') as HTMLSelectElement;
    const inputIdentificacion = document.getElementById('numeroIdentificacion') as HTMLInputElement;
    const inputNombres = document.getElementById('nombresPaciente') as HTMLInputElement;
    const inputApellidos = document.getElementById('apellidosPaciente') as HTMLInputElement;
    const inputCorreoElectronico = document.getElementById('correoElectronico') as HTMLInputElement;
    const inputGenero = document.getElementsByName('genero') as NodeListOf<HTMLInputElement>;
    const inputMedico = document.getElementById('medico') as HTMLInputElement;
    const inputFechaNacimiento = document.getElementById('fechaNacimiento') as HTMLInputElement;


    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion') as HTMLElement;
    const labelErrorNumeroIdentificacion = document.getElementById('errorNumeroIdentificacion') as HTMLElement;
    const labelErrorNombres = document.getElementById('errorNombres') as HTMLElement;
    const labelErrorApellidos = document.getElementById('errorApellidos') as HTMLElement;
    const labelErrorCorreo = document.getElementById('errorCorreo') as HTMLElement;
    const labelErrorGenero = document.getElementById('errorGenero') as HTMLElement;
    const labelErrorMedico = document.getElementById('errorMedico') as HTMLElement;
    const labelErrorFechaNacimiento = document.getElementById('errorFechaNacimiento') as HTMLElement;


    const tipoIdentificacionValida = validarCampoObligatorio(inputTipoIdentificacion.value, "⚠️ El tipo de identificación es obligatorio");
    const identificacionValida = validarIdentificacion(inputIdentificacion.value);
    const nombresValidos = validarLongitud(inputNombres.value, 3, 20, "⚠️ El nombre debe tener entre 3 y 20 caracteres");
    const apellidosValidos = validarLongitud(inputApellidos.value, 3, 20, "⚠️ El apellido debe tener entre 3 y 20 caracteres");
    const correoValido = validarCorreo(inputCorreoElectronico.value, "@unicauca.edu.co");
    const generoValido = validarGenero(Array.from(inputGenero).some(g => g.checked), "⚠️ El género es obligatorio");
    const medicoValido = validarCampoObligatorio(inputMedico.value, "⚠️ El médico es obligatorio");
    const fechaNacimientoValida = validarCampoObligatorio(inputFechaNacimiento.value, "⚠️ La fecha de nacimiento es obligatoria");


    if (tipoIdentificacionValida && identificacionValida && nombresValidos && apellidosValidos && correoValido && generoValido && medicoValido && fechaNacimientoValida) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formularioRegistro') as HTMLFormElement;;
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        formulario.classList.add("was-validated");
        setTimeout(() => {
            formulario.reset();
        }, 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario.');
        return false;
    }
}

// Validaciones al perder el foco
function validarCamposAlCambiarFoco() {
    const inputTipoIdentificacion = document.getElementById('identificacion') as HTMLSelectElement;
    const inputIdentificacion = document.getElementById('identificacion') as HTMLInputElement;
    const inputNombres = document.getElementById('nombres') as HTMLInputElement;
    const inputApellidos = document.getElementById('apellidos') as HTMLInputElement;
    const inputCorreoElectronico = document.getElementById('correoElectronico') as HTMLInputElement;
    const inputGenero = document.getElementsByName('genero') as NodeListOf<HTMLInputElement>;
    const inputMedico = document.getElementById('medico') as HTMLInputElement;
    const inputFechaNacimiento = document.getElementById('fechaNacimiento') as HTMLInputElement;

    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion') as HTMLElement;
    const labelErrorNumeroIdentificacion = document.getElementById('errorNumeroIdentificacion') as HTMLElement;
    const labelErrorNombres = document.getElementById('errorNombres') as HTMLElement;
    const labelErrorApellidos = document.getElementById('errorApellidos') as HTMLElement;
    const labelErrorCorreo = document.getElementById('errorCorreo') as HTMLElement;
    const labelErrorGenero = document.getElementById('errorGenero') as HTMLElement;
    const labelErrorMedico = document.getElementById('errorMedico') as HTMLElement;
    const labelErrorFechaNacimiento = document.getElementById('errorFechaNacimiento') as HTMLElement;

    inputTipoIdentificacion.addEventListener('blur', () => validarCampoObligatorio(inputTipoIdentificacion.value, "⚠️ El tipo de identificación es obligatorio"));
    inputIdentificacion.addEventListener('blur', () => validarIdentificacion(inputIdentificacion.value));
    inputNombres.addEventListener('blur', () => validarLongitud(inputNombres.value, 3, 20, "⚠️ El nombre debe tener entre 3 y 20 caracteres."));
    inputApellidos.addEventListener('blur', () => validarLongitud(inputApellidos.value, 3, 20, "⚠️ El apellido debe tener entre 3 y 20 caracteres."));
    inputCorreoElectronico.addEventListener('blur', () => validarCorreo(inputCorreoElectronico.value, "@unicauca.edu.co"));
    inputFechaNacimiento.addEventListener('blur', () => validarCampoObligatorio(inputFechaNacimiento.value, "⚠️ La fecha de nacimiento es obligatoria"));
    inputMedico.addEventListener('blur', () => validarCampoObligatorio(inputMedico.value, "⚠️ El médico es obligatorio"));
    Array.from(inputGenero).forEach(input => input.addEventListener('blur', () => validarGenero(Array.from(inputGenero).some(g => g.checked), "⚠️ El género es obligatorio")));

}


// Función principal que valida el formulario de médicos
function validarFormularioMedico() {
    const inputNombresMedico = document.getElementById('nombresMedico') as HTMLInputElement;
    const inputApellidosMedico = document.getElementById('apellidosMedico') as HTMLInputElement;
    const inputEspecialidadMedico = document.getElementById('especialidadMedico') as HTMLInputElement;
    const inputHorarioMedico = document.getElementById('horarioMedico') as HTMLInputElement;
    const inputExperienciaMedico = document.getElementById('experienciaMedico') as HTMLInputElement;

    const labelErrorNombresMedico = document.getElementById('errorNombresMedico') as HTMLElement;
    const labelErrorApellidosMedico = document.getElementById('errorApellidosMedico') as HTMLElement;
    const labelErrorEspecialidadMedico = document.getElementById('errorEspecialidadMedico') as HTMLElement;
    const labelErrorHorarioMedico = document.getElementById('errorHorarioMedico') as HTMLElement;
    const labelErrorExperienciaMedico = document.getElementById('errorExperienciaMedico') as HTMLElement;

    const nombresValidos = validarLongitud(inputNombresMedico.value, 3, 20, "El nombre debe tener entre 3 y 20 caracteres") === null;
    const apellidosValidos = validarLongitud(inputApellidosMedico.value, 3, 20, "El apellido debe tener entre 3 y 20 caracteres") === null;
    const especialidadValida = validarLongitud(inputEspecialidadMedico.value, 3, 30, "La especialidad debe tener entre 3 y 30 caracteres") === null;
    const horarioValido = validarCampoObligatorio(inputHorarioMedico.value, "El horario es obligatorio") === null;
    const experienciaValida = validarIdentificacion(inputExperienciaMedico.value) === null;

    if (nombresValidos && apellidosValidos && especialidadValida && horarioValido && experienciaValida) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formMedico') as HTMLFormElement | null;
        if (formulario !== null) {
            formulario.scrollIntoView({ behavior: "smooth", block: "start" });
            formulario.classList.add("was-validated");
            setTimeout(() => {
                formulario.reset();
            }, 2000);
        }
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario de médico.');
        return false;
    }
}


// Validaciones al perder el foco
function validarCamposMedicoAlCambiarFoco() {
    const inputNombresMedico = document.getElementById('nombresMedico') as HTMLInputElement;
    const inputApellidosMedico = document.getElementById('apellidosMedico') as HTMLInputElement;
    const inputEspecialidadMedico = document.getElementById('especialidadMedico') as HTMLInputElement;
    const inputHorarioMedico = document.getElementById('horarioMedico') as HTMLInputElement;
    const inputExperienciaMedico = document.getElementById('experienciaMedico') as HTMLInputElement;

    const labelErrorNombresMedico = document.getElementById('errorNombresMedico') as HTMLElement;
    const labelErrorApellidosMedico = document.getElementById('errorApellidosMedico') as HTMLElement;
    const labelErrorEspecialidadMedico = document.getElementById('errorEspecialidadMedico') as HTMLElement;
    const labelErrorHorarioMedico = document.getElementById('errorHorarioMedico') as HTMLElement;
    const labelErrorExperienciaMedico = document.getElementById('errorExperienciaMedico') as HTMLElement;

    inputNombresMedico.addEventListener('blur', () => labelErrorNombresMedico.textContent = validarLongitud(inputNombresMedico.value, 3, 20, "El nombre debe tener entre 3 y 20 caracteres") ?? '');
    inputApellidosMedico.addEventListener('blur', () => labelErrorApellidosMedico.textContent = validarLongitud(inputApellidosMedico.value, 3, 20, "El apellido debe tener entre 3 y 20 caracteres") ?? '');
    inputEspecialidadMedico.addEventListener('blur', () => labelErrorEspecialidadMedico.textContent = validarLongitud(inputEspecialidadMedico.value, 3, 30, "La especialidad debe tener entre 3 y 30 caracteres") ?? '');
    inputHorarioMedico.addEventListener('blur', () => labelErrorHorarioMedico.textContent = validarCampoObligatorio(inputHorarioMedico.value, "El horario es obligatorio") ?? '');
    inputExperienciaMedico.addEventListener('blur', () => labelErrorExperienciaMedico.textContent = validarIdentificacion(inputExperienciaMedico.value) ?? '');
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);
    document.addEventListener('DOMContentLoaded', validarCamposMedicoAlCambiarFoco);

    document.addEventListener('DOMContentLoaded', () => {
        const formPaciente = document.getElementById("formularioRegistro") as HTMLFormElement | null;
        if (formPaciente) {
            formPaciente.addEventListener("submit", (e: Event) => {
                e.preventDefault();
                validarFormulario();
            });
        }
        validarCamposAlCambiarFoco();
    });

    document.addEventListener('DOMContentLoaded', () => {
        const formMedico = document.getElementById("formMedico") as HTMLFormElement | null;
        if (formMedico) {
            formMedico.addEventListener("submit", (e: Event) => {
                e.preventDefault();
                validarFormularioMedico();
            });
        }
        validarCamposMedicoAlCambiarFoco();
    });
}
