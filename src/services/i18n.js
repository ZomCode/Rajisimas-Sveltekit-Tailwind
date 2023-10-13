import { dictionary, locale, _ } from "svelte-i18n";
import { derived } from 'svelte/store';

function setupI18n({
    withLocale: _locale
} = {
        withLocale: 'es'
    }) {
    dictionary.set({
        en: {
            "header": {
                "home": "Home",
                "whereshop": "Where Shop?",
                "about": "About"
            },
            "footer": {
                "titleSections" : "Sections",
                "sections" : {
                    "home": "Home",
                    "whereshop": "Where Shop?",
                    "about": "About"
                },
                "titleSupport" : "Support",
                "support" : {
                    "privacy policies" : "Privacy policies",
                    "terms of use" : "Terms of use"
                },
                "titleContact" : "Contact us",
                "contactInfo" : {
                    "location" : "Location",
                    "phone" : "Phone",
                    "email" : "E-mail"
                },
                "rights" : "All rights reserved"
            },
            "home" : {
                "title" : "Explore our products",
                "rajisimasDescription" : "Slices of jalapeño, carrot, onion, spices. Uniquely with apple cider vinegar. Our grandmother's recipe, no artificial preservatives.",
                "machisimaDescription" : "Macha sauce, a blend of 4 chilies, pumpkin seeds, peanuts, and sesame seeds. The sauce that goes with everything. No artificial preservatives.",
                "arbolisimoDescription" : "Fried árbol chili, with spices. Perfect to accompany your broths. No artificial preservatives.",
            },
            "ContactUs" : {
                "titleContactUs" : "Contact us",
                "email" : "Email",
                "phone" : "Phone",
                "subject" : "Subjet",
                "company" : "Company",
                "message" : "Message"
            },
            "stores" : {
                'titleSection' : "We have a great Chain of Self-Service Stores, Convenience Stores and University Stores, in which you can find our products.",
                "titlePhysicalStores" : "Physical stores",
                "titleOnlineStores" : "Online stores",
                "branch" : "Branch",
                "branches" : "Branches",
                "ask" : "What you can find here?",
                "waiting" : "Waiting for an option",
                "branchName" : "Branch Name",
                "buy" : "Buy"
            },
            "we" : {
                "mission" : {
                    "tittleMission" : "Mision",
                    "text" : "Create healthy food products with great taste and tradition, making people's lives easier, integrating sustainable practices for our planet, based on a social economy model."
                },
                "vission" : {
                    "tittleVission" : "Vision",
                    "text" : "To export our products starting in 2024, reaching more Latinos around the world, and conquering the nostalgia market."
                },
                "values" : {
                    "tittleValues" : "Values",
                    "text" : "JOY • HONESTY • RESPECT • JUSTICE • SOLIDARITY • EXCELLENCE • INNOVATION • TEAMWORK • SOCIAL RESPONSIBILITY"
                }
            }
        },
        es: {
            "header": {
                "home": "Inicio",
                "whereshop": "¿Dónde comprar?",
                "about": "Nosotros"
            },
            "footer": {
                "titleSections" : "Secciones",
                "sections" : {
                    "home": "Inicio",
                    "whereshop": "¿Dónde comprar?",
                    "about": "Nosotros"
                },
                "titleSupport" : "Soporte",
                "support" : {
                    "privacy policies" : "Póliticas de privacidad",
                    "terms of use" : "Terminos de uso"
                },
                "titleContact" : "Contactanos",
                "contactInfo" : {
                    "location" : "Ubicación",
                    "phone" : "Telefono",
                    "email" : "Correo Electronico"
                },
                "rights" : "Todos los derechos reservados"
            },
            "home" : {
                "title" : "Explora nuestros productos",
                "rajisimasDescription" : "Rajas de jalapeño, zanahoria, cebolla, especias. Únicas con vinagre de manzana. Receta de nuestra abuela, sin conservadores artificiales.",
                "machisimaDescription" : "Salsa macha, mezcla de 4 chiles, pepita, cacahuate y ajonjolí. La salsa que va con todo. Sin conservadores artificiales.",
                "arbolisimoDescription" : "Chile de árbol frito, con especias. Perfecto para acompañar tus caldos. Sin conservadores artificiales.",
            },
            "ContactUs" : {
                "titleContactUs" : "Contacta con nosotros",
                "email" : "Correo electrónico",
                "phone" : "Teléfono",
                "subject" : "Asunto",
                "company" : "Empresa",
                "message" : "Mensaje"
            },
            "stores" : {
                'titleSection' : "Contamos con una gran Cadena de Tiendas de Autoservicio, Tiendas de Conveniencia y Tiendas de Universidades, en las cuales podrás encontrar nuestros productos.",
                "titlePhysicalStores" : "Tiendas Físicas",
                "titleOnlineStores" : "Tiendas en Linea",
                "branch" : "Sucursal",
                "branches" : "Sucursales",
                "ask" : "¿Que puedes encontrar aquí?",
                "waiting" : "Esperando una opción",
                "branchName" : "Nombre Sucursal",
                "buy" : "Comprar"
            },
            "we" : {
                "mission" : {
                    "tittleMission" : "Misión",
                    "text" : "Crear productos alimenticios saludables con gran sabor y tradición, facilitando la vida de las personas, integrando prácticas sostenibles para nuestro planeta, basándonos en un modelo de economía social."
                },
                "vission" : {
                    "tittleVission" : "Visión",
                    "text" : "Exportar nuestros productos a partir del 2024 llegando a más latinos alrededor del mundo, conquistando el mercado de la nostalgia"
                },
                "values" : {
                    "tittleValues" : "Valores",
                    "text" : "ALEGRÍA • HONESTIDAD • RESPETO • JUSTICIA • SOLIDARIDAD • EXCELENCIA • INNOVACIÓN • TRABAJO EN EQUIPO • RESPONSABILIDAD SOCIAL" 
                }
            }
        }
    });
    locale.set(_locale);
}
const isLocaleLoaded = derived(locale, $locale => {
    if (typeof $locale !== 'string') {
        return;
    }
    document.querySelector('html').setAttribute('lang', $locale);
});

export { _ , setupI18n, isLocaleLoaded};
