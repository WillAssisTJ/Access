
interface InputProps {
  id: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input type={type} id={id} name={id} placeholder={placeholder} />
    </div>
  );
}

export default Input;

    