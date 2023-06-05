import { Alert } from "react-native";
import { useRef, useState } from "react";

enum Operators {
    addition, substraction, multiplication, division
}

export const useCalculator = () => {

    const [previousNumber, setPreviousNumber] = useState('0')
    const [number, setNumber] = useState('0')
    const [btnCounter, setCounter] = useState(1)

    const lastOperation = useRef<Operators>()

    const clean = () => {
        setNumber('0')
        setPreviousNumber('0')
    }

    const getNumber = (textNumber: string) => {
        // setNumber(number + textNumber)
        // not ..
        if (number.includes('.') && textNumber === '.') {
            return
        }

        if (number.startsWith('0') || number.startsWith('-0')) {
            // first decimal
            if (textNumber === '.') {

                setNumber(number + textNumber)
                // one more cero and dot
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)
                // eval number is defferent to cero not dot
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)

                // not permited 0000.0
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number)


            } else {

                setNumber(number + textNumber)
            }


        } else {

            setNumber(number + textNumber)
        }



    }

    const abs = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const delButton = () => {
        let negative = '';
        let tempNumber = number;
        if (number.includes('-')) {
            negative = '-';
            tempNumber = number.substring(1)
        }

        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1))
        } else {
            setNumber('0');
        }

    }

    const changePreviousNumber = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0')
    }

    const btnDivision = () => {
        changePreviousNumber()
        lastOperation.current = Operators.division
    }

    const btnMutiplication = () => {
        changePreviousNumber()
        lastOperation.current = Operators.multiplication
    }

    const btnAddition = () => {
        changePreviousNumber()
        lastOperation.current = Operators.addition
    }

    const btnSubstraction = () => {
        changePreviousNumber()
        lastOperation.current = Operators.substraction
    }


    const calculate = () => {

        if (btnCounter > 1) {
            return
        } else {
            const valOne = Number(number);
            const valTwo = Number(previousNumber);

            switch (lastOperation.current) {
                case Operators.addition:
                    setNumber(`${valOne + valTwo}`)
                    break;
                case Operators.substraction:
                    setNumber(`${valTwo - valOne}`)
                    break;
                case Operators.division:
                    if (valOne === 0) {
                        Alert.alert('Operation Error', 'Cannot divide by zero', [
                            { text: 'OK', onPress: () => console.log('division error can not divide by zero') },
                        ]);
                    } else {
                        setNumber(`${valTwo / valOne}`)
                    }
                    break;
                case Operators.multiplication:
                    setNumber(`${valOne * valTwo}`)
                    break;
                default:
                    break
            }

            setCounter(1)
            setPreviousNumber('0')
        }



    }

    return {
        number,
        previousNumber,
        clean,
        getNumber,
        abs,
        delButton,
        btnAddition,
        btnMutiplication,
        btnSubstraction,
        btnDivision,
        calculate
        // btnCounter

    }

};