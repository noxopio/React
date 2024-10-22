import { useCounter, useFetch } from "../hooks"

export const MultipleCustomHook = () => {

  // const handlePrint = () => {
  //   window.print();
  // };

  const { counter, increment, decrement } = useCounter(1);
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, hasError, isLoading } = useFetch(urlPokemon);
  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {(isLoading) && <p>Cargando...</p>}
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      <h1>{data?.name}</h1>

      <button
        className="btn btn-primary mt-2 "
      >
        Siguiente
      </button>
      <button
        className="btn btn-primary mt-2 "
        >
        Anterior
      </button>
    </>
  )
}