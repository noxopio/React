import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

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
      {(isLoading) ?
        <LoadingMessage /> :
        (
          <PokemonCard
            name={data?.name}
            id={data?.id}
            sprites={[

              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,

            ]}

          />
        )
      }
      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      {/* <h1>{data?.name}</h1> */}

      <button
        className="btn btn-primary mt-2 "
        onClick={() => counter > 1 ? decrement() : null}
      >
        Anterior
      </button>

      <button
        className="btn btn-primary mt-2 "
        onClick={() => { increment(1) }}
      >
        Siguiente
      </button>
    </>
  )
}