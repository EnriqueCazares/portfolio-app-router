import Link from "next/link";


const TODOS_COUNT = 20;


export default function Todos() {

    const generateTodos = () =>  
        Array.from({length: TODOS_COUNT}).map((_, i) => 
            <li key={`todo-${i}`}>
                <Link href={`/todos/${i}`}>Todo - {i}</Link>
            </li>
        );
    

    return (
        <div>
            Todos List:
            <ul>
                {generateTodos()}
            </ul>
        </div>
    )
}