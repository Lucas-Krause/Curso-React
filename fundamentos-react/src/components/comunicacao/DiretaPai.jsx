import DiretaFilha from "./DiretaFilha";

export default function DiretaPai(props) {
	return (
        <div>
            <DiretaFilha nome="Esther" idade={17} nerd={true}></DiretaFilha>
            <DiretaFilha nome="Luana" idade={21} nerd={false}></DiretaFilha>
        </div>
    )
}
