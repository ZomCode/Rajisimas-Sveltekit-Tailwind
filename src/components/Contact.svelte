<script>
	import logoRajisimas from '../img/logoR.webp';

	let email = '';
	let tel = '';
	let about = '';
	let company = '';
	let message = '';

	const enviarFormulario = () => {
		if (email === '' || about === '' || company === '' || message === '') {
			alert('Por favor, llene todos los campos');
		} else {
			alert('Gracias por contactarnos, te responderemos lo más pronto posible');
			email = '';
			tel = '';
			about = '';
			company = '';
			message = '';
		}
	};
</script>

<section
	class="
    grid items-center
	min-h-min
	bg-no-repeat bg-cover bg-center bg-[url('src/img/bgRajisimas.webp')]
	dark:bg-gradient-to-b from-[#0F0F0F] to-green-800
	"
>
	<div
		class="
			flex flex-col items-center
			backdrop-blur-md
			bg-opacity-30 rounded-lg
			bg-gray-300
			min-h-min
			p-4 my-8 m-auto
			w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]
        "
	>
		<div
			class="
				flex flex-col items-center text-center
			"
		>
			<img src={logoRajisimas} alt="Rajisimas" class="h-24" />
			<h4 class="font-bold- text-4xl text-black dark:text-white">
				Contacta con nosotros
			</h4>
		</div>
		<form
			action="https://formsubmit.co/rajisimasconsabor@gmail.com"
			method="POST"
			class="
				w-full 
				grid grid-cols-1 md:grid-cols-2 gap-4 
				text-black dark:text-white
				[&>input]:w-full
				md:[&>textarea]:col-span-2
				[&>textarea]:w-full
				place-items-center
				[&>button]:col-span-1 md:[&>button]:col-span-2
			"
		>
			<input
				type="email"
				name="email"
				id="email"
				placeholder={"Corro Electronico*"}
				bind:value={email}
				required
				autocomplete="email"
				class="
					w-full
					bg-transparent p-2
					rounded-lg
					border-2
					border-gray-300
					hover:border-lime-700
					focus:outline-none
					focus:ring
					focus:ring-lime-200
					focus:border-transparent
					placeholder:text-gray-800 dark:placeholder:text-gray-400
				"
			/>
			<input
				type="tel"
				name="tel"
				id="tel"
				placeholder={"Teléfono"}
				bind:value={tel}
				accept="[0-9]"
				required
				autocomplete="tel"
				class="
					bg-transparent p-2
					rounded-lg
					border-2
					border-gray-300
					hover:border-lime-700
					focus:outline-none
					focus:ring
					focus:ring-lime-200
					focus:border-transparent
					placeholder:text-gray-800 dark:placeholder:text-gray-400
				"
			/>
			<input
				type="text"
				name="_subject"
				id="_subject"
				placeholder="Tema*"
				bind:value={about}
				required
				class="
					bg-transparent p-2
					rounded-lg
					border-2
					border-gray-300
					hover:border-lime-700
					focus:outline-none
					focus:ring
					focus:ring-lime-200
					focus:border-transparent
					placeholder:text-gray-800 dark:placeholder:text-gray-400
				"
			/>
			<input
				type="text"
				name="company"
				id="company"
				placeholder="Compania*"
				bind:value={company}
				required
				autocomplete="organization"
				class="
					bg-transparent p-2
					rounded-lg
					border-2
					border-gray-300
					hover:border-lime-700
					focus:outline-none
					focus:ring
					focus:ring-lime-200
					focus:border-transparent
					placeholder:text-gray-800 dark:placeholder:text-gray-400
				"
			/>
			<textarea
				name="message"
				id="message"
				rows="3"
				placeholder="mensaje*"
				bind:value={message}
				required
				class="
					bg-transparent p-2
					rounded-lg
					border-2
					border-gray-300
					hover:border-lime-700
					focus:outline-none
					focus:ring
					focus:ring-lime-200
					focus:border-transparent
					placeholder:text-gray-800 dark:placeholder:text-gray-400
					resize-none
				"
			/>
			<button
				type="submit"
				class="
					flex justify-center
					col-span-1 md:col-span-2
					rounded-full
					font-semibold
					text-white
					bg-gradient-to-r from-green-500 to-yellow-400
					px-4 py-2 hover:ring-4 ring-offset-2 ring-offset-green-900 ring-lime-900 mt-2
					w-1/2
					md:w-1/4
					
				"
				on:click={enviarFormulario}
			>
				Enviar
			</button>
		</form>
	</div>
</section>
