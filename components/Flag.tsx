import { ReactNode } from "react"

type FlagProps = {
    className: string,
    text: string,
    icon?: ReactNode
}

const Flag = ({className, text, icon}: FlagProps) => {
    return (
        <div className={`flag ${className}`}>{icon}{text}</div>
    )
}

export default Flag