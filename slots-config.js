/* ============================================================
   KIU PLAY · CONFIGURACIÓN DE LUGARES (slots-config.js)
   ------------------------------------------------------------
   ⚠️  ESTE ARCHIVO CONTIENE UNA CREDENCIAL.
   ------------------------------------------------------------
   La token de GitHub está acá y, como la app se publica en GitHub
   Pages, CUALQUIERA que abra la página puede leerla con F12.

   QUÉ PUEDE HACER ALGUIEN CON ESTA TOKEN
   Lo que vos le hayas dado permiso. Por eso:

     ✅ Creála como "Fine-grained token"
     ✅ Seleccioná SOLO el repositorio KIU
     ✅ Dale SOLO el permiso "Contents: Read and write"
     ✅ Nada más. Ni Actions, ni Settings, ni Administration.

   Con esos límites, el peor caso es que alguien modifique archivos
   de ESTE repositorio. Se recupera con el historial de git. Si le das
   permisos amplios, el peor caso es todo tu GitHub.

   CÓMO CAMBIARLA
   Se cambia acá y en ningún otro lado. Después hay que volver a subir
   el archivo al repositorio.

   Última actualización de esta token: 2025-02
   ============================================================ */

window.KIU_SLOTS_CONFIG = {
    /* Token de GitHub (fine-grained, sólo Contents de este repo) */
    token: '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',

    /* Repositorio donde vive users.json */
    repo: 'lucianomendozaoficial-dev/KIU',

    /* Archivo y rama */
    archivo: 'users.json',
    rama: 'main',

    /* Cuántos segundos se guarda la última lectura.
       Evita gastar pedidos a GitHub cuando se abre la app varias veces.
       Con un token propio el límite es 5000 pedidos por hora. */
    cacheSegundos: 20,

    /* Si algo falla con GitHub, ¿se deja entrar igual?
       Sí: es peor dejar a alguien afuera de su cuenta por un problema
       técnico que no cobrarle una sesión de más. */
    permitirSinVerificar: true
};
