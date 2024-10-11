import { render ,screen} from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('GifItem', () => {

    const titulo = 'Alucard';
    const url = 'https://Alucard.com/alucar.jpg';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={titulo} url={url} />);
        expect(container).toMatchSnapshot();
    })

test('Debe tener un parrafo con el titulo', () => {
  
    const { getByText } = render(<GifItem title={titulo} url={url} />);
    expect(getByText(titulo)).toBeTruthy()







});











}); 