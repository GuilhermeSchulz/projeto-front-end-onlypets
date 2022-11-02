
import { ReactNode } from "react";
import {Input, Label} from "./styles";

interface iInputComponentProps {
    placeholder: string;
    type: string;
    id: string;
    children: ReactNode;
}

export const InputComponent = ({
    placeholder,
    type,
    id, 
    children
}: iInputComponentProps) => {
    return (
        <Label>
            {children}
            <Input
                placeholder={placeholder}
                type={type}
                id={id}>
            </Input>
        </Label>
        
    )
}

