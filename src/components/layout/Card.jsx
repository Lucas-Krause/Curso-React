import './Card.css'

export default function Card(props) {

  const style = {
    backgroundColor: props.color || '#f00',
    borderColor: '#000'
  }

  return (
    <div>
      <div className="Card" style={style}>
        <h2 className="Title">{props.titulo}</h2>
        <p className="Content">
            {props.children}
        </p>
      </div>
    </div>
  );
}
