import { ReactNode } from "react";
import styles from './label.module.css';

type LabelProps = {
    className?,
    htmlFor?: string;

    children?: ReactNode;
}

const Label: React.FC<LabelProps> = ({
    className,
    htmlFor,
    children,
}) => {

    return (
        <div className={className}>
            <label 
            htmlFor={htmlFor}
            className={styles.label}>
                {children}
            </label>
        </div>
    )
}

export default Label