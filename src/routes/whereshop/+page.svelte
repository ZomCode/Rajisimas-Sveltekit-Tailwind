<script>
	import WhereShop from '../../components/WhereShop.svelte';

	import chedahuiJson from '../../Json/Chedrahui.json';
	import oxxoJson from '../../Json/Oxxo.json';
	import unamJson from '../../Json/Unam.json';

	import Rajisimas1 from '../../img/RAJISIMAS_460gr.webp';
	import Rajisimas2 from '../../img/RAJISIMAS_235gr.webp';
	import Machisima1 from '../../img/MACHISIMA_230gr.webp';
	import Machisima2 from '../../img/MACHISIMA_150gr.webp';
	import Machisima3 from '../../img/MACHISIMA ARANDANO_150gr.webp';
	import Arbolisimo from '../../img/ARBOLISIMO_340gr.webp';

	import LogoChedrahui from '../../img/LogoOxxo.webp';
	import LogoOxxo from '../../img/LogoOxxo.webp';
	import LogoUnam from '../../img/LogoOxxo.webp';

	let imgSucurChe = {
		'Plaza Crystal': [Rajisimas2, Machisima2, Machisima3],
		'Selecto Angelopolis': [Rajisimas2, Machisima2, Machisima3],
		'Cruz del Sur': [Rajisimas2, Machisima2, Machisima3],
		'Explanada Puebla': [Rajisimas2, Machisima2, Machisima3],
		'Centro Sur': [Machisima2, Machisima3],
		UPAEP: [Machisima2, Machisima3],
		Xonaca: [Machisima2, Machisima3],
		Atlixco: [Rajisimas2, Machisima2, Machisima3],
		Teziutlan: [Machisima2, Machisima3],
		Tepeaca: [Machisima2, Machisima3]
	};
	let imgSucurOxxo = [
		Machisima1, Machisima2
	];
	let imgSucurUnam = [
		Rajisimas1, Machisima1
	];

	let stores = [
		{
			title: 'CHEDRAHUI',
			sucursalesData: chedahuiJson,
			colorTitle: 'text-orange-600',
			images: imgSucurChe,
			showInput: true
		},
		{
			title: 'OXXO',
			sucursalesData: oxxoJson,
			colorTitle: 'text-yellow-400',
			images: imgSucurOxxo,
			showInput: true
		},
		{
			title: 'TIENDA UNAM',
			sucursalesData: unamJson,
			colorTitle: 'text-blue-400',
			images: imgSucurUnam,
			showInput: false
		}
		// Add more stores here as needed.
	];
</script>

<section class="flex flex-col items-center md:justify-center gap-y-4 dark:bg-[#0F0F0F] bg-white py-4 ">
	<article class="h-auto md:h-[100vh] flex flex-col justify-evenly py-4">
		<div class="font-bold text-2xl md:text-4xl text-center dark:text-white text-black mx-8 md:mx-12">
			Tiendas
		</div>
		<div class="flex items-center flex-wrap justify-evenly gap-4 w-full [&>img]:h-[8em] sm:[&>img]:min-h-[10em] p-4">
			<img src="{LogoChedrahui}" alt="Logo Chedrahui">
			<img src="{LogoOxxo}" alt="Logo Oxxo">
			<img src="{LogoUnam}" alt="Logo Tienda Unam">
		</div>
	</article>

	<article class="flex flex-col w-full">
		<div class="font-bold text-4xl text-center dark:text-white text-black efect-fade-up">
			Tiendas Físicas
		</div>
	
		{#each stores as store}
			<WhereShop
				titleStore={store.title}
				sucursalesData={store.sucursalesData}
				colorTitle={store.colorTitle}
				images={store.images}
				showInput={store.showInput}
			/>
		{/each}
	
		<div class="font-bold text-4xl text-center dark:text-white text-black w-full efect-fade-up">
			Tienda en Línea
		</div>
		<div class="flex flex-col items-center p-4 w-full efect-fade-up">
			<div class="w-full text-center text-3xl font-bold uppercase text-yellow-300">
				Mercado Libre
			</div>
			<div class="grid justify-items-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 h-auto">
				<div class="flex justify-center items-center gap-2 col-span-1 md:col-span-2 lg:md:col-span-1 shadow-xl rounded-xl p-4">
					<a
						href="https://rajisimas.mercadoshops.com.mx/"
						target="_blank"
						class="
							grid place-items-center
							bg-yellow-400 hover:bg-yellow-600 
							text-white font-bold text-3xl
							rounded-2xl
							w-3/4 lg:h-1/4
							pb-2 overflow-hidden
						"
					>
						Comprar
					</a>
				</div>
				<div class="flex flex-col items-center gap-2 col-span-1 md:col-span-2 shadow-xl rounded-lg w-full">
					<p class="text-1xl text-slate-500 text-center py-4">
						Que puedes encontrar en nuestra tienda en línea
					</p>
					<div
						class="
							grid grid-cols-2 md:grid-cols-3 place-content-around place-items-center gap-2 md:gap-4 
							rounded-xl 
							[&>img]:w-[8em] sm:[&>img]:min-h-[10em]
							animate-fade animate-once animate-ease-linear 
							py-4 w-full"
					>
						<img src={Rajisimas1} alt={Rajisimas1} />
						<img src={Rajisimas2} alt={Rajisimas2} />
						<img src={Machisima1} alt={Machisima1} />
						<img src={Machisima2} alt={Machisima2} />
						<img src={Machisima3} alt={Machisima3} />
						<img src={Arbolisimo} alt={Arbolisimo} />
					</div>
				</div>
			</div>
		</div>
	</article>
</section>

<style>
	@keyframes show {
		from{
			opacity: 0;
			scale: 25%;
		}

		to{
			opacity: 1;
			scale: 100%;
		}
	}

	.efect-fade-up{
		view-timeline-name: --fadeUp;
		view-timeline-axis: block;

		animation-timeline: --fadeUp;
		animation-name: show;

		animation-range: entry 10% 	cover 40%;
		animation-fill-mode: both;
	}
</style>