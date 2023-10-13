<script>
    let darkMode;
	let darkModeReady = true;

	//funcion para cambiar el tema
	const changeTheme = () => {
		darkMode === true ? (darkModeReady = false) : (darkModeReady = true);
		document.documentElement.classList.toggle('dark'); 
	};
</script>

<div class="absolute flex p-2 md:p-4 bg-green-600 right-2 rounded-b-xl divide-x">
    <div class="flex items-center space-x-2 px-4">
        <label class="cursor-pointer">
            <input
                type="checkbox"
                class="hidden"
                bind:checked={darkMode}
                on:change={changeTheme}
            />
            <div class="w-10 h-6 bg-gray-300 dark:bg-gray-800 rounded-full p-1">
                <div
                    class="bg-white dark:bg-gray-700 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
                    style="transform: translateX({darkMode ? '100%' : '0'})"
                />
            </div>
        </label>
        <p />
        <span class="text-gray-600 dark:text-gray-300"> {darkMode ? '🌞' : '🌑'}</span>
    </div>
    <!-- <div class="flex items-center space-x-2 px-4">
        <label class="cursor-pointer">
            <input 
                type="checkbox" 
                class="hidden" 
                bind:checked={lang} 
                on:change={changeLang} />
            <div class="w-10 h-6 bg-gray-300 dark:bg-gray-800 rounded-full p-1">
                <div
                    class="bg-white dark:bg-gray-700 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
                    style="transform: translateX({lang ? '100%' : '0'})"
                />
            </div>
        </label>
        <p />
        <span class="text-slate-800 dark:text-gray-300 font-semibold"> {lang ? 'EN' : 'ES'}</span>
    </div> -->
</div>