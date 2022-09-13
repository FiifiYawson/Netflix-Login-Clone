export default function Input({name,type, placeholder,value,text}){
    return(
        <div className='input' type={name}>
            <input id={name} type={type} placeholder={placeholder} value={value}/>
            <label htmlFor={name}>{text}</label>
        </div>
    )
}