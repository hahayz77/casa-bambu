import { Dropdown } from "@nextui-org/react";
import { useMemo, useState } from "react";

export function CategoriesSpecial() {
    const [selected1, setSelected1] = useState(new Set(["Todos os Produtos"]));
    const [selected2, setSelected2] = useState(new Set(["Para toda Casa"]));
    const [selected3, setSelected3] = useState(new Set(["Todos as Cores"]));
    const selectedValue1 = useMemo(() => Array.from(selected1).join(", ").replaceAll("_", " "),[selected1]);
    const selectedValue2 = useMemo(() => Array.from(selected2).join(", ").replaceAll("_", " "),[selected2]);
    const selectedValue3 = useMemo(() => Array.from(selected3).join(", ").replaceAll("_", " "),[selected3]);
    
    return (
        <>
            <div className="filter">
                <Dropdown>
                    <Dropdown.Button flat color="secondary" css={{ tt: "capitalize", color: 'black', bg: 'white' }}>
                        {selectedValue1}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        css={{}}
                        aria-label="Single selection actions"
                        color="default"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected1}
                        onSelectionChange={setSelected1}
                    >
                        <Dropdown.Item key="todos os produtos">Todos Os Produtos</Dropdown.Item>
                        <Dropdown.Item key="melhores descontos">Melhores Descontos</Dropdown.Item>
                        <Dropdown.Item key="mais vendidos">Mais Vendidos</Dropdown.Item>
                        <Dropdown.Item key="mais caros">Mais Caros</Dropdown.Item>
                        <Dropdown.Item key="mais baratos">Mais Baratos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Button flat color="secondary" css={{ tt: "capitalize", color: 'black', bg: 'white' }}>
                        {selectedValue2}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        css={{}}
                        aria-label="Single selection actions"
                        color="default"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected2}
                        onSelectionChange={setSelected2}
                    >
                        <Dropdown.Item key="para toda casa">Para Toda Casa</Dropdown.Item>
                        <Dropdown.Item key="sala de estar">Sala de Estar</Dropdown.Item>
                        <Dropdown.Item key="quartos">Quartos</Dropdown.Item>
                        <Dropdown.Item key="cozinha">Cozinha</Dropdown.Item>
                        <Dropdown.Item key="banheiro">Banheiro</Dropdown.Item>
                        <Dropdown.Item key="outros">Outros</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Button flat color="secondary" css={{ tt: "capitalize", color: 'black', bg: 'white' }}>
                        {selectedValue3}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        css={{}}
                        aria-label="Single selection actions"
                        color="default"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected3}
                        onSelectionChange={setSelected3}
                    >
                        <Dropdown.Item key="todas as cores">Todas as Cores</Dropdown.Item>
                        <Dropdown.Item key="branco">Claros</Dropdown.Item>
                        <Dropdown.Item key="escuros">Escuros</Dropdown.Item>
                        <Dropdown.Item key="metálicos">Metálicos</Dropdown.Item>
                        <Dropdown.Item key="foscos">Foscos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}