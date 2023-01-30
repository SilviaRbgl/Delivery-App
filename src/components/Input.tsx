type InputProps = {
    name: string,
    value: number | string,
    setValue: React.Dispatch<React.SetStateAction<any>>,
    className?: string
    type: string,
    step?: number,
    min?: string  // NOTE añadido prop min , para poder añadir la propiedad min="0" en los inputs y no poder tener valores negavios 
    // TODO min="0" en el input solo evita numeros negativos al seleccionar con las flechas, pero no si se clicka directamente en el campo y se teclea. Hacer comprobación también en las funciones (transformando el numero negativo en 0 al recibir el valor)
}
function Input({ name, value, setValue, type, min, step }: InputProps) {

    return (
        <div className="input-container">
            <input
                value={value}
                onChange={(e) => {
                    console.log("input event", e);
                    console.log("type", type);
                    type === "number" ? setValue(e.target.valueAsNumber) : setValue(e.target.value)
                }}

                name={name}
                type={type}
                className="input"
                placeholder="Enter value"
                min={min}
                step={step}
            />
        </div>
    )
}
export default Input