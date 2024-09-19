import { getByTestId, render, screen } from "@testing-library/react"
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp>', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();

    })

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getAllByText(title)).toBeTruthy();

    })
    test('Debe mostrar el titulo en un H1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })


    test('Debe mostrar el Subtitulo enviado por props ', () => {
        render(<FirstApp
            title={title}
            subTitle={subTitle}
        />);
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })

})
