import { useEffect, useState } from 'react';

export const useValidation = (value: string, validations: any) => {
    const [isEmpty, setEmpty] = useState<boolean>(false);
    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [urlError, setUrlError] = useState<boolean>(false);
    const [isInputValid, setInputValid] = useState<boolean>(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'isEmail':
                    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                    regEmail.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'isUrl':
                    const regUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
                    regUrl.test(String(value).toLowerCase()) ? setUrlError(false) : setUrlError(true);
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || maxLengthError || minLengthError || emailError || urlError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError, emailError, urlError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        isInputValid,
        urlError
    }
}
