import { Div1 } from './div1';
import { Div2 } from './Div2';

export function App() {
    return (
        <div>
            <Div1 name="react" id={1} />
            <Div1 name="react" id={2} />
            <Div2 id=" props" />
        </div>
    );
}

