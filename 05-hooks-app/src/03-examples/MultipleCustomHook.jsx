import { useFetch } from "../hooks"

export const MultipleCustomHook = () => {

  // const handlePrint = () => {
  //   window.print();
  // };
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1'
  const { data, hasError, isLoading } = useFetch(urlPokemon);
  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {(isLoading) && <p>Cargando...</p>}
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      <h1>{data?.name}</h1>
      {/* <button onClick={handlePrint}>Imprimir</button> */}
    </>
  )
}