type InputProps = {
  name: string;
  value: number | string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
  type: string;
  step?: number;
  min?: string;
};

function Input({ name, value, setValue, type, min, step }: InputProps) {
  return (
    <div className="input-container">
      <input
        value={value}
        onChange={(e) => {
          console.log("input event", e);
          console.log("type", type);
          type === "number"
            ? setValue(e.target.valueAsNumber)
            : setValue(e.target.value);
        }}
        name={name}
        type={type}
        className="input"
        placeholder="Enter value"
        min={min}
        step={step}
      />
    </div>
  );
}
export default Input;
