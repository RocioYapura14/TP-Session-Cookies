const {check} = require("express-validator")

module.exports = [
check("nombre")
.notEmpty()
.withMessage("Ingresar un nombre").bail()
.isAlpha()
.withMessage("Ingresar un nombre valido"),

check("colores")
.notEmpty()
.withMessage("Eliga un color"),

check("email")
.notEmpty()
.withMessage("Ingresar un email").bail()
.isEmail()
.withMessage("Ingresar un email valido"),

]
