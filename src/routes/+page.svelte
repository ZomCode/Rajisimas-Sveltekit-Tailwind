<script>
	import { Carousel } from 'flowbite-svelte';

	import imgShowSlider1 from '../img/Rajisimas1.webp';
	import imgShowSlider2 from '../img/Arbolisimo1.webp';
    import Rajisimas1 from '../img/RAJISIMAS_460gr.webp';
	import Rajisimas2 from '../img/RAJISIMAS_235gr.webp';
	import Machisima1 from '../img/MACHISIMA_230gr.webp';
	import Machisima2 from '../img/MACHISIMA_150gr.webp';
	import Machisima3 from '../img/MACHISIMA ARANDANO_150gr.webp';
	import Arbolisimo from '../img/ARBOLISIMO_340gr.webp';

	import Products from '../components/Products.svelte';
    import Contact from '../components/Contact.svelte';
	const images = [
		{
			alt: 'Cosmic timetraveler',
			src: imgShowSlider1,
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			alt: 'Cosmic timetraveler 2',
			src: imgShowSlider2,
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		}
	];

	var Productos = [
		{
			"Nombre": "Rajísimas",
			"Variantes": [
				{
					"Gramage": 460,
					"Sabor": null,
					"Img": Rajisimas1
				},
				{
					"Gramage": 235,
					"Sabor": null,
					"Img": Rajisimas2
				}
			]
		},
		{
			"Nombre": "Machísima",
			"Variantes": [
				{
					"Gramage": 230,
					"Sabor": null,
					"Img": Machisima1
				},
				{
					"Gramage": 150,
					"Sabor": null,
					"Img": Machisima2
				},
				{
					"Gramage": 150,
					"Sabor": "Arandano",
					"Img": Machisima3
				}
			]
		},
		{
			"Nombre": "Arbolísimo",
			"Variantes": [
				{
					"Gramage": 150,
					"Sabor": null,
					"Img": Arbolisimo
				}
			]
		}
	];
</script>
<Carousel {images} duration={3000} let:Indicators let:Controls class="rounded-none max-h-[15vh] md:max-h-full animate-fade animate-once animate-duration-1000 animate-delay-[50ms] animate-ease-in">
    <Controls/>
    <Indicators />
</Carousel>
<Products {Productos} />
<Contact />
