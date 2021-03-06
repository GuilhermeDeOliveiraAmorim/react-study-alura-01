import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import StyleLista from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={StyleLista.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;