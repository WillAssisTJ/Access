import './style.css';

interface ButtonProps {
  id: string;
  image?: string;
  name: string;
}

const Button: React.FC<ButtonProps> = ({ id, image, name }) => {
  return (
    <div>
      <div className="custon-button" id={id}>
        <button>
            {image && <img src={image} alt={name} className="button-image"/>}{name}
        </button>
      </div>
    </div>
  );
}

export default Button;
