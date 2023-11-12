import { AutoFormInputComponentProps } from "../types";
import AutoFormInput from "./input";

export default function AutoFormNumber({
    fieldProps,
    ...props
}: AutoFormInputComponentProps) {
    return (
        <AutoFormInput
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            fieldProps={{
                type: "number",
                ...fieldProps,
            }}
            {...props}
        />
    );
}
