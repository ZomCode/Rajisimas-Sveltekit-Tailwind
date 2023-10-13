<script>
	export let Productos;
</script>

<section 
	class="
		bg-gray-100
		dark:bg-gray-800
		flex flex-col items-center 
		gap-14 py-14 px-6
		[&>div]:animate-fade-up animate-once animate-duration-1000 animate-ease-in
		"
	>
	<div class="dark:text-white font-bold text-4xl sm:text-5xl p-6 uppercase w-full text-center">
		Conoce nuestros productos
	</div>

	{#each Productos as {Nombre, Variantes, nombreDescription}}
		<div
			class="
				group
				flex flex-col justify-center items-center
				rounded-lg 
				bg-gray-300 shadow-lg shadow-gray-800  
				dark:bg-zinc-700 dark:shadow-gray-300
				
				min-w-[60vw]
				min-h-[45vh]
				md:min-h-min
				efect-fade-up
				py-4
			"
			
		>
			<div
				class="
					absolute
					text-center
					font-bold italic text-4xl p-2 text-gray-900 dark:text-white group-hover:text-yellow-400
					border-y-2 border-black dark:border-white group-hover:backdrop-blur-md group-hover:border-y-2 group-hover:border-yellow-400
					transition-all duration-1000 ease-in-out
					group-hover:-translate-x-[120vw]
					md:group-hover:-translate-x-[30vw]
					lg:group-hover:-translate-x-[40vw]
					group-hover:scale-[1.4]
				"
			>
				{Nombre}
			</div>
			<p 
				class="
					text-gray-700 dark:text-gray-300 text-center font-semibold p-4
					absolute bottom-0
					group-hover:opacity-0 delay-500 transition-opacity ease-in-out duration-200
				"
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolor quis cupiditate? Accusamus, ipsam porro ab assumenda quod, vel odit nam molestiae nobis possimus est in minus saepe id voluptate.
			</p>
			<div
				class="
					flex 
					flex-col 
					md:flex-row justify-evenly
					gap-6
					p-6
					transition-all duration-1000 ease-in-out opacity-[0.1] group-hover:opacity-[1]
					
				"
			>
				<!-- Itera sobre los tipos de gramaje y pos ibles variantes -->
				{#each Variantes as {Gramage, Sabor, Img}}
					<div class="flex items-center">
						<img src={Img} alt="Rajisimas" class="h-40 hover:scale-110 transition-all ease-in-out duration-500" />
						{#if Sabor}
							<div class="flex flex-col [&>p]:m-0">
								<p class="text-slate-700 dark:text-white font-semibold">Sabor: {Sabor}</p>
								<p class="text-slate-700 dark:text-white font-semibold">{Gramage}gr</p>
							</div>
						{:else}
							<p class="text-slate-700 dark:text-white font-semibold">{Gramage}gr</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/each}
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