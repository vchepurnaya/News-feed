import React, { useState } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const valid = useValidation(value, validations)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsDirty(true);
    }

    return {
        value,
        onChange,
        onBlur,
        ...valid,
        isDirty,
        setValue,
        setIsDirty
    }
}
