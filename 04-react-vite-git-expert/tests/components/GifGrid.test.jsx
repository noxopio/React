import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs')
describe('Pruebas en <GifGrind', () => {
    const category = 'One punch';

    test('Debe de mostrar el loading incialmente ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        })
        render(<GifGrid category={category} />);



    })








})