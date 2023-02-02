export function InputSearch() {
    return (
        <>
            <h1>InputSearch</h1>
            <div className="title w-[50%] block mx-auto px-8">
                <label for="full-name" class="leading-7 text-sm text-gray-600"><h2>Pesquisar</h2></label>
                <input type="text" id="full-name" name="full-name" class="w-full bg-opacity-50 rounded-full border focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </>
    )
}